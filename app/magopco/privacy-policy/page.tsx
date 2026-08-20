import type { Metadata } from "next";
import { MagopcoPrivacyPolicyPage } from "@/components/MagopcoPrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | MAGOPCO",
  description: "Privacy information for visitors to the MAGOPCO website and people contacting the MAGOPCO team.",
  openGraph: {
    title: "Privacy Policy | MAGOPCO",
    description: "How MAGOPCO handles information connected to its website and business enquiries.",
    type: "website",
    locale: "en_US",
  },
};

export default function MagopcoPrivacyPolicyRoute() {
  return <MagopcoPrivacyPolicyPage />;
}
