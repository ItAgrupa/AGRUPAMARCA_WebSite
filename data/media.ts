export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
  location: string;
  date: string;
  category: "leadership" | "packing" | "produce" | "berries" | "community" | "quality";
  relatedCompany: "Agrupa Marca" | "MAGOPCO" | "Group";
  source: string;
  permissionStatus: "company-owned" | "permission-required" | "verify";
  isTemporary: boolean;
};

export const media = {
  hero: {
    src: "/images/agrupa-marca-packing-team.webp",
    alt: "Agrupa Marca packing operations in Souss-Massa, Morocco",
    caption: "Agrupa Marca packing operations",
    location: "Souss-Massa, Morocco",
    date: "Content date to be confirmed",
    category: "packing", relatedCompany: "Agrupa Marca", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  sara: {
    src: "/images/sara-mouhsine-carvajal.webp",
    alt: "Sara Mouhsine Carvajal, leadership figure connected to Agrupa Marca and MAGOPCO",
    caption: "Sara Mouhsine Carvajal",
    location: "Morocco",
    date: "Content date to be confirmed",
    category: "leadership", relatedCompany: "Group", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  agrupa: {
    src: "/images/agrupa-marca-fresh-produce-packing.webp",
    alt: "Fresh produce on the Agrupa Marca packing line in Morocco",
    caption: "Fresh produce packing",
    location: "Souss-Massa, Morocco",
    date: "Content date to be confirmed",
    category: "packing", relatedCompany: "Agrupa Marca", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  magopco: {
    src: "/images/magopco-berry-packing.webp",
    alt: "MAGOPCO berries prepared for packing in Morocco",
    caption: "MAGOPCO berry packing",
    location: "Souss-Massa, Morocco",
    date: "Content date to be confirmed",
    category: "berries", relatedCompany: "MAGOPCO", source: "MAGOPCO image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  landscape: {
    src: "/images/souss-massa-agriculture.webp",
    alt: "Blueberry production in the Souss-Massa region of Morocco",
    caption: "Berry production in Souss-Massa",
    location: "Souss-Massa, Morocco",
    date: "Content date to be confirmed",
    category: "produce", relatedCompany: "Group", source: "MAGOPCO image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  pepper: {
    src: "/images/agrupa-marca-pepper.jpg",
    alt: "Agrupa Marca fresh peppers prepared as Moroccan produce",
    caption: "Fresh peppers",
    location: "Morocco",
    date: "Content date to be confirmed",
    category: "produce", relatedCompany: "Agrupa Marca", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  cucumber: {
    src: "/images/agrupa-marca-cucumber.jpg",
    alt: "Agrupa Marca cucumbers representing Moroccan fresh produce",
    caption: "Fresh cucumbers",
    location: "Morocco",
    date: "Content date to be confirmed",
    category: "produce", relatedCompany: "Agrupa Marca", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  blueberries: {
    src: "/images/magopco-blueberries.jpg",
    alt: "Blueberries representing MAGOPCO berry activity in Morocco",
    caption: "Blueberries",
    location: "Morocco",
    date: "Content date to be confirmed",
    category: "berries", relatedCompany: "MAGOPCO", source: "MAGOPCO image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
  community: {
    src: "/images/agrupa-marca-social-responsibility.jpg",
    alt: "Agrupa Marca social responsibility activity in Morocco",
    caption: "Social responsibility activity",
    location: "Morocco",
    date: "Content date to be confirmed",
    category: "community", relatedCompany: "Group", source: "Agrupa Marca image archive",
    permissionStatus: "company-owned", isTemporary: false,
  },
} satisfies Record<string, MediaItem>;
