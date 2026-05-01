import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Icon from "@/components/ui/icon";

const HOURS_PER_YEAR = 8760;

const formatRub = (value: number) => {
  if (!isFinite(value)) return "—";
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
};

const formatNumber = (value: number) => {
  if (!isFinite(value)) return "—";
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
};

export default function SavingsCalculator() {
  const [itLoadKw, setItLoadKw] = useState<number>(500);
  const [tariff, setTariff] = useState<number>(7.5);

  const result = useMemo(() => {
    const air = {
      pue: 1.6,
      coolingShare: 0.375,
    };
    const liquid = {
      pue: 1.1,
      coolingShare: 0.091,
    };

    const airTotalKw = itLoadKw * air.pue;
    const liquidTotalKw = itLoadKw * liquid.pue;

    const airCoolingKwh = airTotalKw * air.coolingShare * HOURS_PER_YEAR;
    const liquidCoolingKwh = liquidTotalKw * liquid.coolingShare * HOURS_PER_YEAR;

    const airTotalKwh = airTotalKw * HOURS_PER_YEAR;
    const liquidTotalKwh = liquidTotalKw * HOURS_PER_YEAR;

    const airCost = airTotalKwh * tariff;
    const liquidCost = liquidTotalKwh * tariff;

    const savings = airCost - liquidCost;
    const savingsPct = airCost > 0 ? (savings / airCost) * 100 : 0;

    const airCoolingCost = airCoolingKwh * tariff;
    const liquidCoolingCost = liquidCoolingKwh * tariff;

    return {
      airTotalKwh,
      liquidTotalKwh,
      airCoolingKwh,
      liquidCoolingKwh,
      airCost,
      liquidCost,
      airCoolingCost,
      liquidCoolingCost,
      savings,
      savingsPct,
      airPue: air.pue,
      liquidPue: liquid.pue,
    };
  }, [itLoadKw, tariff]);

  const handleLoadChange = (value: string) => {
    const parsed = Number(value.replace(/\s/g, ""));
    if (!isNaN(parsed) && parsed >= 0) setItLoadKw(parsed);
  };

  const handleTariffChange = (value: string) => {
    const parsed = Number(value.replace(",", "."));
    if (!isNaN(parsed) && parsed >= 0) setTariff(parsed);
  };

  return (
    <section className="relative bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-cyan-300 mb-6">
            Калькулятор экономии
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95] text-white">
            Сколько вы<br />сэкономите за год
          </h2>
          <div className="w-24 h-px bg-cyan-300 mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed">
            Введите ИТ-мощность ЦОД и тариф на электроэнергию — получите оценку годовых затрат и экономии при переходе на прямое жидкостное охлаждение.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 border border-white/20 bg-white/5 backdrop-blur-sm p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Calculator" size={28} className="text-cyan-300" />
              <h3 className="text-xl lg:text-2xl font-bold text-white">Параметры</h3>
            </div>

            <div className="space-y-8">
              <div>
                <label className="flex justify-between items-baseline mb-3">
                  <span className="text-sm uppercase tracking-wider text-neutral-300">
                    ИТ-мощность ЦОД
                  </span>
                  <span className="text-cyan-300 text-sm">{formatNumber(itLoadKw)} кВт</span>
                </label>
                <input
                  type="range"
                  min={50}
                  max={10000}
                  step={50}
                  value={itLoadKw}
                  onChange={(e) => setItLoadKw(Number(e.target.value))}
                  className="w-full accent-cyan-300 cursor-pointer"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    value={itLoadKw}
                    onChange={(e) => handleLoadChange(e.target.value)}
                    min={0}
                    className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white text-lg focus:border-cyan-300 outline-none transition-colors"
                  />
                  <span className="text-neutral-400 text-sm">кВт</span>
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  Суммарное потребление серверного оборудования
                </p>
              </div>

              <div>
                <label className="flex justify-between items-baseline mb-3">
                  <span className="text-sm uppercase tracking-wider text-neutral-300">
                    Тариф на электроэнергию
                  </span>
                  <span className="text-cyan-300 text-sm">{tariff} ₽/кВт·ч</span>
                </label>
                <input
                  type="range"
                  min={3}
                  max={15}
                  step={0.1}
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                  className="w-full accent-cyan-300 cursor-pointer"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    value={tariff}
                    onChange={(e) => handleTariffChange(e.target.value)}
                    min={0}
                    step={0.1}
                    className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white text-lg focus:border-cyan-300 outline-none transition-colors"
                  />
                  <span className="text-neutral-400 text-sm">₽/кВт·ч</span>
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  Средний тариф для коммерческого потребителя
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="border border-white/20 bg-white/5 backdrop-blur-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Wind" size={24} className="text-neutral-400" />
                <h4 className="text-lg font-bold text-white">Воздушное</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">PUE</p>
                  <p className="text-2xl font-bold text-white">{result.airPue.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Потребление за год
                  </p>
                  <p className="text-xl font-bold text-white">
                    {formatNumber(result.airTotalKwh / 1000)} МВт·ч
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Затраты на охлаждение
                  </p>
                  <p className="text-xl font-bold text-white">
                    {formatRub(result.airCoolingCost)}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Итого за год
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-white">
                    {formatRub(result.airCost)}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-cyan-300/40 bg-cyan-300/5 backdrop-blur-sm p-6 lg:p-8 relative">
              <div className="absolute top-0 right-0 bg-cyan-300 text-neutral-900 text-xs uppercase tracking-wider px-3 py-1 font-bold">
                Эффективнее
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Droplets" size={24} className="text-cyan-300" />
                <h4 className="text-lg font-bold text-white">Жидкостное</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">PUE</p>
                  <p className="text-2xl font-bold text-cyan-300">
                    {result.liquidPue.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Потребление за год
                  </p>
                  <p className="text-xl font-bold text-cyan-300">
                    {formatNumber(result.liquidTotalKwh / 1000)} МВт·ч
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Затраты на охлаждение
                  </p>
                  <p className="text-xl font-bold text-cyan-300">
                    {formatRub(result.liquidCoolingCost)}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Итого за год
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-cyan-300">
                    {formatRub(result.liquidCost)}
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 border border-cyan-300 bg-gradient-to-br from-cyan-500/20 to-cyan-300/5 backdrop-blur-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="TrendingDown" size={28} className="text-cyan-300" />
                <h4 className="text-lg lg:text-xl font-bold text-white uppercase tracking-wider">
                  Ваша экономия за год
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                <div>
                  <p className="text-4xl lg:text-5xl font-bold text-cyan-300 leading-none mb-2">
                    {formatRub(result.savings)}
                  </p>
                  <p className="text-sm text-neutral-300">в денежном выражении</p>
                </div>
                <div>
                  <p className="text-4xl lg:text-5xl font-bold text-white leading-none mb-2">
                    −{result.savingsPct.toFixed(1)}%
                  </p>
                  <p className="text-sm text-neutral-300">от затрат на электроэнергию</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-4 sm:items-center justify-between"
        >
          <p className="text-xs lg:text-sm text-neutral-500 max-w-2xl">
            Расчёт ориентировочный, основан на типовых значениях PUE для воздушного (1,60) и прямого жидкостного (1,10) охлаждения. Точная экономия зависит от конфигурации, климата и режима эксплуатации.
          </p>
          <button className="bg-white text-neutral-900 px-8 py-4 uppercase tracking-wide text-sm hover:bg-cyan-300 transition-all duration-300 cursor-pointer shrink-0">
            Получить точный расчёт
          </button>
        </motion.div>
      </div>
    </section>
  );
}
