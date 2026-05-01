import json
import os
import smtplib
import ssl
from email.message import EmailMessage


def handler(event: dict, context) -> dict:
    """
    Принимает заявку на расчёт и отправляет письмо на info@any-data.ru
    Args: event - dict с httpMethod, body (JSON: name, contact, itLoad, tariff, calc)
          context - объект с request_id
    Returns: HTTP-ответ с подтверждением отправки
    """
    method = event.get('httpMethod', 'POST')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except Exception:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    name = (body.get('name') or '').strip()
    contact = (body.get('contact') or '').strip()
    company = (body.get('company') or '').strip()
    comment = (body.get('comment') or '').strip()
    it_load = body.get('itLoad')
    tariff = body.get('tariff')
    calc = body.get('calc') or {}

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Укажите имя и контакт'}),
        }

    smtp_host = os.environ.get('SMTP_HOST', '')
    smtp_port = int(os.environ.get('SMTP_PORT', '465') or '465')
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    target_email = 'info@any-data.ru'

    if not smtp_host or not smtp_user or not smtp_password:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'SMTP не настроен'}),
        }

    lines = [
        'Новая заявка на точный расчёт с сайта',
        '',
        f'Имя: {name}',
        f'Контакт: {contact}',
    ]
    if company:
        lines.append(f'Компания: {company}')
    if it_load is not None:
        lines.append(f'ИТ-мощность: {it_load} кВт')
    if tariff is not None:
        lines.append(f'Тариф: {tariff} ₽/кВт·ч')

    if calc:
        lines.append('')
        lines.append('Расчёт калькулятора:')
        for label, key in [
            ('Воздушное (год)', 'airCost'),
            ('Адиабатическое (год)', 'adiabaticCost'),
            ('Жидкостное (год)', 'liquidCost'),
            ('Экономия (жидкостное vs воздушное)', 'savings'),
            ('Экономия %', 'savingsPct'),
        ]:
            if key in calc:
                lines.append(f'  {label}: {calc[key]}')

    if comment:
        lines.append('')
        lines.append('Комментарий:')
        lines.append(comment)

    text_body = '\n'.join(lines)

    msg = EmailMessage()
    msg['Subject'] = f'Заявка на расчёт — {name}'
    msg['From'] = smtp_user
    msg['To'] = target_email
    msg['Reply-To'] = contact if '@' in contact else smtp_user
    msg.set_content(text_body)

    try:
        if smtp_port == 465:
            context_ssl = ssl.create_default_context()
            with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context_ssl, timeout=15) as server:
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
                server.starttls(context=ssl.create_default_context())
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': cors_headers,
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True}),
    }
