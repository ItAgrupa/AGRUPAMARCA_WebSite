"use client";

import { useState, type FormEvent } from "react";
import type { PrivacyLocale } from "@/data/privacyPolicy";
import { contactPageCopy } from "@/data/contactPage";

export function AgrupaContactForm({ locale }: { locale: PrivacyLocale }) {
  const copy = contactPageCopy[locale];
  const [message, setMessage] = useState<"" | "error" | "success">("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setMessage("error");
      return;
    }

    const data = new FormData(form);
    if (data.get("consent") !== "on") {
      setMessage("error");
      return;
    }

    const subject = String(data.get("subject") || "Agrupa Marca website enquiry");
    const body = [
      `${copy.fields[0]}: ${data.get("name")}`,
      `${copy.fields[1]}: ${data.get("company") || "—"}`,
      `${copy.fields[2]}: ${data.get("email")}`,
      `${copy.fields[3]}: ${data.get("phone") || "—"}`,
      "",
      `${copy.fields[5]}:`,
      String(data.get("message") || ""),
    ].join("\n");

    setMessage("success");
    window.location.href = `mailto:info@agrupamarca.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-page-form" onSubmit={submitEnquiry} noValidate>
      <div className="contact-form-heading">
        <h2>{copy.formTitle}</h2>
        <p>{copy.formIntro}</p>
      </div>
      <div className="contact-form-grid">
        {(["name", "company", "email", "phone", "subject"] as const).map((name, index) => (
          <label key={name} className={name === "subject" ? "is-wide" : undefined}>
            <span>{copy.fields[index]}{["name", "email", "subject"].includes(name) ? " *" : ""}</span>
            <input name={name} type={name === "email" ? "email" : name === "phone" ? "tel" : "text"} placeholder={copy.placeholders[index]} required={["name", "email", "subject"].includes(name)} />
          </label>
        ))}
        <label className="is-wide">
          <span>{copy.fields[5]} *</span>
          <textarea name="message" rows={6} placeholder={copy.placeholders[5]} required />
        </label>
      </div>
      <label className="contact-consent">
        <input name="consent" type="checkbox" required />
        <span>{copy.consent}</span>
      </label>
      {message ? <p className={`contact-form-status is-${message}`} role="status">{message === "success" ? copy.success : copy.required}</p> : null}
      <button className="contact-form-submit" type="submit">{copy.submit}<span aria-hidden="true">&#8599;</span></button>
    </form>
  );
}
