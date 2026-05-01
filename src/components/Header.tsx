interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm tracking-wide">
          Услуги
        </a>
        <img
          src="https://cdn.poehali.dev/files/47357781-a429-4fe6-ae1b-e0c492a44649.png"
          alt="Anydata Rus"
          className="h-28 w-auto mix-blend-screen"
        />
        <a href="#contact" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm tracking-wide">
          Контакты
        </a>
      </div>
    </header>
  );
}