"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { privacyPolicies, type PrivacyLocale } from "@/data/privacyPolicy";

export function PrivacyPolicyShell({ children, locale, currentPage = "privacy" }: { children: ReactNode; locale: PrivacyLocale; currentPage?: "privacy" | "contact" }) {
  const [darkMode, setDarkMode] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const copy = privacyPolicies[locale];
  const mainSite = `/agrupa-marca/?lang=${locale}`;
  const policyPath = locale === "en" ? "/agrupa-marca/privacy-policy/" : `/agrupa-marca/privacy-policy/${locale}/`;
  const contactPath = locale === "en" ? "/agrupa-marca/contact/" : `/agrupa-marca/contact/${locale}/`;

  useEffect(() => {
    window.localStorage.setItem("agrupa-language", locale);
  }, [locale]);

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
    <main className={`privacy-page ${darkMode ? "is-dark" : ""}`} lang={copy.lang} dir={copy.dir}>
      {children}

      <footer className="agrupa-footer">
        <div className="agrupa-shell footer-content">
          <Link href={`${mainSite}#company`} className="footer-brand">Agrupa Marca</Link>
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
            <button className="footer-theme-toggle" type="button" onClick={() => setDarkMode((value) => !value)} aria-pressed={darkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              {darkMode ? (
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42"/><circle cx="12" cy="12" r="4"/></svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"/></svg>
              )}
            </button>
          </div>

          <Link className="footer-contact-link" href={contactPath} aria-current={currentPage === "contact" ? "page" : undefined}>
            {copy.contact} <span aria-hidden="true">&#8599;</span>
          </Link>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link href={`${mainSite}#products`}>{copy.footer[1]}</Link>
            <Link href={`${mainSite}#quality`}>{copy.footer[2]}</Link>
            <Link href="/">{copy.footer[3]}</Link>
            <Link href={policyPath} aria-current={currentPage === "privacy" ? "page" : undefined}>{copy.footer[4]}</Link>
          </nav>

          <div className="footer-wordmark" aria-hidden="true">AGRUPA MARCA</div>
          <p className="footer-copyright">©2026 Agrupa Marca. {copy.footer[5]}</p>
        </div>
      </footer>

      {contactOpen ? (
        <div className="contact-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-contact-modal-title">
            <button className="contact-modal-close" type="button" onClick={() => setContactOpen(false)} aria-label={copy.modal[5]} autoFocus>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
            </button>
            <p className="agrupa-kicker">Agrupa Marca</p>
            <h2 id="privacy-contact-modal-title">{copy.modal[0]}</h2>
            <div className="contact-modal-grid">
              <article className="contact-address"><span>{copy.modal[1]}</span><address>Bd Abdelkrim, El Khattabi,<br />Cite Des Chalets,<br />Biougra 80200,<br />Agadir, Maroc</address></article>
              <article><span>{copy.modal[2]}</span><a href="mailto:info@agrupamarca.com">info@agrupamarca.com</a></article>
              <article><span>{copy.modal[3]}</span><a href="tel:+212528818244">+212 528 818244</a></article>
              <article><span>{copy.modal[4]}</span><a href="tel:+212528819334">+212 528819334</a></article>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
