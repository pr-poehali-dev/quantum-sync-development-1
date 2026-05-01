import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={container}
      className="relative h-screen overflow-hidden bg-white"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/d5175968-9ead-40e9-98c8-d9b61c2b49d2.jpg"
          alt="Центр обработки данных"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-16 lg:pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-600 mb-6"
          >
            Энидата Рус
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[0.9] text-neutral-900"
          >
            Холодный<br />расчёт
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-neutral-900 mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl max-w-xl text-neutral-700 mb-10 leading-relaxed"
          >
            Разработка и производство адиабатических вентиляционных машин для Центров Обработки Данных. Монтаж, пусконаладка, сервисное и техническое обслуживание систем вентиляции и кондиционирования.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-neutral-900 text-white px-8 py-4 uppercase tracking-wide text-sm hover:bg-neutral-700 transition-all duration-300 cursor-pointer">
              Получить консультацию
            </button>
            <button className="border border-neutral-900 text-neutral-900 px-8 py-4 uppercase tracking-wide text-sm hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer">
              Наши решения
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}