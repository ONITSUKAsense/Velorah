import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

export default function Journal() {
  const { t } = useLanguage()
  const j = t.journal

  return (
    <div className="px-6 py-24">
      <SEO title="Journal" description={j.title} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{j.label}</span>
            <h1
              className="text-5xl sm:text-6xl leading-[1.05] tracking-[-1.8px] mt-4 font-normal max-w-2xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {j.title}
            </h1>
          </div>
        </Reveal>

        {/* List */}
        <div className="space-y-1">
          {j.entries.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.05}>
              <Link
                to={`/journal/${entry.slug}`}
                className="group grid md:grid-cols-4 gap-4 md:gap-8 py-8 border-t border-border/20 items-start hover:border-foreground/20 transition-colors no-underline"
              >
                <div className="text-xs text-muted-foreground md:pt-1">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <div className="md:col-span-2">
                  <h2
                    className="text-xl font-normal group-hover:text-muted-foreground transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {entry.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {entry.excerpt}
                  </p>
                </div>

                <div className="flex md:justify-end gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-border/30 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-24 text-center border-t border-border/20 pt-24">
            <h2
              className="text-3xl sm:text-4xl leading-[1.1] tracking-[-1px] font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {t.reachUs.title}
            </h2>
            <a
              href="/reach-us"
              className="liquid-glass rounded-full px-10 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform inline-block no-underline mt-8"
            >
              {t.reachUs.formSubmit}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
