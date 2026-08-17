"use client";

import Image from "next/image";
import { useState } from "react";
import { media } from "@/data/media";

export function CeoWelcomePage() {
  const [message, setMessage] = useState("");

  function showComingSoon(site: string) {
    setMessage(`${site} website is coming soon.`);
  }

  return (
    <main className="ceo-page" aria-labelledby="welcome-title">
      <div className="ceo-background" aria-hidden="true" />
      <section className="profile-shell">
        <div className="profile-hero">
          <div className="portrait-panel">
            <Image
              src="/images/sara-mouhsine-director.png"
              alt={media.sara.alt}
              fill
              priority
              sizes="(max-width: 900px) 78vw, 380px"
            />
          </div>
          <div className="profile-intro">
            <p className="welcome-label">Sara Mouhsine Carvajal</p>
            <h1 id="welcome-title">A pioneering woman leader in Souss-Massa agriculture.</h1>
            <p className="profile-lede">
              Sara Mouhsine Carvajal is a Moroccan CEO with more than 20 years of experience in fresh produce. Her leadership connects vegetables, berries, packing, export quality and a call for greater recognition of women in agriculture.
            </p>
            <a className="destination-cue" href="#website-destinations">
              <span>Website destinations below</span>
              <strong>Read Sara's story, then choose Agrupa Marca or MAGOPCO</strong>
            </a>
            <div className="scroll-hint" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>

        <div className="profile-grid">
          <section className="profile-card executive-summary" aria-labelledby="summary-title">
            <p className="section-kicker">Executive profile</p>
            <h2 id="summary-title">A leadership career rooted in agriculture, quality and people.</h2>
            <p>
              Sara leads across two agricultural paths: Agrupa Marca in Moroccan vegetables and MAGOPCO in berries. Her profile brings together operational discipline, export ambition, women empowerment and long-term value creation for the Souss-Massa region.
            </p>
          </section>

          <section className="profile-card quick-facts" aria-labelledby="facts-title">
            <p className="section-kicker">Profile highlights</p>
            <h2 id="facts-title">Key facts</h2>
            <dl>
              <div><dt>Leadership</dt><dd>More than 20 years</dd></div>
              <div><dt>Region</dt><dd>Souss-Massa, Morocco</dd></div>
              <div><dt>Focus</dt><dd>Vegetables, berries, packing and export quality</dd></div>
              <div><dt>Platform</dt><dd>Agrupa Marca and MAGOPCO</dd></div>
            </dl>
          </section>

          <section className="profile-card expertise-card-large" aria-labelledby="expertise-title">
            <p className="section-kicker">Leadership areas</p>
            <h2 id="expertise-title">Building agricultural value from field to international market.</h2>
            <div className="skill-list">
              <span>Fresh produce</span>
              <span>Berries</span>
              <span>Packing operations</span>
              <span>Quality standards</span>
              <span>Export readiness</span>
              <span>Partnerships</span>
              <span>Women leadership</span>
              <span>Regional development</span>
            </div>
          </section>

          <section className="profile-card image-story" aria-label="Sara Mouhsine Carvajal in agricultural settings">
            <div>
              <Image src="/images/sara-mouhsine-magopco-visit.png" alt="Sara Mouhsine Carvajal during a MAGOPCO visit" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
            <div>
              <Image src="/images/sara-mouhsine-magopco-packhouse.jfif" alt="Sara Mouhsine Carvajal at MAGOPCO packhouse" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
          </section>

          <section className="profile-card social-preview" aria-labelledby="social-title">
            <p className="section-kicker">Women in agriculture</p>
            <h2 id="social-title">A call to action for women, opportunity and sustainable communities.</h2>
            <p>
              Sara's public message is that agriculture must create opportunity, improve lives and invest in the women who sustain the sector. This section is ready for the social activity photos and community initiatives you will add next.
            </p>
            <div className="soft-note">Awaiting social activity pictures</div>
          </section>

          <section className="profile-card final-profile-note" aria-labelledby="vision-title">
            <div>
              <p className="section-kicker">MAGOPCO milestone</p>
              <h2 id="vision-title">A Moroccan-Chilean berry platform in Chtouka.</h2>
              <p>
                MAGOPCO reflects a strategic alliance between Agrupa Marca and Agroberries, with a berry packing station in the Chtouka area designed to reduce time between harvest and packing, preserve freshness and serve premium international markets.
              </p>
            </div>
            <div className="milestone-image">
              <Image
                src="/images/sara-mouhsine-magopco-opening.jpg"
                alt="MAGOPCO station opening in Biougra, Morocco with Sara Mouhsine Carvajal"
                fill
                sizes="(max-width: 920px) 100vw, 34vw"
              />
            </div>
          </section>
        </div>

        <section className="destination-panel" id="website-destinations" aria-labelledby="destination-title">
          <p className="section-kicker">Website destinations</p>
          <h2 id="destination-title">Continue to the companies shaped by this leadership.</h2>
          <p>
            You are in the right place. After discovering Sara Mouhsine Carvajal's leadership profile, choose the company website you want to visit.
          </p>
          <div className="profile-actions destination-actions" aria-label="Website choices">
            <button type="button" onClick={() => showComingSoon("Agrupa Marca")}>Visit Agrupa Marca website</button>
            <button type="button" onClick={() => showComingSoon("MAGOPCO")}>Visit MAGOPCO website</button>
          </div>
          <p className="coming-soon-message" role="status" aria-live="polite">{message}</p>
        </section>
      </section>
    </main>
  );
}
