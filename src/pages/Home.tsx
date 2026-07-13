import { motion } from "framer-motion"
import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

export default function Home() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <>
      <SEO />

      {/* Hero — fullscreen, video behind */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal mx-auto"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {h.heroTitle1}<em className="not-italic text-muted-foreground">{h.heroTitleEm1}</em>{h.heroTitle2}
            <br className="hidden sm:block" />
            <em className="not-italic text-muted-foreground">{h.heroTitleEm2}</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          >
            {h.heroSubtext}
          </motion.p>
          <motion.a
            href="/studio"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="liquid-glass rounded-full px-14 py-5 text-base mt-12 hover:scale-[1.03] transition-transform cursor-pointer no-underline text-foreground"
          >
            {h.beginJourney}
          </motion.a>
        </div>
      </section>

      {/* Below-fold — separate from video */}
      <div className="bg-background">
        {/* Brand Story */}
        <Reveal>
          <section className="px-6 py-32 border-t border-border/20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {h.philosophyLabel}
                  </span>
                  <h2
                    className="text-4xl sm:text-5xl leading-[1.05] tracking-[-1.5px] mt-6 font-normal"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {h.philosophyTitle}
                  </h2>
                </div>
                <div>
                  <p className="text-muted-foreground text-base leading-relaxed">{h.philosophyP1}</p>
                  <p className="text-muted-foreground text-base leading-relaxed mt-6">{h.philosophyP2}</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Features */}
        <Reveal>
          <section className="px-6 py-32 border-t border-border/20">
            <div className="max-w-7xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {h.featuresLabel}
              </span>
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                {h.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.1}>
                    <div>
                      <h3
                        className="text-2xl font-normal leading-tight tracking-[-0.5px]"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Selected Works */}
        <Reveal>
          <section className="px-6 py-32 border-t border-border/20">
            <div className="max-w-7xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {h.worksLabel}
              </span>
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {h.works.map((work, i) => (
                  <Reveal key={work.title} delay={i * 0.1}>
                    <a
                      href="/studio"
                      className="group block aspect-[4/5] border border-border/30 rounded-lg overflow-hidden flex flex-col justify-end p-8 hover:border-foreground/30 transition-all relative"
                    >
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="relative z-10 text-xs tracking-[0.15em] uppercase text-white/60">
                        {work.category}
                      </span>
                      <h3
                        className="relative z-10 text-2xl font-normal mt-2 text-white group-hover:text-white/80 transition-colors"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {work.title}
                      </h3>
                    </a>
                  </Reveal>
                ))}
              </div>
              <div className="text-center mt-12">
                <a
                  href="/studio"
                  className="liquid-glass rounded-full px-10 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform inline-block no-underline"
                >
                  {t.studio.label}
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  )
}
