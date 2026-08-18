import type { Metadata } from "next";
import { ContactPageDocument } from "@/components/ContactPageDocument";
import { contactPageCopy } from "@/data/contactPage";

export const metadata: Metadata = {
  title: contactPageCopy.en.title,
  description: contactPageCopy.en.description,
};

export default function ContactPage() {
  return <ContactPageDocument locale="en" />;
}
