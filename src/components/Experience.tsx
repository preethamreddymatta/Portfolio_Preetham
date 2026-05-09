'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

const colorMap = {
  teal: { accent: 'var(--teal)', bg: 'rgba(0,212,184,0.06)', border: 'rgba(0,212,184,0.16)' },
  amber: { accent: 'var(--amber)', bg: 'rgba(240,165,0,0.06)', border: 'rgba(240,165,0,0.16)' },
  violet: { accent: 'var(--violet)', bg: 'rgba(124,109,248,0.06)', border: 'rgba(124,109,248,0.16)' },
}

function ExpItem({ exp, index }: { exp: typeof data.experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[exp.color]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      display: 'grid', gridTemplateColumns: '150px 1fr', gap: 36, paddingBottom: 44,
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
    }} className="exp-item">

      {/* Meta */}
      <div style={{ paddingTop: 3 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', lineHeight: 1.6 }}>{exp.period}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', marginTop: 3 }}>{exp.location}</div>
        <div style={{
          display: 'inline-block', marginTop: 7,
          padding: '2px 7px', borderRadius: 4,
          background: c.bg, border: `1px solid ${c.border}`,
          fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: c.accent, letterSpacing: '0.08em',
        }}>{exp.type}</div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', paddingLeft: 26, borderLeft: `1px solid ${c.border}` }}>
        <div style={{
          position: 'absolute', left: -5, top: 9, width: 9, height: 9,
          borderRadius: '50%', background: c.accent, boxShadow: `0 0 8px ${c.accent}`,
        }} />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: c.accent, fontWeight: 500, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 3 }}>
          {exp.company}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700,
          color: 'var(--white)', marginBottom: 14, lineHeight: 1.25,
        }}>{exp.role}</h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: c.accent, flexShrink: 0, marginTop: 4, fontSize: '0.65rem' }}>▸</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: '#7878a0', lineHeight: 1.72 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const headRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadVisible(true) },
      { threshold: 0.1 }
    )
    if (headRef.current) observer.observe(headRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
      <div className="blob-amber" style={{ width: 380, height: 380, bottom: 0, right: -80 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={headRef} style={{
          marginBottom: 60,
          opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Experience</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--white)',
          }}>
            Where I've shipped<br /><span className="grad-amber">real impact.</span>
          </h2>
        </div>

        <div style={{ maxWidth: 760 }}>
          {data.experience.map((exp, i) => (
            <ExpItem key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`@media(max-width:640px){.exp-item{grid-template-columns:1fr!important;gap:8px!important;}}`}</style>
    </section>
  )
}
