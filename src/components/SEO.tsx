import { Helmet } from "react-helmet-async"

interface SEOProps {
  title?: string
  description?: string
}

const defaults = {
  title: "Velorah — Tools for deep thinkers",
  description:
    "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.",
}

export default function SEO({ title, description }: SEOProps) {
  const pageTitle = title ? `${title} — Velorah` : defaults.title
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description ?? defaults.description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description ?? defaults.description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
