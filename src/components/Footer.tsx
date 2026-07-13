import { Link } from "react-router-dom"
import { useLanguage } from "../i18n/context"

const footerNavKeys = [
  { label: "studio", path: "/studio" },
  { label: "about", path: "/about" },
  { label: "journal", path: "/journal" },
  { label: "reachUs", path: "/reach-us" },
] as const

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-2xl tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-[10px]">®</sup>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t.footer.navigate}</h4>
            <ul className="space-y-2.5">
              {footerNavKeys.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.nav[link.label]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t.footer.connect}</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t.footer.contact}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.email}
              <br />
              {t.footer.location}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Velorah. {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
