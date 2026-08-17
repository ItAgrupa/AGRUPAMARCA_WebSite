"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { homepage } from "@/data/homepage";
import { media } from "@/data/media";
import { ArrowLink } from "./ui";

export function Hero() {
  const reduce = useReducedMotion();
  return <section className="hero" aria-labelledby="hero-title">
    <motion.div className="hero-media" initial={reduce ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.8, ease: "easeOut" }}><Image src={media.hero.src} alt={media.hero.alt} fill priority sizes="100vw" /></motion.div>
    <div className="hero-wash"/><div className="hero-grain"/>
    <div className="hero-content page-shell">
      <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>{homepage.eyebrow}</motion.p>
      <h1 id="hero-title">{homepage.title.split(" ").map((word, i) => <motion.span key={word+i} initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ delay: .22 + i*.045, duration: .7, ease: [.22,1,.36,1] }}>{word}&nbsp;</motion.span>)}</h1>
      <motion.p className="hero-intro" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72, duration: .7 }}>{homepage.intro}</motion.p>
      <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }}><ArrowLink href="/agrupa-marca" light>Explore Agrupa Marca</ArrowLink><ArrowLink href="/magopco" light>Discover MAGOPCO</ArrowLink></motion.div>
    </div>
  </section>;
}
