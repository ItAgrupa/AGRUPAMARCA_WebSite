import type { Metadata } from "next";
import { PrivacyPolicyDocument } from "@/components/PrivacyPolicyDocument";
import { privacyPolicies } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: privacyPolicies.en.title,
  description: privacyPolicies.en.description,
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyDocument locale="en" />;
}
