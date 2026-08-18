import Image from "next/image";
import Link from "next/link";
import { AgrupaContactForm } from "@/components/AgrupaContactForm";
import { PrivacyPolicyShell } from "@/components/PrivacyPolicyShell";
import { contactPageCopy } from "@/data/contactPage";
import type { PrivacyLocale } from "@/data/privacyPolicy";

const contactPaths: Record<PrivacyLocale, string> = {
  en: "/agrupa-marca/contact/",
  es: "/agrupa-marca/contact/es/",
  ar: "/agrupa-marca/contact/ar/",
};

export function ContactPageDocument({ locale }: { locale: PrivacyLocale }) {
  const copy = contactPageCopy[locale];

  return (
    <PrivacyPolicyShell locale={locale} currentPage="contact">
      <header className="privacy-header">
        <Link href={`/agrupa-marca/?lang=${locale}`} className="privacy-logo" aria-label={copy.back}>
          <Image src="/images/agrupa-marca/inside-logo.png" alt="" width={40} height={40} priority />
          <span><strong>Agrupa</strong> Marca</span>
        </Link>
        <div className="privacy-header-actions">
          <nav className="privacy-language-switcher" aria-label="Language">
            {(Object.keys(contactPaths) as PrivacyLocale[]).map((code) => (
              <Link href={contactPaths[code]} key={code} aria-current={code === locale ? "page" : undefined}>{code.toUpperCase()}</Link>
            ))}
          </nav>
          <Link href={`/agrupa-marca/?lang=${locale}`} className="privacy-back">{copy.back} <span aria-hidden="true">&#8599;</span></Link>
        </div>
      </header>

      <section className="contact-page-hero">
        <div className="privacy-shell">
          <p>{copy.eyebrow}</p>
          <h1>{copy.heading}</h1>
          <span>{copy.intro}</span>
        </div>
      </section>

      <section className="privacy-shell contact-page-layout">
        <aside className="contact-details-card">
          <p>{copy.detailsTitle}</p>
          <address>{copy.address}</address>
          <div>
            <a href="mailto:info@agrupamarca.com">info@agrupamarca.com</a>
            <a href="tel:+212528818244">+212 528 818244</a>
            <a href="https://wa.me/212669145457" target="_blank" rel="noreferrer">WhatsApp: +212 669 145457</a>
            <span>{locale === "ar" ? "الفاكس" : "Fax"}: +212 528819334</span>
          </div>
        </aside>
        <AgrupaContactForm locale={locale} />
      </section>
    </PrivacyPolicyShell>
  );
}
