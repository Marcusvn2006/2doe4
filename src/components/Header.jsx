import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import logoClara from '../assets/img/logoclara.png'

const BRAND = '#7B9469'

const projects = [
  { label: 'Saúde',          path: '/saude',          color: '#0D9488' },
  { label: 'Equoterapia',    path: '/equoterapia',    color: '#D97706' },
  { label: 'Esporte',        path: '/esporte',        color: '#2563EB' },
  { label: 'Meio Ambiente',  path: '/meio-ambiente',  color: '#166534' },
]

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
          className="flex items-center justify-between w-full max-w-5xl px-3 rounded-full shadow-xl shadow-black/15 overflow-visible"
          style={{ background: BRAND }}
        >
          {/* Logo */}
          <Link to="/home" className="pl-3 shrink-0">
            <img src={logoClara} alt="2Doe4" style={{ height: '80px', width: 'auto', display: 'block' }} />
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
