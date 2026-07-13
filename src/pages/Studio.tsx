import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../i18n/context"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

export default function Studio() {
  const { t } = useLanguage()
  const s = t.studio
  const [activeCategory, setActiveCategory] = useState(s.categories[0])

  const filtered =
    activeCategory === s.categories[0]
      ? s.items
      : s.items.filter((item) => item.category === activeCategory)

  return (
    <div className="px-6 py-24">
      <SEO title="Studio" description={s.title} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</span>
            <h1
              className="text-5xl sm:text-6xl leading-[1.05] tracking-[-1.8px] mt-4 font-normal max-w-2xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {s.title}
            </h1>
          </div>
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {s.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "border-foreground text-foreground"
                    : "border-border/50 text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group aspect-square border border-border/30 rounded-lg overflow-hidden flex flex-col justify-end p-6 hover:border-foreground/30 transition-all cursor-pointer relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10">
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60">
                    {item.category}
                  </span>
                  <h3
                    className="text-xl font-normal mt-1.5 text-white group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
