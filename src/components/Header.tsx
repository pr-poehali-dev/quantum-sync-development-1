interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <a href="#services" className="text-white hover:text-cyan-300 transition-colors duration-300 uppercase text-sm tracking-wide">
          Услуги
        </a>
        <img
          src="https://cdn.poehali.dev/files/29ca2b5c-a09f-4b1e-9d92-1018b158ed15.png"
          alt="Anydata"
          className="h-44 sm:h-52 lg:h-60 w-auto"
        />
        <a href="#contact" className="text-white hover:text-cyan-300 transition-colors duration-300 uppercase text-sm tracking-wide">
          Контакты
        </a>
      </div>
    </header>
  );
}