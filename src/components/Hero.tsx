'use client'
import { useEffect, useState } from 'react'
import { data } from '@/lib/data'

const chartData = [
  { label: 'Jan', val: 38 }, { label: 'Feb', val: 52 }, { label: 'Mar', val: 47 },
  { label: 'Apr', val: 68 }, { label: 'May', val: 60 }, { label: 'Jun', val: 77 },
  { label: 'Jul', val: 71 }, { label: 'Aug', val: 84 }, { label: 'Sep', val: 80 },
  { label: 'Oct', val: 92 }, { label: 'Nov', val: 87 }, { label: 'Dec', val: 97 },
]

function MiniChart() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 700); return () => clearTimeout(t) }, [])
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 20, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', color: 'var(--muted)', letterSpacing: '0.12em' }}>
          RETENTION_SCORE // LIVE
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 6px var(--teal)', animation: 'pulseGlow 2s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--teal)' }}>active</span>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 72 }}>
        {chartData.map((d, i) => (
          <div key={d.label} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{
              width: '100%',
              height: visible ? `${d.val}%` : '0%',
              background: i >= 9 ? 'linear-gradient(180deg, var(--teal), var(--teal-dim))' : 'rgba(0,212,184,0.14)',
              borderRadius: '2px 2px 0 0',
              transition: `height 0.9s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 55}ms`,
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 5 }}>
        {chartData.filter((_, i) => i % 3 === 0).map(d => (
          <span key={d.label} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--muted)' }}>{d.label}</span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
        {[{ l: 'ACCURACY', v: '97.3%', c: 'var(--teal)' }, { l: 'CHURN ↓', v: '−5%', c: 'var(--amber)' }, { l: 'RETENTION ↑', v: '+10%', c: 'var(--teal)' }].map(m => (
          <div key={m.l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>{m.l}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: m.c, fontWeight: 700, marginTop: 2 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ value, label, sub, delay }: { value: string; label: string; sub: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t) }, [delay])
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800 }} className="grad-teal">{value}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--muted)', marginTop: 3, lineHeight: 1.4 }}>{sub}</div>
    </div>
  )
}

export default function Hero() {
  const [t1, setT1] = useState(false)
  const [t2, setT2] = useState(false)

  useEffect(() => {
    setTimeout(() => setT1(true), 150)
    setTimeout(() => setT2(true), 550)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', paddingTop: 80,
    }}>
      <div className="blob-teal" style={{ width: 520, height: 520, top: -80, right: -80 }} />
      <div className="blob-amber" style={{ width: 380, height: 380, bottom: 40, left: -120 }} />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.55 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)', gap: 60, alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 14px', borderRadius: 99,
              border: '1px solid rgba(0,212,184,0.2)', background: 'rgba(0,212,184,0.05)',
              marginBottom: 26,
              opacity: t1 ? 1 : 0, transform: t1 ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', animation: 'pulseGlow 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--teal)', letterSpacing: '0.1em' }}>
                DATA SCIENTIST INTERN · BOLT
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', lineHeight: 1.04,
              letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: 22,
              opacity: t1 ? 1 : 0, transform: t1 ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s',
            }}>
              Signal in.<br />
              <span className="grad-teal text-glow">Decisions out.</span>
            </h1>

            {/* Sub */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--soft)',
              lineHeight: 1.75, maxWidth: 460, marginBottom: 34,
              opacity: t2 ? 1 : 0, transform: t2 ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
              Data Scientist Intern at Bolt. I build ML systems that reduce churn, sharpen forecasts, and turn noisy data into competitive advantage.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52,
              opacity: t2 ? 1 : 0, transform: t2 ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}>
              <a href="#projects" className="btn-primary">View My Work <span>→</span></a>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn ↗</a>
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub ↗</a>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="stats-grid">
              {data.stats.map((s, i) => <StatCard key={s.label} {...s} delay={720 + i * 100} />)}
            </div>
          </div>

          {/* Right — chart */}
          <div style={{
            opacity: t2 ? 1 : 0, transform: t2 ? 'translateX(0)' : 'translateX(28px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }} className="hero-visual">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -18, right: -18, width: 70, height: 70,
                borderRadius: '50%', border: '1px solid rgba(0,212,184,0.12)',
              }} />
              <div style={{
                position: 'absolute', bottom: -12, left: -12, width: 44, height: 44,
                borderRadius: '50%', border: '1px solid rgba(240,165,0,0.12)',
              }} />
              <MiniChart />
              <div style={{
                marginTop: 12, background: 'var(--surface)',
                border: '1px solid var(--border)', borderRadius: 10,
                padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', marginBottom: 3 }}>ACTIVE MODEL</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--bright)' }}>Prophet Forecasting Pipeline</div>
                </div>
                <div style={{
                  padding: '3px 9px', borderRadius: 5,
                  background: 'rgba(0,212,184,0.09)', border: '1px solid rgba(0,212,184,0.18)',
                  fontFamily: 'var(--font-mono)', fontSize: '0.63rem', color: 'var(--teal)',
                }}>MAPE −24%</div>
              </div>
              <div style={{ marginTop: 8, display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {['Python', 'MLflow', 'SageMaker', 'XGBoost', 'HDBSCAN'].map(t => (
                  <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '0.18em' }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(180deg, var(--muted), transparent)' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
