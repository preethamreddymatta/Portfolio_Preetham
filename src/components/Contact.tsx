'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

export default function Contact() {
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
    <section id="contact" ref={ref} style={{
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
      <div className="blob-teal" style={{ width: 480, height: 480, top: -80, left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(22px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 18 }}>Contact</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: 18,
          }}>
            Let's build something<br /><span className="grad-teal text-glow">worth measuring.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.97rem', color: '#7878a0',
            lineHeight: 1.75, maxWidth: 440, margin: '0 auto 40px',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}>
            Open to full-time Data Scientist roles. If you need rigorous ML, sharp statistical thinking, and a bias toward measurable impact — let's talk.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52,
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}>
            <a href={`mailto:${data.email}`} className="btn-primary" style={{ fontSize: '0.83rem', padding: '13px 30px' }}>
              Send Me an Email
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.83rem', padding: '12px 28px' }}>
              LinkedIn ↗
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.83rem', padding: '12px 28px' }}>
              GitHub ↗
            </a>
          </div>

          {/* Info row */}
          <div style={{
            display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap',
            paddingTop: 28, borderTop: '1px solid var(--border)',
            opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.4s',
          }}>
            <a href={`mailto:${data.email}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--teal)', fontSize: '0.82rem' }}>✉</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--soft)' }}>{data.email}</span>
            </a>
            <a href={`tel:${data.phone}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--teal)', fontSize: '0.82rem' }}>☎</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--soft)' }}>{data.phone}</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--teal)', fontSize: '0.82rem' }}>◎</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--soft)' }}>{data.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 1200, margin: '60px auto 0', padding: '20px 0 0',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} {data.name}
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            LinkedIn
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            GitHub
          </a>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>
            Data Scientist · Cleveland, OH
          </div>
        </div>
      </div>
    </section>
  )
}
