import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

export default function Footer() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.cos((i * Math.PI * 2) / 8) * 80,
    y: Math.sin((i * Math.PI * 2) / 8) * 80,
    delay: i * 0.2,
  }));

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
              <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute inset-0 rounded-full border border-cyan-300/40"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1.6, opacity: [0, 0.6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.3,
                      ease: "easeOut",
                    }}
                  />
                ))}

                <motion.div
                  className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-cyan-500/20 blur-2xl"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {particles.map((p) => (
                  <motion.div
                    key={`p-${p.id}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                      x: [0, p.x, 0],
                      y: [0, p.y, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: p.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <motion.div
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-cyan-300/30 to-cyan-500/10 backdrop-blur-sm border border-cyan-300/40 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon
                      name="Snowflake"
                      size={40}
                      className="text-cyan-300 drop-shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                    />
                  </motion.div>
                </motion.div>
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