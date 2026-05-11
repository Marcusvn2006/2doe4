import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Copy, Check } from 'lucide-react'
import { cn } from '../lib/utils'
import { toast } from 'sonner'

const BRAND = '#7B9469'
const AMBER = '#FFA001'

const projects = [
  { label: 'Saúde',          path: '/saude',          color: '#0D9488' },
  { label: 'Equoterapia',    path: '/equoterapia',    color: '#D97706' },
  { label: 'Esporte',        path: '/esporte',        color: '#2563EB' },
  { label: 'Meio Ambiente',  path: '/meio-ambiente',  color: '#166534' },
]

const coupons = [
  { label: 'Saúde',         code: 'CURADOABEM',  ig: 'https://www.instagram.com/curadoabem',  path: '/saude',         dot: '#0D9488' },
  { label: 'Equoterapia',   code: 'POWERDOABEM', ig: 'https://www.instagram.com/powerdoabem', path: '/equoterapia',   dot: '#D97706' },
  { label: 'Esporte',       code: 'ULTRADOABEM', ig: 'https://www.instagram.com/ultradoabem', path: '/esporte',       dot: '#2563EB' },
  { label: 'Meio Ambiente', code: 'VERDEDOABEM', ig: 'https://www.instagram.com/verdedoabem', path: '/meio-ambiente', dot: '#166534' },
]

function IgIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CouponRow({ label, code, ig, path, dot }) {
  const [copied, setCopied] = useState(false)
  const copy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success(`Cupom ${code} copiado!`)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 min-w-0">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} />
        <Link to={path} className="text-sm text-gray-700 font-medium hover:text-gray-900 truncate">{label}</Link>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={copy}
          className="flex items-center gap-1 bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 text-gray-700 hover:text-amber-700 font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all duration-150"
        >
          {code}
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
        </button>
        <a
          href={ig}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: AMBER }}
        >
          <IgIcon size={13} />
        </a>
      </div>
    </div>
  )
}

const HOME_NAV = [
  { label: 'Ecossistema',   hash: 'ecossistema' },
  { label: 'Como Funciona', hash: 'como-funciona' },
  { label: 'Vantagens',     hash: 'vantagens' },
  { label: 'Seja Parceiro', hash: 'parceiros' },
]

const PROJECT_NAV = [
  { label: 'Sobre',       hash: 'sobre-projeto' },
  { label: 'Como Ajudar', hash: 'como-ajudar'   },
  { label: 'Cupom',       hash: 'cupom'          },
  { label: 'Participar',  hash: 'formulario'     },
]

const PROJECT_PATHS = ['/saude', '/equoterapia', '/esporte', '/meio-ambiente']

function CouponsDropdown() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1.5 text-white text-[15px] font-semibold transition-colors px-2 hover:text-white/80"
      >
        <span>🎟</span>
        Cupons
        <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 pt-3 w-80"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Cupons exclusivos</p>
                <p className="text-[11px] text-gray-400 mt-0.5">Clique no código para copiar</p>
              </div>
              {coupons.map(c => <CouponRow key={c.code} {...c} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [dropdownOpen,  setDropdownOpen]  = useState(false)
  const navigate   = useNavigate()
  const location   = useLocation()

  const isProject  = PROJECT_PATHS.includes(location.pathname)
  const navLinks   = isProject ? PROJECT_NAV : HOME_NAV

  // Scroll to hash after navigation
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (hash) => {
    const el = document.getElementById(hash)
    if (el) {
      window.history.pushState({}, '', `${location.pathname}#${hash}`)
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Cross-page: go to home with hash
      navigate(`/home#${hash}`)
    }
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const navBtn = 'text-white hover:text-white/80 text-[15px] font-semibold transition-colors px-2 whitespace-nowrap'

  return (
    <>
      {/* ── FIXED PILL HEADER ── */}
      <header className="absolute top-0 inset-x-0 z-50 flex justify-center px-4 pt-5">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between w-full max-w-5xl px-3 py-4 rounded-full shadow-xl shadow-black/15 overflow-visible"
          style={{ background: BRAND }}
        >
          {/* Logo */}
          <Link to="/home" className="pl-5 shrink-0 flex items-center">
            <span className="text-white font-extrabold text-2xl tracking-tight">
              2<span style={{ color: '#FFA001' }}>Doe</span>4
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end pr-4">

            {/* Projects dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={cn(navBtn, 'flex items-center gap-1')}>
                Projetos
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', dropdownOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {projects.map(p => (
                        <Link
                          key={p.path}
                          to={p.path}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color }} />
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Context-aware nav links */}
            {navLinks.map(link => (
              <button
                key={link.hash}
                className={navBtn}
                onClick={() => scrollTo(link.hash)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: BRAND }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col h-full px-6 pt-24 pb-8 overflow-y-auto"
            >
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Projetos</p>
              {projects.map((p, i) => (
                <motion.div
                  key={p.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={p.path}
                    className="flex items-center gap-3 py-3 text-white/80 hover:text-white text-sm border-b border-white/10 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color }} />
                    {p.label}
                  </Link>
                </motion.div>
              ))}

              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-6 mb-3">
                {isProject ? 'Nesta página' : 'Navegação'}
              </p>
              <div className="space-y-1">
                {navLinks.map((item, i) => (
                  <motion.button
                    key={item.hash}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06 }}
                    onClick={() => scrollTo(item.hash)}
                    className="w-full text-left py-3 text-white font-medium text-base hover:text-white/70 transition-colors border-b border-white/10"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <button
                  onClick={() => scrollTo('formulario')}
                  className="w-full font-semibold py-4 rounded-2xl text-base transition-colors"
                  style={{ background: 'white', color: BRAND }}
                >
                  Quero participar →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
