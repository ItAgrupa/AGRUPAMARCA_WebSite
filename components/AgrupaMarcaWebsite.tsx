"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { agrupaMarca } from "@/data/agrupaMarca";

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "AR", label: "العربية" },
];

const navTargets = ["company", "products", "quality", "responsibility", "contact"];

const certificationImages = [
  "/images/agrupa-marca/certifications/globalgap.png",
  "/images/agrupa-marca/certifications/iso-9001-2008.jpg",
  "/images/agrupa-marca/certifications/brcgs-food-safety.webp",
];

const localizedCopy = {
  EN: {
    nav: ["Company", "Products", "Quality", "Responsibility", "Contact"],
    selected: "Selected",
    selectLanguage: "Select language",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
    hero: {
      eyebrow: "Agrupa Marca · Souss-Massa, Morocco",
      start: "Moroccan",
      green: "fresh produce",
      from: "From",
      place: "Souss-Massa",
      to: "to the",
      world: "world",
      text: "Agrupa Marca connects field production, packing discipline, quality standards and export preparation from one of Morocco's most important agricultural regions.",
      primary: "Explore products",
      secondary: "Quality approach",
    },
    intro: ["Who we are", "A produce company built around discipline, freshness and trust.", "Rooted in Souss-Massa, Agrupa Marca works across Moroccan fresh produce with a practical focus on packing, quality and long-term market relationships."],
    companyProcess: {
      kicker: "Our process",
      title: "From our fields",
      highlight: "to global markets.",
      text: "Rooted in Souss-Massa, Agrupa Marca works across Moroccan fresh produce with a practical focus on packing, quality and long-term market relationships.",
      steps: [
        ["Planting", "Carefully selected seeds and seedlings"],
        ["Cultivation", "Precision farming and regular monitoring"],
        ["Harvest", "Picked at optimal ripeness"],
        ["Sorting & packing", "Carefully sorted and packed with care"],
        ["Quality control", "Rigorous checks for premium quality"],
        ["Export", "Prepared for international markets"],
      ],
    },
    stats: [
      ["Fresh produce", "Vegetables grown and prepared for demanding supply chains."],
      ["Packing know-how", "Operational care from reception to preparation and dispatch."],
      ["Export focus", "A company culture shaped around quality, consistency and trust."],
    ],
    products: ["Pippara pepper", "Flat beans", "Padron pepper", "Cucumber", "Bobby beans"],
    productsHead: ["Our products", "The finest,", "From specialty peppers to greenhouse vegetables and beans, our harvests are selected for freshness, consistency, and export-ready quality."],
    productsHighlight: "naturally.",
    productCategory: "Fresh produce",
    quality: ["Quality and export", "Fully certified products", "With a diverse range of products available to commercialize, the company strives to supply the requirements of our customers by adhering to the strictest specifications of quality, food safety and corporate social responsibility, including:"],
    qualityDetails: "Integrated pest management, Traceability, GlobalGAP certified farms, ISO 9001:2008 for packing house, BRCGS Food Safety Issue 9 (Poivron, Haricot, Piment), for packing house, in the area of Corporate Social Responsibility Member of APEFEL (Association of Moroccan Producers and Exporters of Fruits and Vegetables)",
    commitmentsLabel: "Our commitments",
    qualityItems: ["Integrated pest management", "Traceability", "Corporate social responsibility", "Member of APEFEL — Association of Moroccan Producers and Exporters of Fruits and Vegetables"],
    certificationsLabel: "Quality certifications",
    certificationsTitle: "Standards that support confidence from farm to packing house.",
    certifications: [
      ["GlobalG.A.P.", "Certified farms · Good agricultural practices"],
      ["ISO 9001:2008", "Quality management · Packing house"],
      ["BRCGS Food Safety Issue 9", "Poivron, Haricot and Piment · Packing house"],
    ],
    process: ["How we work", "From field reception to careful preparation.", "Every step protects freshness and creates a reliable product journey: reception, selection, packing, control and preparation for dispatch."],
    processSteps: ["Reception", "Selection", "Packing & control", "Dispatch"],
    responsibility: ["Responsibility", "Growing with people and place in mind.", "Agrupa Marca's identity is connected to the region, its teams and the people behind agricultural production."],
    responsibilityShowcase: {
      title: "A Moroccan grower with",
      highlight: "global standards",
      cards: [
        ["Grow With Us", "For growers and partners, Agrupa Marca offers practical collaboration, dependable planning and long-term relationships rooted in Souss-Massa."],
        ["Trusted Quality", "Choose Agrupa Marca for rigorous standards, careful packing, traceability and a shared commitment to freshness from field to delivery."],
        ["Global Reach", "For partners and professional buyers, our export network connects Moroccan production with international markets through organized, reliable operations."],
      ],
    },
    contact: ["Contact", "Build a fresh produce partnership with Agrupa Marca.", "For commercial, institutional or partnership conversations, connect with the Agrupa Marca team.", "Return to CEO gateway"],
    footer: ["Moroccan fresh produce prepared for international markets.", "Products", "Quality", "CEO profile", "All rights reserved.", "Privacy policy", "Contact us"],
    contactModal: ["Contact Agrupa Marca", "Address", "Email", "Phone", "Fax", "Close contact information"],
  },
  ES: {
    nav: ["Empresa", "Productos", "Calidad", "Responsabilidad", "Contacto"],
    selected: "Seleccionado",
    selectLanguage: "Seleccionar idioma",
    darkMode: "Activar modo oscuro",
    lightMode: "Activar modo claro",
    hero: {
      eyebrow: "Agrupa Marca · Souss-Massa, Marruecos",
      start: "Productos marroquíes",
      green: "frescos",
      from: "De",
      place: "Souss-Massa",
      to: "al",
      world: "mundo",
      text: "Agrupa Marca une la producción agrícola, el rigor del envasado, los estándares de calidad y la preparación para la exportación desde una de las regiones agrícolas más importantes de Marruecos.",
      primary: "Ver productos",
      secondary: "Nuestro enfoque de calidad",
    },
    intro: ["Quiénes somos", "Una empresa hortofrutícola basada en el rigor, la frescura y la confianza.", "Con raíces en Souss-Massa, Agrupa Marca trabaja con productos frescos marroquíes y se centra en el envasado, la calidad y las relaciones comerciales duraderas."],
    companyProcess: {
      kicker: "Nuestro proceso",
      title: "De nuestros campos",
      highlight: "a los mercados globales.",
      text: "Con raíces en Souss-Massa, Agrupa Marca trabaja con productos frescos marroquíes con un enfoque práctico en el envasado, la calidad y las relaciones comerciales duraderas.",
      steps: [
        ["Plantación", "Semillas y plantas cuidadosamente seleccionadas"],
        ["Cultivo", "Agricultura de precisión y seguimiento regular"],
        ["Cosecha", "Recolectado en su punto óptimo de maduración"],
        ["Selección y envasado", "Selección rigurosa y envasado cuidadoso"],
        ["Control de calidad", "Controles exigentes para una calidad superior"],
        ["Exportación", "Preparado para los mercados internacionales"],
      ],
    },
    stats: [
      ["Productos frescos", "Hortalizas cultivadas y preparadas para cadenas de suministro exigentes."],
      ["Experiencia en envasado", "Cuidado operativo desde la recepción hasta la preparación y la expedición."],
      ["Vocación exportadora", "Una cultura empresarial basada en la calidad, la constancia y la confianza."],
    ],
    products: ["Pimiento Pippara", "Judía plana", "Pimiento de Padrón", "Pepino", "Judía Bobby"],
    productsHead: ["Nuestros productos", "Los mejores,", "Desde pimientos especiales hasta hortalizas de invernadero y judías, nuestras cosechas se seleccionan por su frescura, constancia y calidad para la exportación."],
    productsHighlight: "naturalmente.",
    productCategory: "Producto fresco",
    quality: ["Calidad y exportación", "Productos plenamente certificados", "Con una gama diversa de productos para comercializar, la empresa se esfuerza por responder a las necesidades de sus clientes cumpliendo las especificaciones más estrictas de calidad, seguridad alimentaria y responsabilidad social corporativa, incluyendo:"],
    qualityDetails: "Gestión integrada de plagas, trazabilidad, fincas certificadas GlobalGAP, ISO 9001:2008 para la central de envasado, BRCGS Food Safety Issue 9 (pimiento, judía y chile) para la central de envasado y, en materia de responsabilidad social corporativa, miembro de APEFEL (Asociación Marroquí de Productores y Exportadores de Frutas y Hortalizas).",
    commitmentsLabel: "Nuestros compromisos",
    qualityItems: ["Gestión integrada de plagas", "Trazabilidad", "Responsabilidad social corporativa", "Miembro de APEFEL — Asociación Marroquí de Productores y Exportadores de Frutas y Hortalizas"],
    certificationsLabel: "Certificaciones de calidad",
    certificationsTitle: "Estándares que generan confianza desde la finca hasta la central de envasado.",
    certifications: [
      ["GlobalG.A.P.", "Fincas certificadas · Buenas prácticas agrícolas"],
      ["ISO 9001:2008", "Gestión de calidad · Central de envasado"],
      ["BRCGS Food Safety Issue 9", "Pimiento, judía y chile · Central de envasado"],
    ],
    process: ["Cómo trabajamos", "De la recepción en campo a una preparación cuidadosa.", "Cada etapa protege la frescura: recepción, selección, envasado, control y preparación para la expedición."],
    processSteps: ["Recepción", "Selección", "Envasado y control", "Expedición"],
    responsibility: ["Responsabilidad", "Crecer pensando en las personas y el territorio.", "La identidad de Agrupa Marca está unida a la región, a sus equipos y a las personas que hacen posible la producción agrícola."],
    responsibilityShowcase: {
      title: "Un productor marroquí con",
      highlight: "estándares globales",
      cards: [
        ["Crezca con nosotros", "Para productores y socios, Agrupa Marca ofrece colaboración práctica, planificación fiable y relaciones duraderas con raíces en Souss-Massa."],
        ["Calidad de confianza", "Elija Agrupa Marca por sus estándares rigurosos, su envasado cuidadoso, la trazabilidad y su compromiso con la frescura del campo a la entrega."],
        ["Alcance global", "Para socios y compradores profesionales, nuestra red de exportación conecta la producción marroquí con los mercados internacionales mediante operaciones organizadas y fiables."],
      ],
    },
    contact: ["Contacto", "Construya una colaboración hortofrutícola con Agrupa Marca.", "Para conversaciones comerciales, institucionales o de colaboración, contacte con el equipo de Agrupa Marca.", "Volver al espacio de la CEO"],
    footer: ["Productos frescos marroquíes preparados para los mercados internacionales.", "Productos", "Calidad", "Perfil de la CEO", "Todos los derechos reservados.", "Política de privacidad", "Contáctenos"],
    contactModal: ["Contactar con Agrupa Marca", "Dirección", "Email", "Teléfono", "Fax", "Cerrar información de contacto"],
  },
  AR: {
    nav: ["الشركة", "المنتجات", "الجودة", "المسؤولية", "اتصل بنا"],
    selected: "محدد",
    selectLanguage: "اختر اللغة",
    darkMode: "تفعيل الوضع الداكن",
    lightMode: "تفعيل الوضع الفاتح",
    hero: {
      eyebrow: "أغروبا ماركا · سوس ماسة، المغرب",
      start: "منتجات مغربية",
      green: "طازجة",
      from: "من",
      place: "سوس ماسة",
      to: "إلى",
      world: "العالم",
      text: "تربط أغروبا ماركا بين الإنتاج في الحقول ودقة التعبئة ومعايير الجودة والاستعداد للتصدير من إحدى أهم المناطق الفلاحية في المغرب.",
      primary: "اكتشف المنتجات",
      secondary: "منهجنا في الجودة",
    },
    intro: ["من نحن", "شركة للمنتجات الفلاحية تقوم على الانضباط والنضارة والثقة.", "تنطلق أغروبا ماركا من سوس ماسة وتعمل في مجال المنتجات المغربية الطازجة مع التركيز على التعبئة والجودة والعلاقات التجارية المستدامة."],
    companyProcess: {
      kicker: "مسار عملنا",
      title: "من حقولنا",
      highlight: "إلى الأسواق العالمية.",
      text: "تنطلق أغروبا ماركا من سوس ماسة وتعمل في مجال المنتجات المغربية الطازجة مع تركيز عملي على التعبئة والجودة والعلاقات التجارية طويلة الأمد.",
      steps: [
        ["الغرس", "بذور وشتلات مختارة بعناية"],
        ["الزراعة", "زراعة دقيقة ومراقبة منتظمة"],
        ["الحصاد", "قطف المنتجات عند النضج الأمثل"],
        ["الفرز والتعبئة", "فرز دقيق وتعبئة بعناية"],
        ["مراقبة الجودة", "فحوصات صارمة لضمان جودة عالية"],
        ["التصدير", "تجهيز للأسواق الدولية"],
      ],
    },
    stats: [
      ["منتجات طازجة", "خضروات مزروعة ومجهزة لسلاسل توريد ذات متطلبات عالية."],
      ["خبرة في التعبئة", "عناية تشغيلية من الاستلام إلى التجهيز والإرسال."],
      ["تركيز على التصدير", "ثقافة مؤسسية مبنية على الجودة والاستمرارية والثقة."],
    ],
    products: ["فلفل بيبارا", "الفاصوليا المسطحة", "فلفل بادرون", "الخيار", "فاصوليا بوبي"],
    productsHead: ["منتجاتنا", "الأجود،", "من أصناف الفلفل المميزة إلى خضروات البيوت الزراعية والفاصوليا، ننتقي محاصيلنا وفق معايير النضارة والاستمرارية والجودة الجاهزة للتصدير."],
    productsHighlight: "بطبيعته.",
    productCategory: "منتجات طازجة",
    quality: ["الجودة والتصدير", "منتجات معتمدة بالكامل", "بفضل مجموعة متنوعة من المنتجات المتاحة للتسويق، تسعى الشركة إلى تلبية متطلبات عملائها من خلال الالتزام بأشد مواصفات الجودة والسلامة الغذائية والمسؤولية الاجتماعية للمؤسسات، بما في ذلك:"],
    qualityDetails: "المكافحة المتكاملة للآفات، والتتبع، ومزارع معتمدة من GlobalGAP، وشهادة ISO 9001:2008 لمحطة التعبئة، وشهادة BRCGS Food Safety Issue 9 للفلفل والفاصوليا والفلفل الحار بمحطة التعبئة، وفي مجال المسؤولية الاجتماعية للمؤسسات، العضوية في APEFEL (الجمعية المغربية لمنتجي ومصدري الفواكه والخضروات).",
    commitmentsLabel: "التزاماتنا",
    qualityItems: ["المكافحة المتكاملة للآفات", "التتبع", "المسؤولية الاجتماعية للمؤسسات", "عضو في APEFEL — الجمعية المغربية لمنتجي ومصدري الفواكه والخضروات"],
    certificationsLabel: "شهادات الجودة",
    certificationsTitle: "معايير تعزز الثقة من المزرعة إلى محطة التعبئة.",
    certifications: [
      ["GlobalG.A.P.", "مزارع معتمدة · ممارسات فلاحية جيدة"],
      ["ISO 9001:2008", "إدارة الجودة · محطة التعبئة"],
      ["BRCGS Food Safety Issue 9", "الفلفل والفاصوليا والفلفل الحار · محطة التعبئة"],
    ],
    process: ["طريقة عملنا", "من الاستلام في الحقول إلى التجهيز بعناية.", "تحمي كل مرحلة نضارة المنتج: الاستلام والانتقاء والتعبئة والمراقبة والاستعداد للإرسال."],
    processSteps: ["الاستلام", "الانتقاء", "التعبئة والمراقبة", "الإرسال"],
    responsibility: ["المسؤولية", "ننمو مع الاهتمام بالإنسان والمجال.", "ترتبط هوية أغروبا ماركا بالمنطقة وفرق العمل والأشخاص الذين يقفون وراء الإنتاج الفلاحي."],
    responsibilityShowcase: {
      title: "منتج مغربي وفق",
      highlight: "معايير عالمية",
      cards: [
        ["انمُ معنا", "تقدم أغروبا ماركا للمنتجين والشركاء تعاونا عمليا وتخطيطا موثوقا وعلاقات طويلة الأمد راسخة في سوس ماسة."],
        ["جودة موثوقة", "اختر أغروبا ماركا بفضل المعايير الصارمة والتعبئة الدقيقة وإمكانية التتبع والالتزام المشترك بالنضارة من الحقل إلى التسليم."],
        ["انتشار عالمي", "تربط شبكة التصدير الخاصة بنا الإنتاج المغربي بالأسواق الدولية من خلال عمليات منظمة وموثوقة تخدم الشركاء والمشترين المهنيين."],
      ],
    },
    contact: ["اتصل بنا", "ابنِ شراكة في المنتجات الطازجة مع أغروبا ماركا.", "للتواصل التجاري أو المؤسساتي أو من أجل الشراكة، تواصل مع فريق أغروبا ماركا.", "العودة إلى بوابة المديرة التنفيذية"],
    footer: ["منتجات مغربية طازجة مجهزة للأسواق الدولية.", "المنتجات", "الجودة", "ملف المديرة التنفيذية", "جميع الحقوق محفوظة.", "سياسة الخصوصية", "اتصل بنا"],
    contactModal: ["اتصل بأغروبا ماركا", "العنوان", "البريد الإلكتروني", "الهاتف", "الفاكس", "إغلاق معلومات الاتصال"],
  },
} as const;

function LanguageFlag({ code }: { code: string }) {
  if (code === "ES") return <svg className="language-flag" aria-hidden="true" viewBox="0 0 24 16"><path fill="#AA151B" d="M0 0h24v16H0z"/><path fill="#F1BF00" d="M0 4h24v8H0z"/></svg>;
  if (code === "AR") return <svg className="language-flag" aria-hidden="true" viewBox="0 0 24 16"><path fill="#C1272D" d="M0 0h24v16H0z"/><path d="m12 4 1 3.1h3.2l-2.6 1.8 1 3.1-2.6-1.9L9.4 12l1-3.1-2.6-1.8H11Z" fill="none" stroke="#006233" strokeWidth=".7"/></svg>;
  return <svg className="language-flag" aria-hidden="true" viewBox="0 0 24 16"><path fill="#fff" d="M0 0h24v16H0z"/><path stroke="#B22234" strokeWidth="1.2" d="M0 .6h24M0 3h24M0 5.4h24M0 7.8h24M0 10.2h24M0 12.6h24M0 15h24"/><path fill="#3C3B6E" d="M0 0h10.5v8.4H0z"/></svg>;
}

function ProcessIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M12 20v-8"/><path d="M12 14c-4 0-6-2.2-6-6 4 0 6 2.2 6 6Z"/><path d="M12 11c0-4 2.2-6 6-6 0 4-2.2 6-6 6Z"/></>,
    <><path d="M5 17h10V9H8l-1-3H4v8"/><path d="M15 12h3l2 3v2h-2"/><circle cx="7" cy="18" r="2"/><circle cx="16" cy="18" r="2"/><path d="M10 9V6h4v3"/></>,
    <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    <><path d="m4 8 8-5 8 5-8 5-8-5Z"/><path d="M4 8v8l8 5 8-5V8M12 13v8"/><path d="m16 11 4 2.5"/></>,
    <><rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5V3h6v2M9 13l2 2 4-4"/></>,
    <><path d="m3 16 7-2 4-8c.6-1.3 2.2-2 3.5-1.4 1.3.6 1.8 2.1 1.1 3.3L15 14l5 2-1 2-6-1-4 3-2-1 2-3-6 2Z"/></>,
  ];

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[index]}</svg>;
}

export function AgrupaMarcaWebsite() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("company");
  const [contactOpen, setContactOpen] = useState(false);
  const copy = localizedCopy[language.code as keyof typeof localizedCopy];
  const isArabic = language.code === "AR";

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang")?.toUpperCase();
    const stored = window.localStorage.getItem("agrupa-language")?.toUpperCase();
    const selected = languages.find((item) => item.code === requested) ?? languages.find((item) => item.code === stored);
    if (selected) {
      setLanguage(selected);
      window.localStorage.setItem("agrupa-language", selected.code.toLowerCase());
    }
  }, []);

  const changeLanguage = (item: (typeof languages)[number]) => {
    setLanguage(item);
    setLanguageOpen(false);
    const locale = item.code.toLowerCase();
    window.localStorage.setItem("agrupa-language", locale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  useEffect(() => {
    const sections = navTargets
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!contactOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [contactOpen]);

  return (
    <main className={`agrupa-site ${darkMode ? "is-dark" : ""}`} lang={language.code.toLowerCase()} dir={isArabic ? "rtl" : "ltr"}>
      <header className="agrupa-header">
        <Link href="/" className="agrupa-logo" aria-label="Back to Sara Mouhsine Carvajal gateway">
          <Image className="agrupa-mark" src="/images/agrupa-marca/inside-logo.png" alt="" width={38} height={38} priority />
          <span><strong>Agrupa</strong> Marca</span>
        </Link>
        <nav aria-label="Agrupa Marca navigation">
          {copy.nav.map((item, index) => {
            const target = navTargets[index];
            return <a className={activeSection === target ? "is-active" : ""} href={`#${target}`} aria-current={activeSection === target ? "location" : undefined} onClick={() => setActiveSection(target)} key={target}>{item}</a>;
          })}
        </nav>
        <div className="agrupa-controls">
          <div className={`language-menu ${languageOpen ? "is-open" : ""}`}>
            <button type="button" onClick={() => setLanguageOpen((value) => !value)} aria-expanded={languageOpen} aria-label={copy.selectLanguage}>
              <LanguageFlag code={language.code} />
              <span>{language.code}</span>
            </button>
            <div>
              {languages.map((item) => (
                <button type="button" key={item.code} onClick={() => changeLanguage(item)} aria-current={language.code === item.code ? "true" : undefined}>
                  <LanguageFlag code={item.code} />
                  {item.label}
                  {language.code === item.code ? (
                    <strong className="language-selected-mark" title={copy.selected} aria-hidden="true">
                      <svg viewBox="0 0 20 20"><path d="m4.5 10.2 3.3 3.3 7.7-7.7" /></svg>
                    </strong>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode((value) => !value)} aria-pressed={darkMode} aria-label={darkMode ? copy.lightMode : copy.darkMode}>
            {darkMode ? (
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42"/><circle cx="12" cy="12" r="4"/></svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"/></svg>
            )}
          </button>
        </div>
      </header>

      <section className="agrupa-hero">
        <div className="agrupa-hero-media">
          <Image src="/images/agrupa-marca/agrupa-marca-hero-v2.png" alt="Agricultural fields, greenhouses and a packing facility in Morocco" fill priority sizes="100vw" />
        </div>
        <div className="agrupa-hero-content">
          <p>{copy.hero.eyebrow}</p>
          <h1>
            {copy.hero.start} <span>{copy.hero.green}</span><br />
            {copy.hero.from} <span className="red">{copy.hero.place}</span> {copy.hero.to} <span>{copy.hero.world}</span>
          </h1>
          <span>{copy.hero.text}</span>
          <div className="agrupa-hero-actions">
            <a href="#products"><span className="hero-action-label">{copy.hero.primary}</span><span className="hero-action-icon" aria-hidden="true">&#8599;</span></a>
            <a href="#quality"><span className="hero-action-label">{copy.hero.secondary}</span><span className="hero-action-icon" aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
        <a className="agrupa-scroll-cue" href="#company" aria-label="Scroll to discover Agrupa Marca">
          <span />
          <span />
          <span />
        </a>
      </section>

      <section className="agrupa-company-process" id="company">
        <div className="agrupa-shell company-process-content">
          <p className="company-process-kicker">{copy.companyProcess.kicker}</p>
          <h2>{copy.companyProcess.title} <span>{copy.companyProcess.highlight}</span></h2>
          <p className="company-process-summary">{copy.companyProcess.text}</p>
          <div className="company-process-steps">
            {copy.companyProcess.steps.map(([title, text], index) => (
              <article key={title}>
                <div className="company-process-icon"><ProcessIcon index={index} /></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agrupa-products" id="products">
        <div className="agrupa-shell">
          <div className="agrupa-section-head">
            <p className="agrupa-kicker">{copy.productsHead[0]}</p>
            <h2>{copy.productsHead[1]} <span>{copy.productsHighlight}</span></h2>
            <p>{copy.productsHead[2]}</p>
          </div>
          <div className="product-grid">
            {agrupaMarca.products.map((product, index) => (
              <article className={`product-card product-card-${index + 1}`} tabIndex={0} key={product.name}>
                <Image src={product.image} alt={`Agrupa Marca ${copy.products[index]}`} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 52vw" : "(max-width: 620px) 100vw, 25vw"} />
                <div className="product-card-copy">
                  <span>{copy.productCategory}</span>
                  <h3>{copy.products[index]}</h3>
                </div>
                <span className="product-card-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agrupa-quality" id="quality">
        <div className="agrupa-shell quality-simple">
          <h2>{copy.quality[1]}</h2>
          <div className="quality-statement">
            <p>{copy.quality[2]}</p>
            <p>{copy.qualityDetails}</p>
          </div>
          <div className="certification-strip" aria-label={copy.certificationsLabel}>
            {copy.certifications.map(([name], index) => (
              <figure tabIndex={0} title={name} key={name}>
                <div>
                  <Image src={certificationImages[index]} alt={`${name} certification`} fill sizes="(max-width: 700px) 40vw, 180px" />
                </div>
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="agrupa-process">
        <div className="agrupa-shell process-showcase">
          <div className="process-photo">
            <Image src="/images/agrupa-marca/packing-line-workers-01.jpg" alt="Agrupa Marca team preparing fresh produce on a packing line" fill sizes="(max-width: 900px) 100vw, 64vw" />
            <span className="process-photo-label">Agrupa Marca · Souss-Massa</span>
          </div>
          <div className="process-panel">
            <p className="agrupa-kicker">{copy.process[0]}</p>
            <h2>{copy.process[1]}</h2>
            <p>{copy.process[2]}</p>
            <ol>
              {copy.processSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="agrupa-responsibility-showcase" id="responsibility">
        <div className="agrupa-shell">
          <header className="responsibility-showcase-head">
            <h2>{copy.responsibilityShowcase.title} <span>{copy.responsibilityShowcase.highlight}</span></h2>
          </header>
          <div className="responsibility-showcase-grid">
            {copy.responsibilityShowcase.cards.map(([title, text], index) => {
              const images = [
                "/images/agrupa-marca/showcase/why-grow-with-us-agrupa-marca.png",
                "/images/agrupa-marca/showcase/why-trusted-quality-agrupa-marca.png",
                "/images/agrupa-marca/showcase/why-global-reach-agrupa-marca.png",
              ];
              return (
                <article key={title}>
                  <div className={`responsibility-card-image responsibility-card-image-${index + 1}`}>
                    <Image src={images[index]} alt={title} fill sizes="(max-width: 760px) 100vw, 390px" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="agrupa-footer" id="contact">
        <div className="agrupa-shell footer-content">
          <Link href="#company" className="footer-brand">Agrupa Marca</Link>
          <p className="footer-tagline">{copy.footer[0]}</p>

          <div className="footer-actions" aria-label="Agrupa Marca contact channels">
            <a className="footer-contact-action" href="https://www.linkedin.com/company/agrupa-marca" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="Open Agrupa Marca on LinkedIn">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 9v10M6 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 9v10"/></svg>
            </a>
            <button className="footer-contact-action" type="button" onClick={() => setContactOpen(true)} title="Email" aria-label="Show Agrupa Marca email and contact information">
              <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
            </button>
            <button className="footer-contact-action" type="button" onClick={() => setContactOpen(true)} title="Phone" aria-label="Show Agrupa Marca phone and contact information">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 4h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C9.7 20.5 3.5 14.3 3 6c0-1 1-2 2-2Z"/></svg>
            </button>
            <a className="footer-contact-action" href="https://wa.me/212669145457" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="Contact Agrupa Marca on WhatsApp">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.5 2.7 2.3 4.5 5 5"/></svg>
            </a>
            <i aria-hidden="true" />
            <button className="footer-theme-toggle" type="button" onClick={() => setDarkMode((value) => !value)} aria-pressed={darkMode} aria-label={darkMode ? copy.lightMode : copy.darkMode}>
              {darkMode ? (
                <svg viewBox="0 0 24 24"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42"/><circle cx="12" cy="12" r="4"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"/></svg>
              )}
            </button>
          </div>

          <Link className="footer-contact-link" href={language.code === "EN" ? "/agrupa-marca/contact/" : `/agrupa-marca/contact/${language.code.toLowerCase()}/`}>
            {copy.footer[6]} <span aria-hidden="true">&#8599;</span>
          </Link>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#products">{copy.footer[1]}</a>
            <a href="#quality">{copy.footer[2]}</a>
            <Link href="/">{copy.footer[3]}</Link>
            <Link href={language.code === "EN" ? "/agrupa-marca/privacy-policy/" : `/agrupa-marca/privacy-policy/${language.code.toLowerCase()}/`}>{copy.footer[5]}</Link>
          </nav>

          <div className="footer-wordmark" aria-hidden="true">AGRUPA MARCA</div>
          <p className="footer-copyright">©2026 Agrupa Marca. {copy.footer[4]}</p>
        </div>
      </footer>

      {contactOpen ? (
        <div className="contact-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button className="contact-modal-close" type="button" onClick={() => setContactOpen(false)} aria-label={copy.contactModal[5]} autoFocus>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
            </button>
            <p className="agrupa-kicker">Agrupa Marca</p>
            <h2 id="contact-modal-title">{copy.contactModal[0]}</h2>
            <div className="contact-modal-grid">
              <article className="contact-address">
                <span>{copy.contactModal[1]}</span>
                <address>Bd Abdelkrim, El Khattabi,<br />Cite Des Chalets,<br />Biougra 80200,<br />Agadir, Maroc</address>
              </article>
              <article>
                <span>{copy.contactModal[2]}</span>
                <a href="mailto:info@agrupamarca.com">info@agrupamarca.com</a>
              </article>
              <article>
                <span>{copy.contactModal[3]}</span>
                <a href="tel:+212528818244">+212 528 818244</a>
              </article>
              <article>
                <span>{copy.contactModal[4]}</span>
                <a href="tel:+212528819334">+212 528819334</a>
              </article>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
