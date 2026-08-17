import { media } from "./media";

export const expertiseItems = [
  {
    title: "Fresh produce",
    text: "Moroccan vegetables prepared with care for demanding supply chains.",
    href: "/agrupa-marca/products",
    image: media.pepper,
  },
  {
    title: "Berries",
    text: "Berry production and packing connected to international agricultural partnership.",
    href: "/magopco/berries",
    image: media.blueberries,
  },
  {
    title: "Packing",
    text: "Packhouse discipline that supports quality, consistency and export preparation.",
    href: "/quality",
    image: media.hero,
  },
  {
    title: "Quality & traceability",
    text: "Processes focused on food safety, control and transparent product handling.",
    href: "/quality",
    image: media.agrupa,
  },
] as const;

export const draftStoryTopics = [
  "MAGOPCO development",
  "Agrupa Marca field and packing activity",
  "Responsible growth initiatives",
] as const;
