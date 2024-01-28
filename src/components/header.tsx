import Link from "next/link";
// import "./styles/header.css";

export function Header() {
  return (
    <header className="w-full py-4 bg-black">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <h2 className="text-white text-4xl w-6 hover:text-blue-500 transition-colors duration-500 ease-in-out font-bold">
          <Link href="/">evandro.dev.br</Link>
        </h2>
        <ul className="flex items-center gap-3 m-2 text-2xl text-white">
          <li className="p-4 rounded-2xl hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
            <Link href="/">Inicio</Link>
          </li>
          <li className="p-4 rounded-2xl hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="p-4 rounded-2xl hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
