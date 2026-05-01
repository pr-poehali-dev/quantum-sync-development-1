import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import func2url from "../../backend/func2url.json";

type Status = "idle" | "loading" | "success" | "error";

type CalcSummary = {
  airCost: number;
  adiabaticCost: number;
  liquidCost: number;
  savings: number;
  savingsPct: number;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itLoad: number;
  tariff: number;
  calc: CalcSummary;
};

const formatRub = (value: number) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

export default function QuoteFormDialog({
  open,
  onOpenChange,
  itLoad,
  tariff,
  calc,
}: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const reset = () => {
    setName("");
    setContact("");
    setCompany("");
    setComment("");
    setStatus("idle");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError("Заполните имя и контакт");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(func2url["send-quote"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          company,
          comment,
          itLoad,
          tariff,
          calc: {
            airCost: formatRub(calc.airCost),
            adiabaticCost: formatRub(calc.adiabaticCost),
            liquidCost: formatRub(calc.liquidCost),
            savings: formatRub(calc.savings),
            savingsPct: `${calc.savingsPct.toFixed(1)}%`,
          },
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Не удалось отправить заявку");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="bg-neutral-950 border border-white/20 text-white max-w-lg">
        {status === "success" ? (
          <div className="py-8 text-center">
            <Icon
              name="CheckCircle2"
              size={48}
              className="text-cyan-300 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">Заявка отправлена</h3>
            <p className="text-neutral-300 mb-6">
              Мы свяжемся с вами в ближайшее время и пришлём точный расчёт на
              info@any-data.ru.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="bg-white text-neutral-900 px-6 py-3 uppercase tracking-wide text-sm hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Точный расчёт</DialogTitle>
              <DialogDescription className="text-neutral-400">
                Оставьте контакты — наш инженер пришлёт детальное предложение с
                учётом вашего объекта.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="qf-name" className="text-neutral-300">
                  Имя <span className="text-cyan-300">*</span>
                </Label>
                <Input
                  id="qf-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/40 border-white/20 text-white mt-1"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <Label htmlFor="qf-contact" className="text-neutral-300">
                  Email или телефон <span className="text-cyan-300">*</span>
                </Label>
                <Input
                  id="qf-contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="bg-black/40 border-white/20 text-white mt-1"
                  placeholder="ivan@company.ru"
                  required
                />
              </div>

              <div>
                <Label htmlFor="qf-company" className="text-neutral-300">
                  Компания
                </Label>
                <Input
                  id="qf-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-black/40 border-white/20 text-white mt-1"
                  placeholder="ООО Ромашка"
                />
              </div>

              <div>
                <Label htmlFor="qf-comment" className="text-neutral-300">
                  Комментарий
                </Label>
                <Textarea
                  id="qf-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-black/40 border-white/20 text-white mt-1"
                  placeholder="Особенности объекта, сроки, дополнительные требования"
                  rows={3}
                />
              </div>

              <div className="bg-white/5 border border-white/10 p-4 text-sm text-neutral-300 space-y-1">
                <div className="flex justify-between">
                  <span>ИТ-мощность</span>
                  <span className="text-white">{itLoad} кВт</span>
                </div>
                <div className="flex justify-between">
                  <span>Тариф</span>
                  <span className="text-white">{tariff} ₽/кВт·ч</span>
                </div>
                <div className="flex justify-between">
                  <span>Экономия в год</span>
                  <span className="text-cyan-300 font-bold">
                    {formatRub(calc.savings)}
                  </span>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <Icon name="AlertCircle" size={16} />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-neutral-900 px-6 py-4 uppercase tracking-wide text-sm hover:bg-cyan-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Отправляем…" : "Отправить заявку"}
              </button>

              <p className="text-xs text-neutral-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
