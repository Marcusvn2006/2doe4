import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import logoClara from '../assets/img/logoclara.png'

const BRAND = '#7B9469'
const AMBER = '#FFA001'

const projects = [
  { label: 'Saúde',          path: '/saude-brotas',          color: '#0D9488' },
  { label: 'Equoterapia',   path: '/equoterapia-boituva',   color: '#D97706' },
  { label: 'Esporte',       path: '/esporte-jau',           color: '#2563EB' },
  { label: 'Meio Ambiente', path: '/meio-ambiente-bocaina', color: '#166534' },
]

export default function Header() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    if (!isHome) { navigate('/'); setTimeout(() => scrollTo(id), 350); return }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navBtn = 'text-white hover:text-white/90 text-[15px] font-semibold transition-colors px-2'

  return (
    <>
      {/* ── FLOATING PILL HEADER ── */}
      <header className="absolute top-0 inset-x-0 z-50 flex justify-center px-4 pt-5">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between w-full max-w-5xl px-3 py-3 rounded-full shadow-xl shadow-black/15"
          style={{ background: BRAND }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center pl-3 shrink-0">
            <img src={logoClara} alt="2Doe4" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center pr-10">
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

            <button className={navBtn} onClick={() => scrollTo('ecossistema')}>Ecossistema</button>
            <button className={navBtn} onClick={() => scrollTo('vantagens')}>Vantagens</button>
            <button className={navBtn} onClick={() => scrollTo('parceiros')}>Seja Parceiro</button>
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

              <div className="mt-6 space-y-1">
                {[
                  { label: 'Ecossistema',  id: 'ecossistema' },
                  { label: 'Vantagens',    id: 'vantagens' },
                  { label: 'Seja Parceiro', id: 'parceiros' },
                ].map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06 }}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-3 text-white font-medium text-base hover:text-white/70 transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <button
                  onClick={() => scrollTo('cadastro')}
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
