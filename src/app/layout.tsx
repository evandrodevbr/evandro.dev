import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Evandro Fonseca Junior | Full-Stack Developer & Cloud Computing Specialist",
  description: "Innovative Full-Stack Developer with expertise in React, Node.js, cloud computing, and AI. Specializing in renewable energy solutions, IoT, and custom web applications. Based in Garuva, SC.",
  keywords: "Full-Stack Developer, Cloud Computing, AI, Renewable Energy, IoT, React, Node.js, API Development, Web Development, Mobile Development",
  authors: [{ name: "Evandro Fonseca Junior" }],
  openGraph: {
    title: "Evandro Fonseca Junior | Full-Stack Developer & Cloud Specialist",
    description: "Innovative Full-Stack Developer specializing in renewable energy tech, IoT, and custom web solutions. Expertise in React, Node.js, cloud computing, and AI.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.evandro.dev.br", // Substitua pelo seu domínio real
    images: [
      {
        url: "/evandrodevlogo.png",
        width: 1200,
        height: 630,
        alt: "Evandro Fonseca Junior - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evandro Fonseca Junior | Full-Stack & Cloud Developer",
    description: "Innovative tech solutions in renewable energy, IoT, and web development. Expertise in React, Node.js, cloud computing, and AI.",
    images: ["/evandrodevlogo.png"],
  },
  icons: {
    icon: '/evandrodevlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-black text-gray-300`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}