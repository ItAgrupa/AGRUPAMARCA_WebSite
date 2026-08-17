"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 36); fn(); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <nav className="nav-shell" aria-label="Primary navigation">
      <Link href="/" className="brand-mark" aria-label="Agrupa Marca Group home"><span>Agrupa Marca</span><small>MAGOPCO</small></Link>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        <Link href="#companies">Our Companies</Link><Link href="#expertise">Expertise</Link><Link href="#quality">Quality</Link><Link href="#souss-massa">Souss-Massa</Link><Link href="#impact">Impact</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="header-ctas"><Link href="/agrupa-marca">Agrupa Marca</Link><Link href="/magopco">MAGOPCO</Link></div>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}><span/><span/></button>
    </nav>
  </header>;
}
