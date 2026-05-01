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
          src="https://cdn.poehali.dev/files/38ab23f8-9a43-44df-aca4-62384c6f6550.png"
          alt="Anydata"
          className="h-28 w-auto"
        />
        <a href="#contact" className="text-white hover:text-cyan-300 transition-colors duration-300 uppercase text-sm tracking-wide">
          Контакты
        </a>
      </div>
    </header>
  );
}