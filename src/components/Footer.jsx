import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Camera, MessageCircle, Briefcase, Heart, Phone, Mail, Copy, Check } from 'lucide-react'
import logoEscura from '../assets/img/logoescura.png'
import { toast } from 'sonner'

const BRAND = '#7B9469'
const AMBER = '#FFA001'

const BENEFITS = ['ofertas', 'conteúdos', 'utilidades', 'hacks', 'vouchers', 'notícias']

const COUPONS = [
  { label: 'Saúde',         code: 'CURADOABEM',   ig: 'https://www.instagram.com/curadoabem',   path: '/saude',         color: '#7EEAEA' },
  { label: 'Equoterapia',   code: 'POWERDOABEM',  ig: 'https://www.instagram.com/powerdoabem',  path: '/equoterapia',   color: '#FCD34D' },
  { label: 'Esporte',       code: 'ULTRADOABEM',  ig: 'https://www.instagram.com/ultradoabem',  path: '/esporte',       color: '#93C5FD' },
  { label: 'Meio Ambiente', code: 'VERDEDOABEM',  ig: 'https://www.instagram.com/verdedoabem',  path: '/meio-ambiente', color: '#86EFAC' },
]

function IgIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CouponChip({ code, ig, label, color }) {
  const [copied, setCopied] = useState(false)

  const copy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success(`Cupom ${code} copiado!`, { description: 'Compartilhe com seus amigos.' })
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Label */}
      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
        {label}
      </span>

      {/* Coupon row */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={copy}
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-lg px-3 py-1.5 transition-all duration-200 active:scale-95 group"
          title="Clique para copiar"
        >
          <span className="font-black text-xs tracking-widest text-white font-mono">{code}</span>
          <span className="text-white/60 group-hover:text-white transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          </span>
        </button>

        {ig && (
          <a
            href={ig}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: '#FFA001' }}
            title={`Seguir no Instagram`}
          >
            <IgIcon size={14} />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Footer() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  return (
    <footer style={{ backgroundColor: '#98B689', color: '#101828' }}>

      {/* ── GLOBAL COUPON STRIP ── */}
      <div style={{ backgroundColor: BRAND }} className="border-b border-white/10 w-full">
        <div className="w-full px-6 sm:px-10 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6">

            {/* Left: label + benefits */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <p className="text-white font-extrabold text-sm whitespace-nowrap">🎟 Cupons Exclusivos</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {BENEFITS.map(b => (
                  <span key={b} className="bg-white/15 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Coupon chips — always one row */}
            <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
              {COUPONS.map(c => (
                <CouponChip key={c.code} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#101828' }}>
                2<span style={{ color: AMBER }}>Doe</span>4
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#101828' }}>
              Um ecossistema que conecta pessoas a projetos sociais reais — com impacto que você pode ver e vantagens que vai sentir.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/2doe4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: '#FFA001', color: '#fff' }}
              >
                <IgIcon size={16} />
              </a>
              {[
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5514988388888' },
                { icon: Briefcase,     label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                  style={{ color: '#101828' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Projetos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#101828' }}>Projetos</p>
            <div className="flex flex-col gap-2.5">
              {COUPONS.map(({ path, label }) => (
                <Link key={path} to={path} className="text-sm transition-colors hover:opacity-70" style={{ color: '#101828' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecossistema */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#101828' }}>Ecossistema</p>
            <div className="flex flex-col gap-2.5">
              {['DoaBem', 'GPTDoaBem', 'bao2.com.br', 'FotoDoaBem'].map(item => (
                <a key={item} href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: '#101828' }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#101828' }}>Links</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Vantagens',     action: () => scrollTo('vantagens') },
                { label: 'Seja Parceiro', action: () => scrollTo('parceiros') },
                { label: 'Cadastrar-se',  action: () => scrollTo('cadastro') },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="text-sm transition-colors text-left hover:opacity-70"
                  style={{ color: '#101828' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#101828' }}>Contato</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+5514988388888" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity" style={{ color: '#101828' }}>
                <Phone className="w-4 h-4 shrink-0" />
                (14) 98838-8888
              </a>
              <a href="mailto:contato@2doe4.com.br" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity" style={{ color: '#101828' }}>
                <Mail className="w-4 h-4 shrink-0" />
                contato@2doe4.com.br
              </a>
              <a href="mailto:qg@2doe4.com.br" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity" style={{ color: '#101828' }}>
                <Mail className="w-4 h-4 shrink-0" />
                qg@2doe4.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#101828' }}>
            © 2025 2Doe4. Feito com <Heart className="w-3 h-3 fill-current" style={{ color: '#e74c3c' }} /> para o Brasil.
          </p>
          <div className="flex items-center gap-6">
            {['Privacidade', 'Termos de uso', 'LGPD'].map(item => (
              <a key={item} href="#" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#101828' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
