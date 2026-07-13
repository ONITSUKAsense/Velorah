import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <div className="px-6 py-24">
      <SEO title="About" description={a.title} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-24">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{a.label}</span>
            <h1
              className="text-5xl sm:text-6xl leading-[1.05] tracking-[-1.8px] mt-4 font-normal max-w-3xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {a.title}
            </h1>
          </div>
        </Reveal>

        {/* Story */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-16 mb-32">
            <div>
              <h2
                className="text-3xl font-normal leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {a.storyLabel}
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">{a.storyP1}</p>
              <p className="text-muted-foreground leading-relaxed">{a.storyP2}</p>
              <p className="text-muted-foreground leading-relaxed">{a.storyP3}</p>
            </div>
          </div>
        </Reveal>

        {/* Team */}
        <Reveal delay={0.2}>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{a.teamLabel}</span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {a.members.map((member, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div>
                    <div className="aspect-square border border-border/30 rounded-lg flex items-center justify-center mb-4">
                      <span
                        className="text-6xl text-muted-foreground/30"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-normal"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mt-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-32 text-center border-t border-border/20 pt-24">
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
