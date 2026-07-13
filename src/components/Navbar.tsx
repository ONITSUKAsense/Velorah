import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "../i18n/context"

const navLinkKeys = [
  { label: "home", path: "/" },
  { label: "studio", path: "/studio" },
  { label: "about", path: "/about" },
  { label: "journal", path: "/journal" },
  { label: "reachUs", path: "/reach-us" },
] as const

export default function Navbar() {
  const { pathname } = useLocation()
  const { t, lang, toggleLang } = useLanguage()
  const isHome = pathname === "/"

  return (
    <nav
      className={`${
        isHome ? "absolute top-0 left-0 right-0 z-50" : "relative z-50"
      } flex items-center justify-between px-8 py-6 max-w-7xl mx-auto`}
    >
      <Link
        to="/"
        className="text-3xl tracking-tight"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Velorah<sup className="text-xs">®</sup>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinkKeys.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav[link.label]}
            </Link>
          )
        })}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLang}
          className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2 py-1 rounded border border-border/30 hover:border-foreground/30"
        >
          {lang === "en" ? "中" : "EN"}
        </button>
        <Link
          to="/reach-us"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer no-underline"
        >
          {t.nav.beginJourney}
        </Link>
      </div>
    </nav>
  )
}
