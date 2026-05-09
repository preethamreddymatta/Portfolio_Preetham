'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

export default function About() {
  const ref = useRef<HTMLElement>(null)
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
    <section id="about" ref={ref} style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-violet" style={{ width: 420, height: 420, top: 0, left: -180 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <div className="section-label" style={{ marginBottom: 18 }}>About</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em',
              color: 'var(--white)', marginBottom: 30,
            }}>
              From raw data to<br /><span className="grad-amber">real outcomes.</span>
            </h2>

            {data.about.map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.97rem', color: '#7878a0',
                lineHeight: 1.82, marginBottom: i < data.about.length - 1 ? 16 : 0,
                opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}>{para}</p>
            ))}

            {/* Education */}
            <div style={{ marginTop: 40 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Education</div>
              {data.education.map((e, i) => (
                <div key={i} style={{
                  padding: '13px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14,
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', color: 'var(--bright)', fontWeight: 500 }}>{e.school}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', marginTop: 3 }}>{e.degree}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)' }}>{e.period}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', marginTop: 2 }}>{e.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(22px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>What I Build</div>
              {[
                { icon: '📊', label: 'Predictive Models', desc: 'XGBoost, Random Forest, LSTM, Neural Networks' },
                { icon: '🔮', label: 'Demand Forecasting', desc: 'ARIMA, SARIMA, Prophet — 24% MAPE improvement' },
                { icon: '🧪', label: 'Statistical Analysis', desc: 'A/B Testing, LTV Modeling, Segmentation' },
                { icon: '🗺️', label: 'Geospatial ML', desc: 'HDBSCAN, UMAP, spatial clustering on 150K+ records' },
                { icon: '🎯', label: 'Recommendation Engines', desc: 'Hybrid cosine + kNN on 250K+ listings' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 13, padding: '10px 0',
                  borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: '0.95rem', flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'var(--bright)', fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--muted)', marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Certifications · DeepLearning.AI</div>
              {data.certifications.map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 9, padding: '8px 0',
                  borderBottom: i < data.certifications.length - 1 ? '1px solid var(--elevated)' : 'none',
                }}>
                  <span style={{ color: 'var(--teal)', marginTop: 3, flexShrink: 0, fontSize: '0.75rem' }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.77rem', color: 'var(--soft)', lineHeight: 1.5 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  )
}
