export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="relative bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/a07e6936-e218-4a96-97a5-3d32d3ac4253/files/8de6b92e-5c29-4193-b27d-03c426e7761d.jpg"
              alt="Центр обработки данных"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#services"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Услуги
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Услуги</h3>
                <a
                  href="#production"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Производство
                </a>
                <a
                  href="#installation"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Монтаж
                </a>
                <a
                  href="#service"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Сервис
                </a>
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Энидата Рус</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}