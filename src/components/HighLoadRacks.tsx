import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Thermometer",
    title: "До 110 кВт на стойку",
    description: "Эффективный отвод тепла от стоек с экстремальной плотностью вычислений",
  },
  {
    icon: "Droplets",
    title: "Прямое жидкостное охлаждение",
    description: "Отвод тепла напрямую от чипов через теплоноситель — максимальная эффективность для HPC и AI-нагрузок",
  },
  {
    icon: "Gauge",
    title: "Точный климат-контроль",
    description: "Поддержание заданных параметров температуры и влажности 24/7",
  },
  {
    icon: "Leaf",
    title: "Экономия до 30%",
    description: "Снижение общего энергопотребления ЦОД по сравнению с традиционным воздушным охлаждением",
  },
];

export default function HighLoadRacks() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/14e32aac-4daa-4019-bed6-7a926b7e0358.jpg"
          alt="Высоконагруженные серверные стойки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-cyan-300 mb-6">
            Решения для ЦОД
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95] text-white">
            Охлаждение<br />высоконагруженных стоек
          </h2>
          <div className="w-24 h-px bg-cyan-300 mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed">
            Современные серверы AI и HPC потребляют свыше 100 кВт на стойку. Наши решения прямого жидкостного охлаждения справляются с экстремальными тепловыми нагрузками до 110 кВт, обеспечивая стабильную работу оборудования и снижая эксплуатационные расходы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-white/20 bg-white/5 backdrop-blur-sm p-6 lg:p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <Icon name={feature.icon} size={32} className="text-cyan-300 mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base text-neutral-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-32"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-cyan-300 mb-6">
            Сравнение технологий
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12 leading-[0.95] text-white">
            Воздушное vs адиабатическое<br />vs жидкостное охлаждение
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Wind" size={28} className="text-neutral-400" />
                <h4 className="text-xl lg:text-2xl font-bold text-white">Воздушное</h4>
              </div>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Плотность на стойку</span>
                  <span className="text-lg lg:text-xl font-bold text-white">до 25 кВт</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">PUE (типовой)</span>
                  <span className="text-lg lg:text-xl font-bold text-white">1,4–1,8</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Доля энергии на охлаждение</span>
                  <span className="text-lg lg:text-xl font-bold text-white">~40%</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Уровень шума</span>
                  <span className="text-lg lg:text-xl font-bold text-white">75–85 дБ</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-sm lg:text-base">Подходит для AI/HPC</span>
                  <span className="text-lg lg:text-xl font-bold text-white">ограниченно</span>
                </li>
              </ul>
            </div>

            <div className="border border-white/30 bg-white/10 backdrop-blur-sm p-8 lg:p-10 relative">
              <div className="absolute top-0 right-0 bg-white text-neutral-900 text-xs uppercase tracking-wider px-3 py-1 font-bold">
                Энергоэффективно
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="CloudDrizzle" size={28} className="text-white" />
                <h4 className="text-xl lg:text-2xl font-bold text-white">Адиабатическое</h4>
              </div>
              <ul className="space-y-4 text-neutral-200">
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Плотность на стойку</span>
                  <span className="text-lg lg:text-xl font-bold text-white">до 25 кВт</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">PUE (типовой)</span>
                  <span className="text-lg lg:text-xl font-bold text-white">1,15–1,25</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Доля энергии на охлаждение</span>
                  <span className="text-lg lg:text-xl font-bold text-white">~17%</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Уровень шума</span>
                  <span className="text-lg lg:text-xl font-bold text-white">55–65 дБ</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-sm lg:text-base">Подходит для AI/HPC</span>
                  <span className="text-lg lg:text-xl font-bold text-white">средние нагрузки</span>
                </li>
              </ul>
            </div>

            <div className="border border-cyan-300/40 bg-cyan-300/5 backdrop-blur-sm p-8 lg:p-10 relative">
              <div className="absolute top-0 right-0 bg-cyan-300 text-neutral-900 text-xs uppercase tracking-wider px-3 py-1 font-bold">
                Эффективнее
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Droplets" size={28} className="text-cyan-300" />
                <h4 className="text-xl lg:text-2xl font-bold text-white">Жидкостное</h4>
              </div>
              <ul className="space-y-4 text-neutral-200">
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Плотность на стойку</span>
                  <span className="text-lg lg:text-xl font-bold text-cyan-300">до 110 кВт</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">PUE (типовой)</span>
                  <span className="text-lg lg:text-xl font-bold text-cyan-300">1,05–1,15</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Доля энергии на охлаждение</span>
                  <span className="text-lg lg:text-xl font-bold text-cyan-300">~10%</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-sm lg:text-base">Уровень шума</span>
                  <span className="text-lg lg:text-xl font-bold text-cyan-300">45–55 дБ</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-sm lg:text-base">Подходит для AI/HPC</span>
                  <span className="text-lg lg:text-xl font-bold text-cyan-300">оптимально</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 lg:mt-12 text-sm text-neutral-400 max-w-3xl">
            Данные приведены для типовых проектов ЦОД средней и высокой плотности. Точные параметры зависят от конфигурации серверов, климата региона и режима эксплуатации.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20"
        >
          <button className="bg-white text-neutral-900 px-8 py-4 uppercase tracking-wide text-sm hover:bg-cyan-300 transition-all duration-300 cursor-pointer">
            Рассчитать решение
          </button>
        </motion.div>
      </div>
    </section>
  );
}