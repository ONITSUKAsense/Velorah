import type { FormEvent } from "react"
import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id"

export default function ReachUs() {
  const { t } = useLanguage()
  const r = t.reachUs

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          form.reset()
          alert("Message sent! We'll get back to you soon.")
        } else {
          alert("Something went wrong. Please try again.")
        }
      })
      .catch(() => alert("Something went wrong. Please try again."))
  }

  return (
    <div className="px-6 py-24">
      <SEO title="Reach Us" description={r.title} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{r.label}</span>
            <h1
              className="text-5xl sm:text-6xl leading-[1.05] tracking-[-1.8px] mt-4 font-normal max-w-2xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {r.title}
            </h1>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  {r.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/50 transition-colors"
                  placeholder={r.formNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  {r.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/50 transition-colors"
                  placeholder={r.formEmailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                  {r.formSubject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full bg-transparent border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/50 transition-colors"
                  placeholder={r.formSubjectPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  {r.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-foreground/50 transition-colors resize-none"
                  placeholder={r.formMessagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="liquid-glass rounded-full px-10 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
              >
                {r.formSubmit}
              </button>
            </form>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div className="space-y-12 pt-2">
              <div>
                <h3
                  className="text-lg font-normal mb-3"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {r.emailLabel}
                </h3>
                <p className="text-sm text-muted-foreground">hello@velorah.studio</p>
              </div>
              <div>
                <h3
                  className="text-lg font-normal mb-3"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {r.locationLabel}
                </h3>
                {r.location.split("\n").map((line, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              <div>
                <h3
                  className="text-lg font-normal mb-3"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {r.socialLabel}
                </h3>
                <div className="flex gap-6">
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
