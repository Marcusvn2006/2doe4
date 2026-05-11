import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronDown } from 'lucide-react'
import { toast } from 'sonner'

const AMBER = '#FFA001'
const BRAND = '#7B9469'

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
    e.stopPropagation()
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success(`Cupom ${code} copiado!`)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 min-w-0">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} />
        <Link to={path} className="text-sm text-gray-700 font-semibold hover:text-gray-900 truncate">
          {label}
        </Link>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={copy}
          className="flex items-center gap-1.5 bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 text-gray-700 hover:text-amber-700 font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all duration-150"
        >
          {code}
          {copied
            ? <Check className="w-3 h-3 text-green-500" />
            : <Copy className="w-3 h-3" />
          }
        </button>
        <a
          href={ig}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-150"
          style={{ backgroundColor: AMBER }}
          onClick={e => e.stopPropagation()}
        >
          <IgIcon size={13} />
        </a>
      </div>
    </div>
  )
}

export default function CouponBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-[22px] right-5 z-[200]">
      {/* Toggle pill */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-full shadow-lg transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: AMBER }}
      >
        🎟 Cupons
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-gray-100" style={{ backgroundColor: BRAND }}>
              <p className="text-xs font-bold uppercase tracking-widest text-white/80">Cupons exclusivos</p>
              <p className="text-[11px] text-white/60 mt-0.5">Clique no código para copiar · Siga no Instagram</p>
            </div>
            {coupons.map(c => <CouponRow key={c.code} {...c} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
