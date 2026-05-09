'use client'
import { useState, useEffect } from 'react'
import { data } from '@/lib/data'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.4s, border-color 0.4s',
      background: scrolled ? 'rgba(6,6,15,0.9)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
    }}>
      <a href="#hero" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
        color: 'var(--teal)', textDecoration: 'none', letterSpacing: '0.06em',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          width: 30, height: 30, borderRadius: 7,
          background: 'linear-gradient(135deg, var(--teal), var(--teal-dim))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#060610', fontWeight: 700, fontSize: '0.68rem',
          fontFamily: 'var(--font-display)',
        }}>PR</span>
        <span style={{ color: 'var(--soft)' }}>preetham<span style={{ color: 'var(--teal)' }}>.dev</span></span>
      </a>

      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
        {navItems.map(item => (
          <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
        ))}
        <a href={`mailto:${data.email}`} className="btn-primary" style={{ padding: '7px 16px', fontSize: '0.72rem' }}>
          Hire Me
        </a>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 6,
          padding: '6px 10px', color: 'var(--soft)', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        }}
        className="nav-mobile-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0,
          background: 'var(--canvas)', borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column',
          gap: 16, zIndex: 99,
        }}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="nav-link"
              style={{ fontSize: '0.9rem', padding: '8px 0' }}
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .nav-desktop{display:flex!important;} .nav-mobile-btn{display:none!important;} }
        @media (max-width: 767px) { .nav-desktop{display:none!important;} .nav-mobile-btn{display:block!important;} }
      `}</style>
    </nav>
  )
}
