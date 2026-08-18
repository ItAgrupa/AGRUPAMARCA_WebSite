import Image from "next/image";
import Link from "next/link";
import { PrivacyPolicyShell } from "@/components/PrivacyPolicyShell";
import { privacyPolicies, type PrivacyLocale } from "@/data/privacyPolicy";

const localePaths: Record<PrivacyLocale, string> = {
  en: "/agrupa-marca/privacy-policy/",
  es: "/agrupa-marca/privacy-policy/es/",
  ar: "/agrupa-marca/privacy-policy/ar/",
};

export function PrivacyPolicyDocument({ locale }: { locale: PrivacyLocale }) {
  const copy = privacyPolicies[locale];

  return (
    <PrivacyPolicyShell locale={locale}>
      <header className="privacy-header">
        <Link href={`/agrupa-marca/?lang=${locale}`} className="privacy-logo" aria-label={copy.back}>
          <Image src="/images/agrupa-marca/inside-logo.png" alt="" width={40} height={40} priority />
          <span><strong>Agrupa</strong> Marca</span>
        </Link>
        <div className="privacy-header-actions">
          <nav className="privacy-language-switcher" aria-label="Language">
            {(Object.keys(localePaths) as PrivacyLocale[]).map((code) => (
              <Link href={localePaths[code]} key={code} aria-current={code === locale ? "page" : undefined}>
                {code.toUpperCase()}
              </Link>
            ))}
          </nav>
          <Link href={`/agrupa-marca/?lang=${locale}`} className="privacy-back">{copy.back} <span aria-hidden="true">&#8599;</span></Link>
        </div>
      </header>

      <section className="privacy-hero">
        <div className="privacy-shell">
          <p>{copy.legal}</p>
          <h1>{copy.heading}</h1>
          <span>{copy.intro}</span>
          <small>{copy.updated}</small>
        </div>
      </section>

      <div className="privacy-shell privacy-layout">
        <aside aria-label={copy.contents}>
          <p>{copy.contents}</p>
          <nav>{copy.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.label}</a>)}</nav>
        </aside>

        <article className="privacy-article">
          {copy.sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.id === "rights" ? (
                <div className="privacy-rights-links">
                  <a href="mailto:info@agrupamarca.com">info@agrupamarca.com</a>
                  <a href="https://www.cndp.ma/" target="_blank" rel="noreferrer">{copy.cndp} &#8599;</a>
                </div>
              ) : null}
              {section.id === "contact" ? (
                <div className="privacy-contact-card">
                  <address>Bd Abdelkrim, El Khattabi,<br />Cite Des Chalets,<br />Biougra 80200,<br />Agadir, Maroc</address>
                  <div>
                    <a href="mailto:info@agrupamarca.com">info@agrupamarca.com</a>
                    <a href="tel:+212528818244">+212 528 818244</a>
                    <span>{copy.modal[4]}: +212 528819334</span>
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </PrivacyPolicyShell>
  );
}
