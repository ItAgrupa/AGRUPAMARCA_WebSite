"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { companies, essentialFacts } from "@/data/companies";
import { draftStoryTopics, expertiseItems } from "@/data/news";
import { leadership } from "@/data/leadership";
import { media } from "@/data/media";
import { AnimatedHeading, ArrowLink, ImageReveal } from "./ui";

export function CompanyCards() {
  const reduce = useReducedMotion();
  return (
    <section className="section companies-section page-shell" id="companies" aria-labelledby="companies-title">
      <div className="section-heading">
        <p className="section-index">Our companies</p>
        <AnimatedHeading>Two companies. One agricultural vision.</AnimatedHeading>
      </div>
      <div className="company-card-grid">
        {companies.map((company, index) => {
          const image = index === 0 ? media.agrupa : media.magopco;
          return (
            <motion.article className="company-card" key={company.id} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .1 }}>
              <Link className="company-image" href={company.href} aria-label={index === 0 ? "Enter Agrupa Marca" : "Discover MAGOPCO"}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
              </Link>
              <div className="company-card-copy">
                <p className="eyebrow">{company.name}</p>
                <h2>{company.heading}</h2>
                <p>{company.tags.join(" · ")}</p>
                <ArrowLink href={company.href}>{index === 0 ? "Enter Agrupa Marca" : "Discover MAGOPCO"}</ArrowLink>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-index">Expertise</p>
          <AnimatedHeading>From the field to the market.</AnimatedHeading>
        </div>
        <div className="expertise-grid">
          {expertiseItems.map((item) => (
            <Link href={item.href} className="expertise-card" key={item.title}>
              <div><Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityExportSection() {
  const items = ["Quality control", "Traceability", "Food safety", "Packing standards", "Export preparation", "Certifications"];
  return (
    <section className="section quality-section page-shell" id="quality" aria-labelledby="quality-title">
      <div className="quality-copy">
        <p className="section-index">Quality and export</p>
        <AnimatedHeading>Built for demanding markets.</AnimatedHeading>
        <p>Quality, food safety, traceability and packing discipline are central to the development of Agrupa Marca and MAGOPCO.</p>
      </div>
      <div className="trust-list">
        {items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
      </div>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section className="section leadership-section page-shell" id="leadership" aria-labelledby="leadership-title">
      <div className="leadership-card">
        <div className="leadership-image"><Image src={media.sara.src} alt={media.sara.alt} fill sizes="140px" /></div>
        <div>
          <p className="section-index">Leadership</p>
          <AnimatedHeading>Leadership behind the vision.</AnimatedHeading>
          <p>Sara Mouhsine Carvajal supports the leadership vision behind Agrupa Marca and MAGOPCO, connecting agricultural development, people, quality and long-term partnerships from Morocco's Souss-Massa region.</p>
          <p className="leader-name">{leadership.name}<span>{leadership.role}</span></p>
          <ArrowLink href="/leadership/sara-mouhsine-carvajal">Leadership story</ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function SoussMassaSection() {
  return (
    <section className="section souss-section page-shell" id="souss-massa" aria-labelledby="souss-title">
      <div className="souss-image"><ImageReveal src={media.landscape.src} alt={media.landscape.alt} fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
      <div className="souss-copy">
        <p className="section-index">Souss-Massa</p>
        <AnimatedHeading>Rooted in Morocco's agricultural south.</AnimatedHeading>
        <p>Souss-Massa provides the production environment, agricultural knowledge and local teams behind the growth of Agrupa Marca and MAGOPCO.</p>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="section impact-section" id="impact" aria-labelledby="impact-title">
      <div className="page-shell impact-layout">
        <div>
          <p className="section-index">Responsibility</p>
          <AnimatedHeading>Growing with responsibility.</AnimatedHeading>
          <p>Our agricultural activity is connected to the people, resources and communities around us. Agrupa Marca and MAGOPCO aim to build growth that respects quality, employment, local development and responsible production.</p>
          <div className="impact-pillars">{["People", "Local development", "Women", "Community"].map((pillar) => <span key={pillar}>{pillar}</span>)}</div>
          <ArrowLink href="/social-impact">Discover our impact</ArrowLink>
        </div>
        <div className="impact-image"><ImageReveal src={media.community.src} alt={media.community.alt} fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
      </div>
    </section>
  );
}

export function DraftStoriesSection() {
  return (
    <section className="section draft-section page-shell" aria-labelledby="draft-title">
      <div>
        <p className="section-index">Draft content</p>
        <AnimatedHeading>Stories to develop.</AnimatedHeading>
      </div>
      <div className="draft-list">
        {draftStoryTopics.map((topic) => <p key={topic}>{topic}</p>)}
      </div>
    </section>
  );
}

export function EssentialFacts() {
  return (
    <section className="section facts page-shell" aria-labelledby="facts-title">
      <div>
        <p className="section-index">Essential facts</p>
        <AnimatedHeading>Clear answers for buyers and partners.</AnimatedHeading>
      </div>
      <div className="fact-list">{essentialFacts.slice(0, 3).map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="page-shell">
        <p className="section-index">Continue</p>
        <AnimatedHeading>Choose your path.</AnimatedHeading>
        <div className="cta-grid">
          <Link href="/agrupa-marca"><small>Fresh produce · Packing · Export</small><strong>Agrupa Marca</strong></Link>
          <Link href="/magopco"><small>Berries · Quality · Partnership</small><strong>MAGOPCO</strong></Link>
          <Link href="/contact"><small>Partnerships · Information · Contact</small><strong>Contact us</strong></Link>
        </div>
      </div>
    </section>
  );
}
