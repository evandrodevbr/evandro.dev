import Link from "next/link";
// import "./styles/header.css";

export function Header() {
  return (
    <header className="w-full py-4">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl w-6">
          <Link href="/">Evandro.dev.br</Link>
        </h2>
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
