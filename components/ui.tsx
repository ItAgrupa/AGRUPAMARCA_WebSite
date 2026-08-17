"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

export function AnimatedHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.h2 className={className} initial={reduce ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>{children}</motion.h2>;
}

export function ImageReveal(props: ImageProps) {
  const reduce = useReducedMotion();
  return <motion.div className="image-reveal" initial={reduce ? false : { clipPath: "inset(12% 0 12% 0)", opacity: 0 }} whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 1.15, ease: [.22, 1, .36, 1] }}><Image {...props} /></motion.div>;
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`arrow-link ${light ? "arrow-link-light" : ""}`}><span>{children}</span><span aria-hidden="true" className="arrow">↗</span></Link>;
}
