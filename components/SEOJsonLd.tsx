export function SEOJsonLd() {
  const graph = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "Organization", "@id": "https://www.agrupamarca.com/#agrupa", name: "Agrupa Marca", description: "Moroccan agricultural company connected to fresh produce, packing and export from the Souss-Massa region.", areaServed: "Souss-Massa, Morocco" },
      { "@type": "Organization", "@id": "https://www.agrupamarca.com/#magopco", name: "MAGOPCO", description: "Moroccan berry production and packing connected to the Agrupa Marca and AgroBerries partnership.", areaServed: "Souss-Massa, Morocco" },
      { "@type": "Person", "@id": "https://www.agrupamarca.com/#sara", name: "Sara Mouhsine Carvajal", description: "CEO and women leadership figure associated with Agrupa Marca and MAGOPCO in Souss-Massa agriculture." },
      { "@type": "WebSite", "@id": "https://www.agrupamarca.com/#website", url: "https://www.agrupamarca.com/", name: "Sara Mouhsine Carvajal" },
      { "@type": "WebPage", "@id": "https://www.agrupamarca.com/#webpage", url: "https://www.agrupamarca.com/", name: "Sara Mouhsine Carvajal | CEO Leadership Profile", isPartOf: { "@id": "https://www.agrupamarca.com/#website" }, about: { "@id": "https://www.agrupamarca.com/#sara" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.agrupamarca.com/" }] },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
