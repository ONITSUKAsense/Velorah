// Deterministic gradient & pattern from a string seed
function hashStr(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

const palettes = [
  ["#1a1a2e", "#16213e", "#0f3460"],
  ["#2d1b2e", "#4a2c3d", "#6b3f5a"],
  ["#1b2a2e", "#1a3a3a", "#1e4d4d"],
  ["#2e1a1a", "#3e1f1f", "#5a2e2e"],
  ["#1e1b2e", "#2a1e3e", "#3d2a5a"],
  ["#1a2e1a", "#1e3a1e", "#2a4d2a"],
]

const patterns = [
  "radial-gradient(circle at 30% 40%, var(--c1), transparent 70%)",
  "radial-gradient(circle at 70% 60%, var(--c2), transparent 60%)",
  "radial-gradient(circle at 50% 50%, var(--c3), transparent 80%)",
  "linear-gradient(135deg, var(--c1) 0%, var(--c2) 50%, var(--c3) 100%)",
]

export function GradientPlaceholder({ title, className = "" }: { title: string; className?: string }) {
  const h = hashStr(title)
  const palette = palettes[h % palettes.length]
  const bg = `
    ${patterns[h % patterns.length].replace("--c1", palette[0]).replace("--c2", palette[1]).replace("--c3", palette[2])},
    ${patterns[(h + 1) % patterns.length].replace("--c1", palette[0]).replace("--c2", palette[1]).replace("--c3", palette[2])}
  `

  return (
    <div
      className={className}
      style={{ background: bg }}
    />
  )
}
