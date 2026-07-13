import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"

export default function JournalDetail() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const entry = t.journal.entries.find((e) => e.slug === slug)

  if (!entry) {
    return (
      <div className="px-6 py-24 text-center">
        <h1 className="text-3xl font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Article not found
        </h1>
        <Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 inline-block">
          ← Back to Journal
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-6 py-24"
    >
      <SEO title={entry.title} description={entry.excerpt} />
      <article className="max-w-3xl mx-auto">
        <Link
          to="/journal"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block mb-12"
        >
          ← {t.nav.journal}
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-border/30 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl sm:text-5xl leading-[1.1] tracking-[-1.5px] font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {entry.title}
          </h1>
          <time className="text-sm text-muted-foreground mt-4 block">
            {new Date(entry.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="text-muted-foreground text-base leading-[1.8] space-y-5 max-w-2xl">
          {entry.body.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**")) {
              // Handle bold lead-ins
              const [bold, ...rest] = paragraph.split("**")
              return (
                <p key={i}>
                  <strong className="text-foreground">{bold.replace(/^\*+/, "")}</strong>
                  {rest.join("")}
                </p>
              )
            }
            if (paragraph.startsWith("1. ")) {
              const lines = paragraph.split("\n")
              return (
                <ol key={i} className="list-decimal pl-5 space-y-2">
                  {lines.map((line, j) => (
                    <li key={j} className="pl-1">{line.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              )
            }
            return <p key={i}>{paragraph}</p>
          })}
        </div>
      </article>
    </motion.div>
  )
}
