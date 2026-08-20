import type { Metadata } from "next";
import { MagopcoWebsite } from "@/components/MagopcoWebsite";

export const metadata: Metadata = {
  title: "MAGOPCO | Moroccan Berry Platform in Souss-Massa",
  description: "MAGOPCO is a Moroccan–Chilean berry platform in Chtouka, connecting careful handling, modern packing and international market relationships.",
  openGraph: {
    title: "MAGOPCO | Moroccan Berry Platform",
    description: "Berry expertise rooted in Chtouka, Souss-Massa.",
    type: "website",
    locale: "en_US",
  },
};

export default function MagopcoPage() {
  return <MagopcoWebsite />;
}
