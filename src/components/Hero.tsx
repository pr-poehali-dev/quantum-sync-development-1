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
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: "#0a1626" }}
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
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1626]/80 via-[#0a1626]/70 to-[#050b14]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,22,38,0)_0%,rgba(5,11,20,0.85)_100%)]" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-0 top-1/4 h-1/2 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 24px 2px rgba(34, 211, 238, 0.6)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute left-0 top-0 h-full w-40"
          style={{
            background:
              "linear-gradient(to right, rgba(34, 211, 238, 0.18), transparent)",
          }}
        />

        <motion.div
          className="absolute right-0 top-1/4 h-1/2 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #fb923c, transparent)",
            boxShadow: "0 0 24px 2px rgba(251, 146, 60, 0.6)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-40"
          style={{
            background:
              "linear-gradient(to left, rgba(251, 146, 60, 0.18), transparent)",
          }}
        />

        <motion.div
          className="absolute left-1/4 top-0 h-px w-1/4"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(34, 211, 238, 0.7), transparent)",
            boxShadow: "0 0 16px 1px rgba(34, 211, 238, 0.4)",
          }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-0 h-px w-1/4"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(251, 146, 60, 0.7), transparent)",
            boxShadow: "0 0 16px 1px rgba(251, 146, 60, 0.4)",
          }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
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
            className="uppercase tracking-[0.3em] text-xs sm:text-sm text-cyan-300 mb-6"
          >
            Энидата Рус
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95] text-white"
          >
            Холодный<br />расчёт
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-cyan-300 mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl max-w-xl text-neutral-200 mb-10 leading-relaxed"
          >
            Разработка и производство адиабатических вентиляционных машин для Центров Обработки Данных. Монтаж, пусконаладка, сервисное и техническое обслуживание систем вентиляции и кондиционирования.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-cyan-300 text-neutral-900 px-8 py-4 uppercase tracking-wide text-sm hover:bg-white transition-all duration-300 cursor-pointer font-semibold">
              Получить консультацию
            </button>
            <button className="border border-white/60 text-white px-8 py-4 uppercase tracking-wide text-sm hover:bg-white hover:text-neutral-900 transition-all duration-300 cursor-pointer">
              Наши решения
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}