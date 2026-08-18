import type { Metadata } from "next";
import { AgrupaMarcaWebsite } from "@/components/AgrupaMarcaWebsite";

export const metadata: Metadata = {
  title: "Agrupa Marca | Moroccan Fresh Produce & Export",
  description: "Agrupa Marca is a Moroccan fresh produce company rooted in Souss-Massa, focused on vegetables, packing, quality and export preparation.",
};

export default function AgrupaMarcaPage() {
  return <AgrupaMarcaWebsite />;
}
