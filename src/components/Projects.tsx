'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

const colorMap = {
  teal: { accent: 'var(--teal)', bg: 'rgba(0,212,184,0.06)', border: 'rgba(0,212,184,0.18)', tag: 'tag' },
  amber: { accent: 'var(--amber)', bg: 'rgba(240,165,0,0.06)', border: 'rgba(240,165,0,0.18)', tag: 'tag tag-amber' },
  violet: { accent: 'var(--violet)', bg: 'rgba(124,109,248,0.06)', border: 'rgba(124,109,248,0.18)', tag: 'tag tag-violet' },
}

function ProjectCard({ project, index }: { project: typeof data.projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[project.color]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const featured = project.featured

  return (
    <div ref={ref} className="card" style={{
      padding: featured ? 30 : 24,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(26px)',
      transition: `opacity 0.7s ease ${index * 0.09}s, transform 0.7s ease ${index * 0.09}s`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Accent top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${c.accent}, transparent)`, opacity: 0.55,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, gap: 10 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 7 }}>
            <span style={{ fontSize: featured ? '1.4rem' : '1.15rem' }}>{project.icon}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: c.accent,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '2px 7px', background: c.bg, border: `1px solid ${c.border}`, borderRadius: 4,
            }}>
              {featured ? 'Featured' : 'Project'}
            </span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: featured ? '1.2rem' : '1rem',
            color: 'var(--white)', lineHeight: 1.3,
          }}>{project.title}</h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', marginTop: 3, letterSpacing: '0.05em' }}>
            {project.subtitle}
          </div>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 34, height: 34, borderRadius: 7,
          border: '1px solid var(--border)', background: 'var(--elevated)',
          color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem', flexShrink: 0,
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = c.accent; (e.currentTarget as HTMLElement).style.color = c.accent }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}
          title="View on GitHub"
        >↗</a>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: '#7878a0', lineHeight: 1.78, marginBottom: 18 }}>
        {project.description}
      </p>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 9 }}>
          Key Outcomes
        </div>
        {project.outcomes.map((o, i) => (
          <div key={i} style={{ display: 'flex', gap: 9, marginBottom: 6, alignItems: 'flex-start' }}>
            <span style={{ color: c.accent, flexShrink: 0, marginTop: 2, fontSize: '0.7rem' }}>→</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--soft)', lineHeight: 1.55 }}>{o}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {project.tags.map(t => <span key={t} className={c.tag} style={{ fontSize: '0.62rem' }}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
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

  const featured = data.projects.filter(p => p.featured)
  const others = data.projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', background: 'var(--canvas)' }}>
      <div className="blob-teal" style={{ width: 460, height: 460, top: 0, right: -180 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={headRef} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 52,
          opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }} className="proj-header">
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Featured Work</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--white)',
            }}>
              Projects that<br /><span className="grad-teal">moved metrics.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }} className="proj-meta">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.12em' }}>
              {data.projects.length} PROJECTS
            </div>
            <a href={data.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--teal)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              github.com/preethamreddymatta →
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 18 }} className="featured-grid">
          {featured.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>

        {others.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
            {others.map((p, i) => <ProjectCard key={p.title} project={p} index={i + featured.length} />)}
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:1024px){.featured-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.featured-grid{grid-template-columns:1fr!important;} .proj-header{flex-direction:column;align-items:flex-start!important;gap:16px;} .proj-meta{text-align:left!important;}}
      `}</style>
    </section>
  )
}
