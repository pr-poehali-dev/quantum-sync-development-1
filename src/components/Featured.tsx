export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/9356f3fb-c376-457e-84cc-c897123112ea.jpg"
          alt="Монтаж систем охлаждения ЦОД"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Собственное производство</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Проектируем и изготавливаем адиабатические вентиляционные машины под ваши задачи. Полный цикл — от расчёта до монтажа и сервисного обслуживания.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">Разработка</span>
            <span className="text-neutral-700">Проектирование и изготовление вентмашин под объект</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">Монтаж</span>
            <span className="text-neutral-700">Пусконаладочные работы и ввод систем в эксплуатацию</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">Сервис</span>
            <span className="text-neutral-700">Техническое обслуживание и гарантийная поддержка</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать стоимость
        </button>
      </div>
    </div>
  );
}