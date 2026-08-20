import type { Metadata } from "next";
import { MagopcoContactPage } from "@/components/MagopcoContactPage";

export const metadata: Metadata = {
  title: "Contact MAGOPCO | Commercial and Partnership Enquiries",
  description: "Contact MAGOPCO for commercial, institutional and partnership conversations connected to its Moroccan berry platform in Chtouka, Souss-Massa.",
  openGraph: {
    title: "Contact MAGOPCO",
    description: "Start a focused conversation with the MAGOPCO team.",
    type: "website",
    locale: "en_US",
  },
};

export default function MagopcoContactRoute() {
  return <MagopcoContactPage />;
}
