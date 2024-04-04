import Link from "next/link";
import "./styles/header.scss";

export function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link href="/">Inicio</Link>
          </li>
          {/* <li className="navigation-item">
            <Link href="/sobre">Sobre</Link>
          </li> */}
          <p className="header-titulo">evandro.dev.br</p>
          <li className="navigation-item">
            <Link href="#contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
