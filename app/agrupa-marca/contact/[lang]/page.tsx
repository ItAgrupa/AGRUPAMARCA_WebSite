import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPageDocument } from "@/components/ContactPageDocument";
import { contactPageCopy } from "@/data/contactPage";
import type { PrivacyLocale } from "@/data/privacyPolicy";

const translatedLocales = ["es", "ar"] as const;

export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

function isTranslatedLocale(value: string): value is Exclude<PrivacyLocale, "en"> {
  return translatedLocales.some((locale) => locale === value);
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isTranslatedLocale(lang)) return {};
  return { title: contactPageCopy[lang].title, description: contactPageCopy[lang].description };
}

export default async function TranslatedContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isTranslatedLocale(lang)) notFound();
  return <ContactPageDocument locale={lang} />;
}
