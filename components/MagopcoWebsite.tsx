"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./MagopcoWebsite.module.css";

type LanguageCode = "EN" | "ES" | "AR";

const languages: { code: LanguageCode; label: string; flag: string }[] = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "AR", label: "العربية", flag: "🇲🇦" },
];

const navTargets = ["platform", "produce", "process", "facility", "partnership"];

const berryProductImages = [
  {
    src: "/images/magopco/magopco-blueberries.jpg",
    alt: "Blueberry plants and freshly harvested blueberry punnets",
  },
  {
    src: "/images/magopco/magopco-raspberries-real.jfif",
    alt: "Ripe raspberries growing on the plant",
  },
  {
    src: "/images/magopco/magopco-blackberries.jfif",
    alt: "Fresh blackberries shown in close detail",
  },
] as const;

const platformCardImages = [
  {
    src: "/images/magopco/workers-harvest-berries.jpg",
    alt: "Hands carefully harvesting ripe blueberries from the plant",
  },
  {
    src: "/images/magopco/built-for-berries.png",
    alt: "A MAGOPCO team member inspecting crates of blueberries in a controlled facility",
  },
  {
    src: "/images/magopco/connected-expertise.png",
    alt: "MAGOPCO station inauguration plaque representing Moroccan and Chilean collaboration",
  },
] as const;

const heroSlides = [
  {
    src: "/images/magopco/magopco-at-farms.png",
    alt: "MAGOPCO team working among blueberry plants",
  },
  {
    src: "/images/magopco/blueberries-farm-magopco.jpg",
    alt: "Blueberry plants growing inside a protected farm",
  },
  {
    src: "/images/magopco/img-packing-blueberry-station.jpg",
    alt: "Fresh blueberries moving through the packing station",
  },
] as const;

const content = {
  EN: {
    nav: ["Platform", "Produce", "Process", "Facility", "Partnership"],
    selectLanguage: "Select language",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
    hero: {
      eyebrow: "MAGOPCO · CHTOUKA, SOUSS-MASSA",
      line1: "Moroccan berries.",
      line2: "Prepared closer",
      line3: "to the source.",
      text: "A Moroccan–Chilean platform connecting berry production, careful packing and international market relationships from the heart of Souss-Massa.",
      primary: "Discover the platform",
      secondary: "Explore our process",
      signals: ["Rooted in Chtouka", "Specialized berry handling", "International collaboration"],
    },
    platform: {
      eyebrow: "One shared ambition",
      title: "Local proximity. International perspective.",
      text: "MAGOPCO brings complementary agricultural and packing experience together in Chtouka. The platform is designed around short product journeys, attentive handling and professional relationships that support the berry supply chain.",
      cards: [
        ["Closer to harvest", "A strategic location in a major production area supports a more direct journey from field reception to packing."],
        ["Built for berries", "A focused environment where product care, temperature awareness and packing discipline guide each stage."],
        ["Connected expertise", "Moroccan roots and Chilean berry knowledge come together through a long-term operating vision."],
      ],
    },
    produce: {
      eyebrow: "Our berries",
      title: "A berry portfolio, handled with intention.",
      text: "Each berry has its own character, but all delicate fruit asks for calm, precise handling. MAGOPCO puts freshness, consistency and presentation at the center of every product journey.",
      products: [
        ["Blueberries", "Myrtille", "Naturally delicate fruit selected for bloom, firmness and consistent presentation."],
        ["Raspberries", "Framboise", "Soft, expressive berries that require attentive handling from reception onward."],
        ["Blackberries", "Mûre", "Deep-coloured berries with a distinctive character, handled carefully to protect structure and presentation."],
      ],
      notes: ["Freshness first", "Careful selection", "Market-ready presentation"],
      farm: {
        eyebrow: "Cultivation context",
        title: "Close to the crops that shape the platform.",
        text: "Protected growing environments in Souss-Massa connect agricultural know-how with the proximity that careful berry handling requires.",
      },
    },
    process: {
      eyebrow: "From reception to dispatch",
      title: "A shorter journey for a delicate product.",
      text: "Every stage is considered as part of one continuous handling process.",
      steps: [
        ["Reception", "Fruit arrives close to its production area."],
        ["Cooling", "Temperature awareness supports freshness."],
        ["Selection", "Product is assessed with focused attention."],
        ["Packing", "Careful presentation for professional markets."],
        ["Control", "Final checks support consistency."],
        ["Dispatch", "Prepared for the next stage of its journey."],
      ],
    },
    facility: {
      eyebrow: "The platform",
      title: "A focused environment for modern berry handling.",
      text: "MAGOPCO’s Chtouka station brings people, product and process together. Bright, organized working areas support careful handling while keeping the operation close to the farms it serves.",
      points: ["Purpose-led workflow", "Skilled local teams", "Proximity to production"],
    },
    partnership: {
      eyebrow: "Morocco × Chile",
      title: "A partnership designed to travel further.",
      text: "MAGOPCO reflects an international alliance with strong roots in Morocco. The official station inauguration marked a shared commitment to agricultural knowledge, regional value creation and long-term market connections.",
      milestone: "Officially inaugurated in Biougra",
      detail: "A visible milestone for Moroccan–Chilean agricultural cooperation in Souss-Massa.",
    },
    cta: {
      eyebrow: "Build what comes next",
      title: "Let’s start a berry conversation.",
      text: "For commercial, institutional or partnership enquiries, connect with the team behind MAGOPCO.",
      button: "Contact MAGOPCO",
      back: "Return to CEO profile",
    },
    footer: ["Berry expertise rooted in Souss-Massa.", "Platform", "Process", "Agrupa Marca", "CEO profile", "All rights reserved."],
  },
  ES: {
    nav: ["Plataforma", "Producto", "Proceso", "Instalación", "Alianza"],
    selectLanguage: "Seleccionar idioma",
    openMenu: "Abrir navegación",
    closeMenu: "Cerrar navegación",
    darkMode: "Activar modo oscuro",
    lightMode: "Activar modo claro",
    hero: {
      eyebrow: "MAGOPCO · CHTOUKA, SOUSS-MASSA",
      line1: "Berries marroquíes.",
      line2: "Preparados más cerca",
      line3: "de su origen.",
      text: "Una plataforma marroquí–chilena que conecta producción, envasado cuidadoso y relaciones con mercados internacionales desde el corazón de Souss-Massa.",
      primary: "Descubrir la plataforma",
      secondary: "Explorar el proceso",
      signals: ["Con raíces en Chtouka", "Manejo especializado", "Colaboración internacional"],
    },
    platform: {
      eyebrow: "Una ambición compartida",
      title: "Proximidad local. Perspectiva internacional.",
      text: "MAGOPCO reúne experiencias agrícolas y de envasado complementarias en Chtouka. La plataforma se articula en torno a recorridos cortos, un manejo atento y relaciones profesionales que apoyan la cadena de suministro de berries.",
      cards: [
        ["Cerca de la cosecha", "Una ubicación estratégica en una importante zona productora facilita un recorrido más directo del campo al envasado."],
        ["Creado para berries", "Un entorno especializado donde el cuidado, la temperatura y la disciplina de envasado orientan cada etapa."],
        ["Experiencia conectada", "Raíces marroquíes y conocimiento chileno de berries unidos por una visión operativa a largo plazo."],
      ],
    },
    produce: {
      eyebrow: "Nuestros berries",
      title: "Un portfolio de berries tratado con intención.",
      text: "Cada berry tiene su propio carácter, pero toda fruta delicada exige un manejo sereno y preciso. MAGOPCO sitúa la frescura, la constancia y la presentación en el centro de cada recorrido.",
      products: [
        ["Arándanos", "Myrtille", "Fruta naturalmente delicada, seleccionada por su pruina, firmeza y presentación constante."],
        ["Frambuesas", "Framboise", "Berries suaves y expresivos que exigen atención desde el momento de la recepción."],
        ["Moras", "Mûre", "Berries de color intenso y carácter distintivo, tratados con cuidado para proteger su estructura y presentación."],
      ],
      notes: ["Frescura primero", "Selección cuidadosa", "Presentación para el mercado"],
      farm: {
        eyebrow: "Contexto de cultivo",
        title: "Cerca de los cultivos que dan forma a la plataforma.",
        text: "Los entornos de cultivo protegido de Souss-Massa conectan el conocimiento agrícola con la proximidad que exige el manejo cuidadoso de berries.",
      },
    },
    process: {
      eyebrow: "De la recepción a la expedición",
      title: "Un recorrido más corto para un producto delicado.",
      text: "Cada etapa forma parte de un único proceso continuo de manejo.",
      steps: [
        ["Recepción", "La fruta llega cerca de su zona de producción."],
        ["Frío", "El control de temperatura ayuda a preservar la frescura."],
        ["Selección", "El producto se evalúa con atención."],
        ["Envasado", "Presentación cuidada para mercados profesionales."],
        ["Control", "Las verificaciones finales favorecen la constancia."],
        ["Expedición", "Preparado para la siguiente etapa de su recorrido."],
      ],
    },
    facility: {
      eyebrow: "La plataforma",
      title: "Un entorno especializado para el manejo moderno de berries.",
      text: "La estación MAGOPCO de Chtouka reúne personas, producto y proceso. Espacios luminosos y organizados favorecen un manejo cuidadoso cerca de las fincas a las que sirve.",
      points: ["Flujo funcional", "Equipos locales cualificados", "Proximidad a la producción"],
    },
    partnership: {
      eyebrow: "Marruecos × Chile",
      title: "Una alianza concebida para llegar más lejos.",
      text: "MAGOPCO refleja una alianza internacional con raíces sólidas en Marruecos. La inauguración oficial marcó un compromiso compartido con el conocimiento agrícola, el valor regional y las conexiones comerciales duraderas.",
      milestone: "Inaugurada oficialmente en Biougra",
      detail: "Un hito visible para la cooperación agrícola marroquí–chilena en Souss-Massa.",
    },
    cta: {
      eyebrow: "Construir el siguiente paso",
      title: "Hablemos de berries.",
      text: "Para consultas comerciales, institucionales o de colaboración, contacte con el equipo de MAGOPCO.",
      button: "Contactar con MAGOPCO",
      back: "Volver al perfil de la CEO",
    },
    footer: ["Experiencia en berries con raíces en Souss-Massa.", "Plataforma", "Proceso", "Agrupa Marca", "Perfil de la CEO", "Todos los derechos reservados."],
  },
  AR: {
    nav: ["المنصة", "المنتج", "المراحل", "المحطة", "الشراكة"],
    selectLanguage: "اختر اللغة",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    darkMode: "تفعيل الوضع الداكن",
    lightMode: "تفعيل الوضع الفاتح",
    hero: {
      eyebrow: "ماغوبكو · اشتوكة، سوس ماسة",
      line1: "توت مغربي.",
      line2: "يُجهّز بالقرب",
      line3: "من مصدره.",
      text: "منصة مغربية–تشيلية تربط إنتاج التوت بالتعبئة الدقيقة والعلاقات مع الأسواق الدولية من قلب سوس ماسة.",
      primary: "اكتشف المنصة",
      secondary: "تعرّف على المراحل",
      signals: ["جذور في اشتوكة", "عناية متخصصة بالتوت", "تعاون دولي"],
    },
    platform: {
      eyebrow: "طموح مشترك",
      title: "قرب محلي. رؤية دولية.",
      text: "تجمع ماغوبكو في اشتوكة خبرات متكاملة في الزراعة والتعبئة. وقد صُممت المنصة حول مسار قصير للمنتج، وعناية دقيقة، وعلاقات مهنية تدعم سلسلة توريد التوت.",
      cards: [
        ["أقرب إلى الحصاد", "يساعد الموقع الاستراتيجي داخل منطقة إنتاج مهمة على تقصير المسار من الحقل إلى التعبئة."],
        ["مخصصة للتوت", "بيئة مركزة تُوجّه فيها العناية بالمنتج ومراقبة الحرارة ودقة التعبئة كل مرحلة."],
        ["خبرات متصلة", "جذور مغربية وخبرة تشيلية في التوت تجتمعان ضمن رؤية تشغيلية طويلة الأمد."],
      ],
    },
    produce: {
      eyebrow: "منتجات التوت",
      title: "تشكيلة من التوت بعناية مقصودة.",
      text: "لكل نوع من التوت خصائصه، لكن جميع الثمار الحساسة تحتاج إلى تعامل هادئ ودقيق. تضع ماغوبكو النضارة والتجانس وجودة العرض في قلب رحلة كل منتج.",
      products: [
        ["التوت الأزرق", "Myrtille", "ثمار حساسة بطبيعتها تُختار وفقاً لجودة طبقتها الطبيعية وتماسكها وتجانس عرضها."],
        ["توت العليق", "Framboise", "ثمار رقيقة وغنية تتطلب عناية مركزة منذ مرحلة الاستلام."],
        ["التوت الأسود", "Mûre", "ثمار داكنة ذات طابع مميز تُعامل بعناية للحفاظ على بنيتها وجودة عرضها."],
      ],
      notes: ["النضارة أولاً", "اختيار دقيق", "عرض جاهز للأسواق"],
      farm: {
        eyebrow: "بيئة الزراعة",
        title: "قريبون من المحاصيل التي تشكّل المنصة.",
        text: "تربط بيئات الزراعة المحمية في سوس ماسة بين الخبرة الزراعية والقرب الذي تتطلبه العناية الدقيقة بالتوت.",
      },
    },
    process: {
      eyebrow: "من الاستلام إلى الإرسال",
      title: "رحلة أقصر لمنتج حساس.",
      text: "تُدرس كل مرحلة باعتبارها جزءاً من مسار متكامل ومتواصل.",
      steps: [
        ["الاستلام", "تصل الثمار بالقرب من منطقة إنتاجها."],
        ["التبريد", "تدعم مراقبة الحرارة الحفاظ على النضارة."],
        ["الاختيار", "يُفحص المنتج بعناية مركزة."],
        ["التعبئة", "تقديم دقيق للأسواق المهنية."],
        ["المراقبة", "فحوص نهائية تدعم التجانس."],
        ["الإرسال", "استعداد للمرحلة التالية من الرحلة."],
      ],
    },
    facility: {
      eyebrow: "المنصة",
      title: "بيئة متخصصة للعناية الحديثة بالتوت.",
      text: "تجمع محطة ماغوبكو في اشتوكة بين الأشخاص والمنتج والمراحل التشغيلية. وتدعم فضاءات العمل المضيئة والمنظمة عناية دقيقة بالقرب من الضيعات.",
      points: ["مسار عمل وظيفي", "فرق محلية مؤهلة", "قرب من مناطق الإنتاج"],
    },
    partnership: {
      eyebrow: "المغرب × تشيلي",
      title: "شراكة مصممة للوصول أبعد.",
      text: "تعكس ماغوبكو تحالفاً دولياً بجذور قوية في المغرب. وقد جسّد الافتتاح الرسمي التزاماً مشتركاً بالخبرة الزراعية وخلق القيمة بالمنطقة وبناء علاقات طويلة الأمد مع الأسواق.",
      milestone: "افتتاح رسمي في بيوكرى",
      detail: "محطة بارزة للتعاون الزراعي المغربي–التشيلي في سوس ماسة.",
    },
    cta: {
      eyebrow: "لنصنع الخطوة المقبلة",
      title: "لنبدأ حواراً حول التوت.",
      text: "للاستفسارات التجارية أو المؤسساتية أو فرص الشراكة، تواصلوا مع فريق ماغوبكو.",
      button: "تواصل مع ماغوبكو",
      back: "العودة إلى ملف الرئيسة التنفيذية",
    },
    footer: ["خبرة في التوت بجذور في سوس ماسة.", "المنصة", "المراحل", "أغروبا ماركا", "ملف الرئيسة التنفيذية", "جميع الحقوق محفوظة."],
  },
} as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>;
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
  );
}

function BerryMark({ className = "" }: { className?: string }) {
  return <span className={`${styles.berryMark} ${className}`} aria-hidden="true">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</span>;
}

function HeroSeal() {
  return <span className={styles.heroSeal} aria-hidden="true">
    <strong>MAGOPCO</strong>
    <svg viewBox="0 0 150 150">
      <defs><path id="magopco-hero-circle" d="M 75,25 a 50,50 0 1,1 0,100 a 50,50 0 1,1 0,-100" /></defs>
      <text textLength="312" lengthAdjust="spacing"><textPath href="#magopco-hero-circle" startOffset="0%">EXCELLENCE MONDIALE • AGRICULTURE DE PRÉCISION • </textPath></text>
    </svg>
  </span>;
}

export function MagopcoWebsite() {
  const [language, setLanguage] = useState<LanguageCode>("EN");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("platform");
  const [heroSlide, setHeroSlide] = useState(0);
  const copy = content[language];
  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];
  const isArabic = language === "AR";

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("magopco-language") as LanguageCode | null;
    const savedTheme = window.localStorage.getItem("magopco-theme");
    if (savedLanguage && languages.some((item) => item.code === savedLanguage)) setLanguage(savedLanguage);
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = navTargets.map((target) => document.getElementById(target)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -55%", threshold: [0, .15, .35] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const chooseLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setLanguageOpen(false);
    window.localStorage.setItem("magopco-language", code);
  };

  const toggleTheme = () => {
    setDarkMode((value) => {
      window.localStorage.setItem("magopco-theme", value ? "light" : "dark");
      return !value;
    });
  };

  return (
    <main className={`${styles.site} ${darkMode ? styles.dark : ""}`} lang={language.toLowerCase()} dir={isArabic ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="MAGOPCO home">
          <span className={styles.brandMark}><Image src="/images/magopco/magopco-logo.png" alt="" width={2000} height={2000} priority /></span>
          <strong>Magopco</strong>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="MAGOPCO navigation">
          {copy.nav.map((label, index) => <a className={activeSection === navTargets[index] ? styles.active : ""} href={`#${navTargets[index]}`} onClick={() => { setActiveSection(navTargets[index]); setMenuOpen(false); }} key={navTargets[index]}>{label}</a>)}
        </nav>

        <div className={styles.controls}>
          <div className={styles.language}>
            <button type="button" aria-expanded={languageOpen} aria-label={copy.selectLanguage} onClick={() => { setLanguageOpen((value) => !value); setMenuOpen(false); }}>
              <span aria-hidden="true">{currentLanguage.flag}</span><b>{language}</b>
            </button>
            {languageOpen && <div className={styles.languagePanel}>
              {languages.map((item) => <button type="button" onClick={() => chooseLanguage(item.code)} key={item.code}>
                <span aria-hidden="true">{item.flag}</span><span>{item.label}</span>{item.code === language && <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg>}
              </button>)}
            </div>}
          </div>
          <button className={styles.theme} type="button" aria-label={darkMode ? copy.lightMode : copy.darkMode} onClick={toggleTheme}><ThemeIcon dark={darkMode} /></button>
          <button className={styles.menu} type="button" aria-expanded={menuOpen} aria-label={menuOpen ? copy.closeMenu : copy.openMenu} onClick={() => { setMenuOpen((value) => !value); setLanguageOpen(false); }}>
            {menuOpen ? <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></svg> : <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 7h14M5 12h14M5 17h14" /></svg>}
          </button>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroSlides} aria-hidden="true">
          {heroSlides.map((slide, index) => <Image
            className={`${styles.heroImage} ${index === heroSlide ? styles.heroImageActive : ""}`}
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            quality={100}
            priority={index === 0}
            key={slide.src}
          />)}
        </div>
        <div className={styles.heroOverlay} />
        <HeroSeal />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
          <h1>{copy.hero.line1}<br /><span>{copy.hero.line2}</span><br />{copy.hero.line3}</h1>
          <p className={styles.heroText}>{copy.hero.text}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#platform"><span>{copy.hero.primary}</span><i><ArrowIcon /></i></a>
            <a className={styles.secondaryButton} href="#process"><span>{copy.hero.secondary}</span><i><ArrowIcon /></i></a>
          </div>
        </div>
        <div className={styles.heroSignals}>{copy.hero.signals.map((signal, index) => <span key={signal}><b>0{index + 1}</b>{signal}</span>)}</div>
        <div className={styles.heroPagination} aria-label="Hero image gallery">
          {heroSlides.map((slide, index) => <button
            type="button"
            className={index === heroSlide ? styles.heroPaginationActive : ""}
            aria-label={`Show hero image ${index + 1}: ${slide.alt}`}
            aria-current={index === heroSlide ? "true" : undefined}
            onClick={() => setHeroSlide(index)}
            key={slide.src}
          />)}
        </div>
        <a className={styles.scroll} href="#platform" aria-label={copy.hero.primary}><span /></a>
      </section>

      <section className={styles.platform} id="platform">
        <div className={styles.shell}>
          <div className={styles.sectionLead}>
            <div><p className={styles.eyebrow}>{copy.platform.eyebrow}</p><h2>{copy.platform.title}</h2></div>
            <p>{copy.platform.text}</p>
          </div>
          <div className={styles.platformCards}>
            {copy.platform.cards.map((card, index) => <article key={card[0]}>
              <div className={styles.platformMedia}>
                <Image src={platformCardImages[index].src} alt={platformCardImages[index].alt} fill sizes="(max-width: 880px) 100vw, 33vw" />
                <span className={styles.platformNumber}>0{index + 1}</span>
                <i className={styles.platformAccent} aria-hidden="true" />
              </div>
              <div className={styles.platformCardBody}>
                <h3>{card[0]}</h3>
                <p>{card[1]}</p>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className={styles.produce} id="produce">
        <div className={styles.shell}>
          <div className={styles.produceHead}>
            <div><p className={styles.eyebrow}>{copy.produce.eyebrow}</p><h2>{copy.produce.title}</h2></div>
            <p>{copy.produce.text}</p>
          </div>
          <div className={styles.berryPortfolio}>
            {copy.produce.products.map((product, index) => <article className={styles.berryProduct} key={product[0]}>
              <Image src={berryProductImages[index].src} alt={berryProductImages[index].alt} fill sizes="(max-width: 880px) 100vw, 50vw" />
              <div className={styles.berryProductShade} />
              <span className={styles.productNumber}>0{index + 1}</span>
              <div className={styles.productLabel}><small>{product[1]}</small><h3>{product[0]}</h3><p>{product[2]}</p></div>
              <i className={styles.productOrb}><BerryMark /></i>
              {index === 2 && <span className={styles.productInset} aria-hidden="true"><Image src="/images/magopco/magopco-blackberries-farm.webp" alt="" fill sizes="96px" /></span>}
            </article>)}
          </div>
          <div className={styles.noteList}>{copy.produce.notes.map((note, index) => <span key={note}><b>0{index + 1}</b>{note}</span>)}</div>
          <article className={styles.cultivationBand}>
            <Image src="/images/magopco/magopco-real-farm.png" alt="MAGOPCO farm road and protected greenhouses in Souss-Massa" fill sizes="(max-width: 880px) 100vw, 1240px" />
            <div className={styles.cultivationShade} />
            <div className={styles.cultivationCopy}>
              <p className={styles.eyebrow}>{copy.produce.farm.eyebrow}</p>
              <h3>{copy.produce.farm.title}</h3>
              <p>{copy.produce.farm.text}</p>
            </div>
            <BerryMark className={styles.cultivationMark} />
          </article>
        </div>
        <BerryMark className={styles.produceBerry} />
      </section>

      <section className={styles.process} id="process">
        <BerryMark className={styles.processBerry} />
        <div className={styles.shell}>
          <div className={styles.processHead}>
            <p className={styles.eyebrow}>{copy.process.eyebrow}</p>
            <h2>{copy.process.title}</h2>
            <p>{copy.process.text}</p>
          </div>
          <div className={styles.processSteps}>
            {copy.process.steps.map((step, index) => <article key={step[0]}>
              <div><span>0{index + 1}</span><i /></div><h3>{step[0]}</h3><p>{step[1]}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className={styles.facility} id="facility">
        <div className={styles.shell}>
          <div className={styles.facilityGrid}>
            <div className={styles.facilityCopy}>
              <p className={styles.eyebrow}>{copy.facility.eyebrow}</p>
              <h2>{copy.facility.title}</h2>
              <p>{copy.facility.text}</p>
              <ul>{copy.facility.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
            </div>
            <div className={styles.facilityMedia}>
              <div className={styles.facilityMain}><Image src="/images/magopco/magopco-packhouse.png" alt="MAGOPCO blueberry handling team and packed produce" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
              <div className={styles.facilityInset}><Image src="/images/magopco/magopco-ambassador-visit.png" alt="MAGOPCO packhouse operation" fill sizes="(max-width: 800px) 45vw, 20vw" /></div>
              <BerryMark />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnership} id="partnership">
        <div className={styles.shell}>
          <div className={styles.partnershipCard}>
            <div className={styles.partnershipImage}><Image src="/images/magopco/magopco-opening-with-chili.jpg" alt="Moroccan and Chilean representatives cutting the ribbon at the MAGOPCO station opening" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className={styles.partnershipCopy}>
              <p className={styles.eyebrow}>{copy.partnership.eyebrow}</p>
              <h2>{copy.partnership.title}</h2>
              <p>{copy.partnership.text}</p>
              <div><BerryMark /><span><strong>{copy.partnership.milestone}</strong><small>{copy.partnership.detail}</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <BerryMark className={styles.ctaBerryOne} /><BerryMark className={styles.ctaBerryTwo} />
        <div className={styles.ctaContent}>
          <p className={styles.eyebrow}>{copy.cta.eyebrow}</p><h2>{copy.cta.title}</h2><p>{copy.cta.text}</p>
          <div><a className={styles.primaryButton} href="mailto:info@agrupamarca.com?subject=MAGOPCO%20partnership%20enquiry"><span>{copy.cta.button}</span><i><ArrowIcon /></i></a><Link href="/">{copy.cta.back}</Link></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href="#top"><Image src="/images/magopco/magopco-logo.png" alt="MAGOPCO" width={2000} height={2000} /></a>
          <p>{copy.footer[0]}</p>
          <nav aria-label="Footer navigation"><a href="#platform">{copy.footer[1]}</a><a href="#process">{copy.footer[2]}</a><Link href="/agrupa-marca/">{copy.footer[3]}</Link><Link href="/">{copy.footer[4]}</Link></nav>
        </div>
        <div className={styles.footerWord}>MAGOPCO</div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} MAGOPCO. {copy.footer[5]}</span><span>Chtouka · Souss-Massa · Morocco</span></div>
      </footer>
    </main>
  );
}
