import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const VOLUME_PER_SECOND = 14.7;

const useDailyAirCounter = () => {
  const [volume, setVolume] = useState<number>(() => {
    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
    return secondsSinceStart * VOLUME_PER_SECOND;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVolume((prev) => prev + VOLUME_PER_SECOND * 0.2);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return volume;
};

export default function Footer() {
  const dailyAir = useDailyAirCounter();
  const formatted = new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(Math.round(dailyAir));
  const inflowLines = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    offset: (i - 2.5) * 18,
    delay: i * 0.18,
  }));
  const outflowLines = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    offset: (i - 2.5) * 18,
    delay: i * 0.18 + 0.4,
  }));
  const fanBlades = [0, 60, 120, 180, 240, 300];

  return (
    <div
      id="contact"
      className="relative h-[600px] sm:h-[700px] lg:h-[800px] max-h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] sm:h-[calc(100vh+700px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[600px] sm:h-[700px] lg:h-[800px] sticky top-[calc(100vh-600px)] sm:top-[calc(100vh-700px)] lg:top-[calc(100vh-800px)]">
          <div className="relative bg-neutral-900 py-8 sm:py-10 lg:py-12 px-6 sm:px-10 lg:px-16 h-full w-full flex flex-col justify-between overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/8de6b92e-5c29-4193-b27d-03c426e7761d.jpg"
              alt="Центр обработки данных"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="relative w-[420px] h-[220px] sm:w-[560px] sm:h-[280px] lg:w-[680px] lg:h-[340px] flex items-center justify-center">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 flex flex-col justify-center gap-2">
                  {inflowLines.map((line) => (
                    <motion.div
                      key={`in-${line.id}`}
                      className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-orange-400/70 to-orange-300"
                      style={{ marginLeft: `${Math.abs(line.offset)}px` }}
                      animate={{
                        width: ["0%", "100%", "100%"],
                        x: ["-20%", "0%", "30%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  <p className="absolute -top-2 left-2 text-[10px] sm:text-xs uppercase tracking-widest text-orange-300/80">
                    Тёплый воздух
                  </p>
                </div>

                <div className="absolute right-0 top-0 bottom-0 w-1/3 flex flex-col justify-center gap-2 items-end">
                  {outflowLines.map((line) => (
                    <motion.div
                      key={`out-${line.id}`}
                      className="h-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-300/70 to-transparent"
                      style={{ marginRight: `${Math.abs(line.offset)}px` }}
                      animate={{
                        width: ["0%", "100%", "100%"],
                        x: ["-30%", "0%", "20%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  <p className="absolute -top-2 right-2 text-[10px] sm:text-xs uppercase tracking-widest text-cyan-300/80">
                    Охлаждённый воздух
                  </p>
                </div>

                <motion.div
                  className="relative z-10 w-[160px] h-[180px] sm:w-[200px] sm:h-[220px] lg:w-[240px] lg:h-[260px] border border-white/30 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(103,232,249,0)",
                      "0 0 30px rgba(103,232,249,0.35)",
                      "0 0 0 rgba(103,232,249,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400">
                      AnyData · ВМ-110
                    </span>
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-cyan-300"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] uppercase tracking-widest text-neutral-500">
                    <span>+32°C</span>
                    <span className="text-cyan-300">+18°C</span>
                  </div>

                  <motion.div
                    className="relative w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[170px] lg:h-[170px] rounded-full border-2 border-cyan-300/40 bg-gradient-to-br from-cyan-300/10 to-transparent flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                  >
                    {fanBlades.map((angle) => (
                      <div
                        key={angle}
                        className="absolute left-1/2 top-1/2 origin-bottom"
                        style={{
                          transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                          height: "45%",
                        }}
                      >
                        <div className="w-3 sm:w-4 lg:w-5 h-full bg-gradient-to-t from-cyan-300/80 to-cyan-300/10 rounded-full blur-[1px]" />
                      </div>
                    ))}
                    <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]">
                      <div className="absolute inset-1 rounded-full bg-neutral-900" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-sm"
                    animate={{
                      background: [
                        "radial-gradient(circle at center, rgba(103,232,249,0.0) 0%, transparent 60%)",
                        "radial-gradient(circle at center, rgba(103,232,249,0.18) 0%, transparent 60%)",
                        "radial-gradient(circle at center, rgba(103,232,249,0.0) 0%, transparent 60%)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                <div className="absolute left-[33%] top-1/2 -translate-y-1/2 -translate-x-full">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon name="ArrowRight" size={20} className="text-orange-300/80" />
                  </motion.div>
                </div>
                <div className="absolute right-[33%] top-1/2 -translate-y-1/2 translate-x-full">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon name="ArrowRight" size={20} className="text-cyan-300" />
                  </motion.div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 border border-cyan-300/30 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4">
                <div className="relative">
                  <Icon name="Wind" size={20} className="text-cyan-300" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-300/30 blur-md"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400">
                    Обработано воздуха за сегодня
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <motion.span
                      key={Math.floor(dailyAir / 10)}
                      initial={{ opacity: 0.7, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-white tabular-nums tracking-tight"
                    >
                      {formatted}
                    </motion.span>
                    <span className="text-xs sm:text-sm text-cyan-300 uppercase tracking-wider">
                      м³
                    </span>
                  </div>
                </div>
                <motion.div
                  className="ml-auto w-2 h-2 rounded-full bg-cyan-300"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wider">
                  Компания
                </h3>
                <p className="text-white text-sm sm:text-base">
                  ООО «Энидата Рус»
                </p>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Услуги
                </a>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wider">
                  Услуги
                </h3>
                <a
                  href="#production"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Производство
                </a>
                <a
                  href="#installation"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Монтаж и пусконаладка
                </a>
                <a
                  href="#service"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Сервис и ТО
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wider">
                  Контакты
                </h3>
                <a
                  href="mailto:info@any-data.ru"
                  className="text-white hover:text-neutral-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  info@any-data.ru
                </a>
                <a
                  href="https://any-data.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  any-data.ru
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wider">
                  Юридический адрес
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  140081, Московская область,
                  <br />
                  г. Лыткарино, ул. Парковая,
                  <br />
                  строение 4Б, офис 16 (316)
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10">
              <p className="text-neutral-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} ООО «Энидата Рус». Все права защищены.
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm">
                Разработка и производство адиабатических вентмашин для ЦОД
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}