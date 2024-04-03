import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const nunito = Nunito({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dev.Evandro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <main className="">
          <div className="container-pai">
            <Header />
            <div className="conteudo">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
