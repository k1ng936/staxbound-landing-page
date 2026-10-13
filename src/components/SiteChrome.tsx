import { ArrowUpRight, Menu, Pause, Play, X } from 'lucide-react'
import { type ReactNode, useEffect, useRef, useState } from 'react'

type SiteChromeProps = {
  children: ReactNode
  contact?: boolean
}

export function Logo() {
  return (
    <span className="brand" aria-label="StaxBound">
      <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M8 10h27l-7 7H15v4h17v13H5l7-7h13v-4H8z" />
        <path className="brand-mark-accent" d="M35 10v24l-7-7V17z" />
      </svg>
      <span>Stax<span>Bound</span></span>
    </span>
  )
}

export function Header({ contact = false }: { contact?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)
  const [systemReducedMotion, setSystemReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [userPausedMotion, setUserPausedMotion] = useState(() =>
    window.localStorage.getItem('staxbound-motion') === 'paused',
  )
  const motionPaused = systemReducedMotion || userPausedMotion

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return

    const nav = navRef.current
    const toggle = navToggleRef.current
    const links = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>('a')) : []
    const focusable: HTMLElement[] = [...links, ...(toggle ? [toggle] : [])]
    const focusFrame = window.requestAnimationFrame(() => links[0]?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        window.requestAnimationFrame(() => toggle?.focus())
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!focusable.includes(document.activeElement as HTMLElement)) {
        event.preventDefault()
        const destination = event.shiftKey ? last : first
        destination.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setSystemReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('motion-paused', motionPaused)
    return () => document.body.classList.remove('motion-paused')
  }, [motionPaused])

  const base = contact ? './index.html' : ''

  const toggleMotion = () => {
    if (systemReducedMotion) return
    const next = !userPausedMotion
    setUserPausedMotion(next)
    window.localStorage.setItem('staxbound-motion', next ? 'paused' : 'playing')
    window.dispatchEvent(new Event('staxbound-motion-change'))
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="logo-link" href="./index.html" aria-label="StaxBound home">
          <Logo />
        </a>

        <nav ref={navRef} id="primary-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href={`${base}#opportunity`} onClick={() => setOpen(false)}>Opportunity</a>
          <a href={`${base}#platform`} onClick={() => setOpen(false)}>Platform</a>
          <a href={`${base}#partners`} onClick={() => setOpen(false)}>Partners</a>
          <a href={`${base}#integration`} onClick={() => setOpen(false)}>Integration</a>
          <a href={`${base}#faq`} onClick={() => setOpen(false)}>FAQ</a>
        </nav>

        <div className="header-tools">
          <button
            className="motion-toggle"
            type="button"
            onClick={toggleMotion}
            disabled={systemReducedMotion}
            aria-label={systemReducedMotion ? 'Motion disabled by system preference' : motionPaused ? 'Play animated visuals' : 'Pause animated visuals'}
            title={systemReducedMotion ? 'Motion disabled by system preference' : motionPaused ? 'Play motion' : 'Pause motion'}
          >
            {motionPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>
          <a className="header-cta" href="./contact.html">
            Partner with us <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
          <button
            ref={navToggleRef}
            className="nav-toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <a className="logo-link" href="./index.html" aria-label="StaxBound home"><Logo /></a>
        <p>A new B2B gaming vertical for the operators ready to move first.</p>
        <a className="text-link" href="mailto:Harpula.T@gmail.com">Harpula.T@gmail.com <ArrowUpRight size={15} /></a>
      </div>
      <div className="footer-bottom shell">
        <p>© {new Date().getFullYear()} StaxBound. All rights reserved.</p>
        <p>StaxBound provides B2B game technology and does not accept wagers or offer player accounts through this website. Product availability and launch are subject to applicable law, licensing, certification, technical approval, and partner requirements. Legal-age play only. Please play responsibly.</p>
      </div>
    </footer>
  )
}

export function SiteChrome({ children, contact = false }: SiteChromeProps) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header contact={contact} />
      {children}
      <Footer />
    </div>
  )
}

export function SectionTag({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-tag">
      <span>{index}</span>
      <span className="section-tag-line" />
      <span>{children}</span>
    </div>
  )
}

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark'
  className?: string
}

export function ActionLink({ href, children, variant = 'primary', className = '' }: ActionLinkProps) {
  return (
    <a className={`action-link action-${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={2.2} />
    </a>
  )
}
