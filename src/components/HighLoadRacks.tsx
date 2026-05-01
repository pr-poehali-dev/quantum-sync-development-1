import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Thermometer",
    title: "До 40 кВт на стойку",
    description: "Эффективный отвод тепла от стоек с экстремальной плотностью вычислений",
  },
  {
    icon: "Droplets",
    title: "Адиабатическое охлаждение",
    description: "Снижение температуры за счёт испарения воды без компрессорных систем",
  },
  {
    icon: "Gauge",
    title: "Точный климат-контроль",
    description: "Поддержание заданных параметров температуры и влажности 24/7",
  },
  {
    icon: "Leaf",
    title: "Экономия до 70%",
    description: "Минимальное энергопотребление по сравнению с традиционными решениями",
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
            Современные серверы потребляют десятки киловатт на стойку. Наши адиабатические системы справляются с самыми высокими тепловыми нагрузками, обеспечивая стабильную работу оборудования и снижая эксплуатационные расходы.
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
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
