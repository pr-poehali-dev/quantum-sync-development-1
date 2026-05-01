import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/7df94ee8-eda6-4edc-9b1a-f02e8f213fa3.jpg"
          alt="Центр обработки данных"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
          ХОЛОДНЫЙ<br />РАСЧЁТ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Разработка и производство адиабатических вентиляционных машин для Центров Обработки Данных. Монтаж, пусконаладка и сервисное обслуживание систем вентиляции и кондиционирования.
        </p>
        <button className="border border-white text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Получить консультацию
        </button>
      </div>
    </div>
  );
}