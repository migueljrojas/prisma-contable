import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import data from "../data/data.json";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  fontWeight: [300, 500, 600, 700],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  fontWeight: [300, 500, 600, 700],
});

export const metadata = {
  title: "Prisma Contable | Soluciones contables y financieras",
  description: "Transformamos tus finanzas, iluminamos tu contabilidad. En Prisma, ofrecemos soluciones contables personalizadas. Confianza, precisión y experiencia en cada número.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <Navbar contact={data.contact} />
        {children}
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Prisma Contable. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
