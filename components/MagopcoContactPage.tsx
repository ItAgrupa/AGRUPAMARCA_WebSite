"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import styles from "./MagopcoContactPage.module.css";

type LanguageCode = "EN" | "ES" | "AR";
type FormStatus = "" | "error" | "ready";

const languages: { code: LanguageCode; label: string; flag: string }[] = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "AR", label: "العربية", flag: "🇲🇦" },
];

const contactCopy = {
  EN: {
    back: "Back to MAGOPCO",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
    eyebrow: "MAGOPCO · CONTACT",
    title: "Let’s make the next connection count.",
    intro: "For commercial, institutional or partnership conversations, share the essentials and we’ll help direct your enquiry to the right MAGOPCO contact.",
    note: "Focused enquiries. Clear next steps.",
    details: [
      ["Direct email", "info@agrupamarca.com"],
      ["Based in", "Chtouka · Souss-Massa · Morocco"],
      ["Conversations", "Commercial · Institutional · Partnerships"],
    ],
    formTitle: "Start a focused conversation.",
    formIntro: "A few useful details will help us understand your request before we connect.",
    fields: ["Full name", "Company", "Business email", "Phone", "Enquiry type", "Message"],
    placeholders: ["Your name", "Company or organization", "name@company.com", "+212 ...", "Select a topic", "Tell us what you would like to discuss"],
    topics: ["Commercial enquiry", "Institutional contact", "Partnership opportunity", "Media or other"],
    consent: "I agree that MAGOPCO may use this information to respond to my enquiry.",
    submit: "Prepare my enquiry",
    error: "Please complete the required fields and confirm your consent.",
    ready: "Your email application is opening with the enquiry prepared.",
    required: "Required fields",
    footer: "Berry expertise rooted in Souss-Massa.",
  },
  ES: {
    back: "Volver a MAGOPCO",
    darkMode: "Activar modo oscuro",
    lightMode: "Activar modo claro",
    eyebrow: "MAGOPCO · CONTACTO",
    title: "Hagamos que la próxima conexión cuente.",
    intro: "Para conversaciones comerciales, institucionales o de colaboración, comparta lo esencial y dirigiremos su consulta al contacto adecuado de MAGOPCO.",
    note: "Consultas claras. Próximos pasos precisos.",
    details: [
      ["Email directo", "info@agrupamarca.com"],
      ["Ubicación", "Chtouka · Souss-Massa · Marruecos"],
      ["Conversaciones", "Comercial · Institucional · Alianzas"],
    ],
    formTitle: "Inicie una conversación concreta.",
    formIntro: "Algunos datos útiles nos ayudarán a comprender su solicitud antes de ponerle en contacto.",
    fields: ["Nombre completo", "Empresa", "Email profesional", "Teléfono", "Tipo de consulta", "Mensaje"],
    placeholders: ["Su nombre", "Empresa u organización", "nombre@empresa.com", "+212 ...", "Seleccione un tema", "Cuéntenos qué desea tratar"],
    topics: ["Consulta comercial", "Contacto institucional", "Oportunidad de colaboración", "Prensa u otro"],
    consent: "Acepto que MAGOPCO utilice esta información para responder a mi consulta.",
    submit: "Preparar mi consulta",
    error: "Complete los campos obligatorios y confirme su consentimiento.",
    ready: "Su aplicación de correo se está abriendo con la consulta preparada.",
    required: "Campos obligatorios",
    footer: "Experiencia en berries con raíces en Souss-Massa.",
  },
  AR: {
    back: "العودة إلى ماغوبكو",
    darkMode: "تفعيل الوضع الداكن",
    lightMode: "تفعيل الوضع الفاتح",
    eyebrow: "ماغوبكو · تواصل",
    title: "لنجعل التواصل المقبل ذا قيمة.",
    intro: "للمحادثات التجارية أو المؤسساتية أو فرص الشراكة، شاركونا المعلومات الأساسية وسنوجّه استفساركم إلى الجهة المناسبة في ماغوبكو.",
    note: "استفسارات واضحة. خطوات تالية دقيقة.",
    details: [
      ["البريد المباشر", "info@agrupamarca.com"],
      ["الموقع", "اشتوكة · سوس ماسة · المغرب"],
      ["مجالات التواصل", "تجاري · مؤسساتي · شراكات"],
    ],
    formTitle: "ابدؤوا محادثة واضحة.",
    formIntro: "ستساعدنا بعض المعلومات المفيدة على فهم طلبكم قبل توجيه التواصل.",
    fields: ["الاسم الكامل", "الشركة", "البريد المهني", "الهاتف", "نوع الاستفسار", "الرسالة"],
    placeholders: ["الاسم", "الشركة أو المؤسسة", "name@company.com", "+212 ...", "اختاروا الموضوع", "أخبرونا بما تودون مناقشته"],
    topics: ["استفسار تجاري", "تواصل مؤسساتي", "فرصة شراكة", "إعلام أو موضوع آخر"],
    consent: "أوافق على استخدام ماغوبكو لهذه المعلومات من أجل الرد على استفساري.",
    submit: "إعداد الاستفسار",
    error: "يرجى إكمال الحقول المطلوبة وتأكيد الموافقة.",
    ready: "سيُفتح تطبيق البريد الإلكتروني مع الاستفسار المُعدّ.",
    required: "حقول مطلوبة",
    footer: "خبرة في التوت بجذور في سوس ماسة.",
  },
} as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>;
}

function BackIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6M9 12h10" /></svg>;
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark
    ? <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 15.4A8.4 8.4 0 0 1 8.6 3.5 8.5 8.5 0 1 0 20.5 15.4Z" /></svg>
    : <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" /></svg>;
}

export function MagopcoContactPage() {
  const [language, setLanguage] = useState<LanguageCode>("EN");
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState<FormStatus>("");
  const copy = contactCopy[language];
  const isArabic = language === "AR";

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang")?.toUpperCase() as LanguageCode | undefined;
    const saved = window.localStorage.getItem("magopco-language") as LanguageCode | null;
    const nextLanguage = requested && languages.some((item) => item.code === requested) ? requested : saved;
    if (nextLanguage && languages.some((item) => item.code === nextLanguage)) setLanguage(nextLanguage);
    if (window.localStorage.getItem("magopco-theme") === "dark") setDarkMode(true);
  }, []);

  function chooseLanguage(code: LanguageCode) {
    setLanguage(code);
    setStatus("");
    window.localStorage.setItem("magopco-language", code);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", code.toLowerCase());
    window.history.replaceState({}, "", url);
  }

  function toggleTheme() {
    setDarkMode((value) => {
      window.localStorage.setItem("magopco-theme", value ? "light" : "dark");
      return !value;
    });
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    if (data.get("consent") !== "on") {
      setStatus("error");
      return;
    }

    const topic = String(data.get("topic") || "MAGOPCO website enquiry");
    const body = [
      `${copy.fields[0]}: ${data.get("name")}`,
      `${copy.fields[1]}: ${data.get("company")}`,
      `${copy.fields[2]}: ${data.get("email")}`,
      `${copy.fields[3]}: ${data.get("phone") || "—"}`,
      `${copy.fields[4]}: ${topic}`,
      "",
      `${copy.fields[5]}:`,
      String(data.get("message") || ""),
    ].join("\n");

    setStatus("ready");
    window.location.href = `mailto:info@agrupamarca.com?subject=${encodeURIComponent(`MAGOPCO — ${topic}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className={`${styles.contactPage} ${darkMode ? styles.dark : ""}`} lang={language.toLowerCase()} dir={isArabic ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <Link className={styles.brand} href={`/magopco/?lang=${language.toLowerCase()}`} aria-label={copy.back}>
          <span><Image src="/images/magopco/magopco-logo.png" alt="" width={2000} height={2000} priority /></span>
          <strong>Magopco</strong>
        </Link>
        <div className={styles.headerActions}>
          <Link className={styles.back} href={`/magopco/?lang=${language.toLowerCase()}`}><BackIcon /><span>{copy.back}</span></Link>
          <nav className={styles.languages} aria-label="Language">
            {languages.map((item) => <button type="button" className={item.code === language ? styles.languageActive : ""} aria-current={item.code === language ? "page" : undefined} onClick={() => chooseLanguage(item.code)} title={item.label} key={item.code}><span aria-hidden="true">{item.flag}</span><b>{item.code}</b></button>)}
          </nav>
          <button className={styles.theme} type="button" onClick={toggleTheme} aria-label={darkMode ? copy.lightMode : copy.darkMode}><ThemeIcon dark={darkMode} /></button>
        </div>
      </header>

      <section className={styles.contactLayout}>
        <div className={styles.contactVisual}>
          <Image className={styles.visualImage} src="/images/magopco/magopco-at-farms.png" alt="MAGOPCO team working close to blueberry production" fill sizes="(max-width: 900px) 100vw, 47vw" priority />
          <div className={styles.visualShade} />
          <div className={styles.visualCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </div>
          <div className={styles.visualFooter}>
            <span className={styles.miniMark}><Image src="/images/magopco/magopco-logo.png" alt="" width={2000} height={2000} /></span>
            <p>{copy.note}</p>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formHeading}>
            <p className={styles.eyebrow}>{copy.required}</p>
            <h2>{copy.formTitle}</h2>
            <p>{copy.formIntro}</p>
          </div>

          <form className={styles.form} onSubmit={submitEnquiry} noValidate>
            <div className={styles.formGrid}>
              <label><span>{copy.fields[0]} *</span><input name="name" type="text" placeholder={copy.placeholders[0]} autoComplete="name" required /></label>
              <label><span>{copy.fields[1]} *</span><input name="company" type="text" placeholder={copy.placeholders[1]} autoComplete="organization" required /></label>
              <label><span>{copy.fields[2]} *</span><input name="email" type="email" placeholder={copy.placeholders[2]} autoComplete="email" dir="ltr" required /></label>
              <label><span>{copy.fields[3]}</span><input name="phone" type="tel" placeholder={copy.placeholders[3]} autoComplete="tel" dir="ltr" /></label>
              <label className={styles.wide}><span>{copy.fields[4]} *</span><select name="topic" defaultValue="" required><option value="" disabled>{copy.placeholders[4]}</option>{copy.topics.map((topic) => <option value={topic} key={topic}>{topic}</option>)}</select></label>
              <label className={styles.wide}><span>{copy.fields[5]} *</span><textarea name="message" rows={6} placeholder={copy.placeholders[5]} required /></label>
            </div>
            <label className={styles.consent}><input name="consent" type="checkbox" required /><span>{copy.consent}</span></label>
            {status ? <p className={`${styles.status} ${status === "error" ? styles.statusError : styles.statusReady}`} role="status">{status === "error" ? copy.error : copy.ready}</p> : null}
            <button className={styles.submit} type="submit"><span>{copy.submit}</span><i><ArrowIcon /></i></button>
          </form>
        </div>
      </section>

      <section className={styles.contactDetails} aria-label="MAGOPCO contact information">
        {copy.details.map((detail, index) => <article key={detail[0]}><span>0{index + 1}</span><div><small>{detail[0]}</small>{index === 0 ? <a href="mailto:info@agrupamarca.com" dir="ltr">{detail[1]}</a> : <strong>{detail[1]}</strong>}</div></article>)}
      </section>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} MAGOPCO</span><p>{copy.footer}</p><Link href="/">CEO profile</Link></footer>
    </main>
  );
}
