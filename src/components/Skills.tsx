'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

function SkillGroup({ category, skills, index }: { category: string; skills: typeof data.skills[keyof typeof data.skills]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="card" style={{
      padding: 26,
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.7s ease ${index * 0.11}s, transform 0.7s ease ${index * 0.11}s`,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--teal)',
        letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 7,
      }}>
        <span style={{ width: 14, height: 1, background: 'var(--teal)', display: 'block' }} />
        {category}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {skills.map(skill => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--soft)' }}>{skill.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" style={{
                width: visible ? `${skill.level}%` : '0%',
                transition: `width 1.3s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.1 + 0.2}s`,
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)
  const [techVisible, setTechVisible] = useState(false)

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVisible(true) }, { threshold: 0.1 })
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTechVisible(true) }, { threshold: 0.1 })
    if (headRef.current) o1.observe(headRef.current)
    if (techRef.current) o2.observe(techRef.current)
    return () => { o1.disconnect(); o2.disconnect() }
  }, [])

  const allTech = [
    'Python', 'SQL', 'R', 'Java', 'XGBoost', 'Prophet', 'ARIMA', 'SARIMA', 'HDBSCAN', 'UMAP',
    'LSTM', 'Neural Networks', 'TF-IDF', 'Scikit-learn', 'MLflow', 'AWS SageMaker', 'Docker',
    'FastAPI', 'Snowflake', 'Redshift', 'Tableau', 'Power BI', 'Pandas', 'NumPy',
    'Matplotlib', 'Seaborn', 'Linux', 'Git', 'CI/CD', 'REST APIs',
  ]

  return (
    <section id="skills" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', background: 'var(--canvas)' }}>
      <div className="blob-teal" style={{ width: 420, height: 420, top: -80, left: -80 }} />
      <div className="blob-violet" style={{ width: 380, height: 380, bottom: -80, right: -80 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={headRef} style={{
          marginBottom: 52,
          opacity: headVisible ? 1 : 0, transform: headVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Skills</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--white)',
          }}>
            The full ML<br /><span className="grad-teal">stack.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginBottom: 18 }} className="skills-grid">
          {Object.entries(data.skills).map(([cat, skills], i) => (
            <SkillGroup key={cat} category={cat} skills={skills} index={i} />
          ))}
        </div>

        <div ref={techRef} style={{
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 28,
          opacity: techVisible ? 1 : 0, transform: techVisible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>
            Full Tech Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {allTech.map((t, i) => (
              <span key={t} className="tag" style={{
                fontSize: '0.68rem',
                opacity: techVisible ? 1 : 0,
                transition: `opacity 0.4s ease ${0.35 + i * 0.025}s`,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
