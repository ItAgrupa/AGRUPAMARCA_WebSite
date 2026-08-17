import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agrupamarca.com"),
  title: "Sara Mouhsine Carvajal | CEO Leadership Profile",
  description: "Professional profile for Sara Mouhsine Carvajal, a pioneering woman leader in Souss-Massa agriculture with more than 20 years of leadership.",
  openGraph: { title: "Sara Mouhsine Carvajal | CEO Leadership Profile", description: "Professional leadership profile for Sara Mouhsine Carvajal, connected to Agrupa Marca and MAGOPCO.", type: "profile", locale: "en_US" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${instrument.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
