import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "PencilRuler",
    title: "Разработка",
    description: "Проектирование и изготовление вентмашин под конкретный объект",
  },
  {
    icon: "Wrench",
    title: "Монтаж",
    description: "Пусконаладочные работы и ввод систем в эксплуатацию",
  },
  {
    icon: "Headphones",
    title: "Сервис",
    description: "Техническое обслуживание и гарантийная поддержка 24/7",
  },
];

export default function Featured() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/9356f3fb-c376-457e-84cc-c897123112ea.jpg"
          alt="Монтаж систем охлаждения ЦОД"
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
            Полный цикл работ
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95] text-white">
            От проекта<br />до сервиса
          </h2>
          <div className="w-24 h-px bg-cyan-300 mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed">
            Проектируем и изготавливаем адиабатические вентиляционные машины под ваши задачи. Полный цикл — от расчёта и поставки до монтажа, пусконаладки и сервисного обслуживания.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
              <Icon name={service.icon} size={32} className="text-cyan-300 mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-neutral-300 leading-relaxed">
                {service.description}
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
            Узнать стоимость
          </button>
        </motion.div>
      </div>
    </section>
  );
}
