"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { magopcoPrivacyCopy, type MagopcoPrivacyLanguage } from "@/data/magopcoPrivacyPolicy";
import styles from "./MagopcoPrivacyPolicyPage.module.css";

const languages: { code: MagopcoPrivacyLanguage; label: string; flag: string }[] = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "AR", label: "العربية", flag: "🇲🇦" },
];

function BackIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6M9 12h10" /></svg>;
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>;
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark
    ? <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 15.4A8.4 8.4 0 0 1 8.6 3.5 8.5 8.5 0 1 0 20.5 15.4Z" /></svg>
    : <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" /></svg>;
}

export function MagopcoPrivacyPolicyPage() {
  const [language, setLanguage] = useState<MagopcoPrivacyLanguage>("EN");
  const [darkMode, setDarkMode] = useState(false);
  const copy = magopcoPrivacyCopy[language];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang")?.toUpperCase() as MagopcoPrivacyLanguage | undefined;
    const saved = window.localStorage.getItem("magopco-language") as MagopcoPrivacyLanguage | null;
    const nextLanguage = requested && languages.some((item) => item.code === requested) ? requested : saved;
    if (nextLanguage && languages.some((item) => item.code === nextLanguage)) setLanguage(nextLanguage);
    if (window.localStorage.getItem("magopco-theme") === "dark") setDarkMode(true);
  }, []);

  function chooseLanguage(code: MagopcoPrivacyLanguage) {
    setLanguage(code);
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

  return (
    <main className={`${styles.policyPage} ${darkMode ? styles.dark : ""}`} lang={copy.lang} dir={copy.dir}>
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

      <section className={styles.hero} id="top">
        <span className={styles.heroOrbOne} aria-hidden="true" /><span className={styles.heroOrbTwo} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p>{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <span>{copy.intro}</span>
        </div>
        <div className={styles.heroMeta}>
          <small>{copy.updated}</small>
          <a href={language === "AR" ? "https://www.cndp.ma/ar/%D9%86%D8%B5%D9%88%D8%B5-%D9%88%D9%82%D9%88%D8%A7%D9%86%D9%8A%D9%86/" : "https://www.cndp.ma/textes-et-lois/"} target="_blank" rel="noreferrer">{copy.source}<ArrowIcon /></a>
        </div>
      </section>

      <div className={styles.policyLayout}>
        <aside className={styles.contents}>
          <p>{copy.contents}</p>
          <nav aria-label={copy.contents}>{copy.sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>0{index + 1}</span>{section.label}</a>)}</nav>
          <Link className={styles.contactAction} href={`/magopco/contact/?lang=${language.toLowerCase()}`}><span>{copy.contact}</span><i><ArrowIcon /></i></Link>
        </aside>

        <article className={styles.policyArticle}>
          {copy.sections.map((section, index) => <section id={section.id} key={section.id}>
            <span className={styles.sectionNumber}>0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.link ? section.link.href.startsWith("http")
                ? <a className={styles.sectionLink} href={section.link.href} target="_blank" rel="noreferrer">{section.link.label}<ArrowIcon /></a>
                : <Link className={styles.sectionLink} href={section.link.href}>{section.link.label}<ArrowIcon /></Link>
                : null}
            </div>
          </section>)}
        </article>
      </div>

      <footer className={styles.footer}>
        <Link className={styles.footerBrand} href={`/magopco/?lang=${language.toLowerCase()}`}><Image src="/images/magopco/magopco-logo.png" alt="MAGOPCO" width={2000} height={2000} /></Link>
        <p>{copy.footer}</p>
        <nav><Link href={`/magopco/?lang=${language.toLowerCase()}`}>{copy.back}</Link><Link href={`/magopco/contact/?lang=${language.toLowerCase()}`}>{copy.contact}</Link><a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{copy.title}</a><Link href="/">CEO profile</Link></nav>
        <div><span>© {new Date().getFullYear()} MAGOPCO</span><span>Chtouka · Souss-Massa · Morocco</span></div>
      </footer>
    </main>
  );
}
