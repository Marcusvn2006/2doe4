import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { MapPin, Users, Calendar, Handshake, ClipboardList, Check, ArrowLeft, CheckCheck, Copy, Share2 } from 'lucide-react'

function IgIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
import { cn } from '../lib/utils'

const BRAND = '#7B9469'
const AMBER = '#FFA001'

/* ─── FADE-UP ANIMATION WRAPPER ─── */
function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── ICON MAP ─── */
const rowIcons = {
  '📍': MapPin,
  '👥': Users,
  '📅': Calendar,
  '🤝': Handshake,
  '📋': ClipboardList,
  '🌱': () => <span className="text-sm">🌱</span>,
}

function InfoIcon({ emoji }) {
  const Icon = rowIcons[emoji]
  if (!Icon) return <span>{emoji}</span>
  return <Icon className="w-6 h-6" />
}

/* ─── MINI REGISTER FORM (Estilo Home Page) ─── */
function RegisterMini({ causaLabel }) {
  const [values, setValues] = useState({ nome: '', whatsapp: '', cidade: '' })
  const [errors, setErrors] = useState({})

  const set = (k, v) => setValues(p => ({ ...p, [k]: v }))

  const validate = () => {
    const e = {}
    if (!values.nome.trim()) e.nome = 'Informe seu nome'
    if (!values.whatsapp.trim()) e.whatsapp = 'Informe seu WhatsApp'
    if (!values.cidade.trim()) e.cidade = 'Informe sua cidade'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    toast.success('Inscrição realizada! 🎉', {
      description: 'Entraremos em contato pelo WhatsApp em breve.',
    })
    setValues({ nome: '', whatsapp: '', cidade: '' })
    setErrors({})
  }

  const fieldClass = (err) => cn(
    'w-full px-4 py-3.5 rounded-[0.8rem] text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 border-none bg-[#eef2e1]',
    'focus:ring-2 focus:ring-amber-500 focus:ring-offset-0',
    err ? 'ring-2 ring-red-400' : ''
  )

  return (
    <div className="bg-[#7B9469] rounded-3xl shadow-xl p-8 sm:p-10 border border-[#8AA178]">
      <h3 className="text-[22px] font-extrabold text-white mb-4">Quero participar</h3>
      <hr className="border-white/20 mb-8" />
      <form onSubmit={submit} noValidate className="space-y-5">
        {[
          { key: 'nome', type: 'text', label: 'Nome completo *', placeholder: '' },
          { key: 'whatsapp', type: 'tel', label: 'WhatsApp *', placeholder: '' },
          { key: 'cidade', type: 'text', label: 'Cidade *', placeholder: '' },
        ].map(({ key, type, label, placeholder }) => (
          <div key={key}>
            <label className="block text-[15px] font-medium text-white mb-2">{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              className={fieldClass(errors[key])}
              value={values[key]}
              onChange={e => set(key, e.target.value)}
            />
            {errors[key] && <p className="text-xs text-red-300 mt-1">{errors[key]}</p>}
          </div>
        ))}

        <div>
          <label className="block text-[15px] font-medium text-white mb-2">Projeto selecionado</label>
          <input
            type="text"
            className="w-full px-4 py-3.5 rounded-[0.8rem] text-sm text-gray-500 bg-[#eef2e1] cursor-not-allowed outline-none border-none font-semibold"
            value={causaLabel}
            readOnly
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#FFA001] hover:bg-[#e69000] text-white font-bold py-4 rounded-[0.8rem] transition-all duration-200 text-base shadow-md active:scale-[0.98]"
          >
            Entrar no movimento →
          </button>
        </div>
      </form>
    </div>
  )
}

const BENEFITS = ['ofertas', 'conteúdos', 'utilidades', 'hacks', 'vouchers', 'notícias']

/* ─── COUPON BLOCK ─── */
function CouponBlock({ code, instagramUrl }) {
  const [copied, setCopied] = useState(false)
  const [igHover, setIgHover] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success('Cupom copiado! 🎉', { description: 'Compartilhe com seus amigos.' })
    setTimeout(() => setCopied(false), 2500)
  }

  const share = () => {
    const msg = `Use meu cupom *${code}* no 2Doe4 e entre no movimento! 💚\n2doe4.com.br`
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl" style={{ background: BRAND }}>

      {/* ── Instagram CTA ── */}
      {instagramUrl && (
        <div className="px-8 pt-8 pb-6 text-center border-b border-white/20">
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Canal exclusivo · Siga agora
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIgHover(true)}
            onMouseLeave={() => setIgHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '16px',
              fontWeight: 800,
              fontSize: '16px',
              color: '#fff',
              background: AMBER,
              boxShadow: igHover
                ? '0 0 0 4px rgba(255,160,1,0.3), 0 16px 40px rgba(255,160,1,0.4)'
                : '0 4px 20px rgba(255,160,1,0.25)',
              transform: igHover ? 'scale(1.04) translateY(-2px)' : 'scale(1) translateY(0)',
              transition: 'all 0.28s cubic-bezier(0.22,1,0.36,1)',
              textDecoration: 'none',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <IgIcon size={22} />
            Seguir no Instagram
          </a>

          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {BENEFITS.map(b => (
              <span key={b} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30 text-white/80">
                {b}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Cupom ── */}
      <div className="px-8 py-7">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-5 text-center">
          🎟 Seu cupom exclusivo · Clique para copiar
        </p>

        <div
          onClick={copy}
          className="group cursor-pointer rounded-2xl mb-5 transition-all duration-200 active:scale-[0.97]"
          style={{
            border: copied ? '2px solid #22c55e' : '2px dashed rgba(255,255,255,0.4)',
            background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.1)',
            padding: '28px 24px',
            textAlign: 'center',
          }}
        >
          <p className="text-4xl sm:text-5xl font-black tracking-[0.12em] uppercase font-mono transition-colors duration-200"
            style={{ color: copied ? '#22c55e' : AMBER }}>
            {code}
          </p>
          <p className="text-xs mt-3 font-semibold transition-colors duration-200"
            style={{ color: copied ? '#22c55e' : 'rgba(255,255,255,0.55)' }}>
            {copied ? '✓ Copiado com sucesso!' : 'toque para copiar'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={copy}
            className="flex-1 flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copiado!' : 'Copiar cupom'}
          </button>
          <button
            onClick={share}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm active:scale-[0.97]"
          >
            <Share2 className="w-4 h-4" />
            Enviar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── PROJECT PAGE COMPONENT ─── */
export default function ProjectPage({ config }) {
  const {
    badge,
    title,
    subtitle,
    causaLabel,
    causaValue,
    aboutTitle,
    aboutText,
    infoRows,
    helpOptions,
    impactNums,
    galleryImg,
    bannerImg,
    bannerMobileImg,
    localSponsors,
    couponCode,
    instagramUrl,
  } = config

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Separando a primeira palavra do título para destacar o resto em Amarelo
  const titleWords = title.split(' ')
  const firstWord = titleWords[0]
  const restOfTitle = titleWords.slice(1).join(' ')

  return (
    <main className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section
        className="relative flex items-start sm:items-center bg-cover bg-center bg-no-repeat"
        style={{
          minHeight: '90vh',
          backgroundImage: (isMobile && bannerMobileImg)
            ? `url(${bannerMobileImg})`
            : bannerImg ? `url(${bannerImg})` : undefined,
          backgroundColor: '#fafafa',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 w-full pt-20 sm:pt-32 pb-16">
          <FadeUp>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-semibold mb-6 transition-colors hover:opacity-80"
              style={{ color: BRAND }}
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para o Início
            </Link>
          </FadeUp>

          <div className="max-w-[320px] sm:max-w-sm lg:max-w-md">
            <FadeUp delay={0.05}>
              <span className="inline-block text-sm font-medium mb-3 text-center sm:text-left w-full" style={{ color: AMBER }}>
                {badge}
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-4 text-center sm:text-left">
                {firstWord} <br />
                <span style={{ color: AMBER }}>{restOfTitle}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium text-center sm:text-left">
                {subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href="#formulario"
                  className="inline-flex items-center justify-center text-white font-bold px-8 py-4 rounded-[0.8rem] text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: AMBER, boxShadow: `0 8px 24px ${AMBER}50` }}
                >
                  Quero participar
                </a>
                <a
                  href="#cupom"
                  className="inline-flex items-center gap-2 border-2 text-sm font-bold px-7 py-4 rounded-[0.8rem] transition-all duration-200 bg-white/70 hover:bg-white"
                  style={{ borderColor: BRAND, color: BRAND }}
                >
                  <IgIcon size={15} />
                  Canal exclusivo
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── SOBRE & FICHA DO PROJETO ─── */}
      <section className="py-24 sm:py-32 bg-white" id="sobre-projeto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-center">

            <div className="lg:pr-8">
              <FadeUp delay={0.05}>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  {aboutTitle}
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  {aboutText}
                </p>
              </FadeUp>

              <div className="space-y-4 mb-8">
                {impactNums.map((impact, i) => (
                  <FadeUp key={i} delay={0.15 + i * 0.05}>
                    <div className="flex items-center gap-3">
                      <CheckCheck className="w-5 h-5 shrink-0" strokeWidth={2.5} style={{ color: AMBER }} />
                      <span className="text-gray-700 font-bold text-[15px]">
                        <span style={{ color: BRAND }} className="text-lg mr-1">{impact.num}</span>
                        {impact.label}
                      </span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{ background: AMBER, color: '#fff' }}
                    >
                      <IgIcon size={15} /> Canal exclusivo
                    </a>
                  )}
                  <a
                    href="#cupom"
                    className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-[#dde8cc] active:scale-95"
                    style={{ background: '#eef2e1', color: BRAND, border: `1px solid ${BRAND}40` }}
                  >
                    🎟 Ver cupom exclusivo
                  </a>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2} className="w-full">
              <div className="bg-[#7B9469] rounded-3xl shadow-xl p-8 sm:p-10 border border-[#8AA178]">
                <h3 className="text-[22px] font-extrabold text-white mb-4">Ficha do Projeto</h3>
                <hr className="border-white/20 mb-8" />

                <div className="space-y-6">
                  {infoRows.map((row, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-[0.8rem] bg-[#FFA001] flex items-center justify-center shrink-0 shadow-sm mt-0.5 text-white">
                        <InfoIcon emoji={row.icon} />
                      </div>
                      <div>
                        <div className="block text-[13px] font-bold text-white/80 mb-1 uppercase tracking-wider">
                          {row.label}
                        </div>
                        <div className="text-white font-medium text-base">
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ─── COMO AJUDAR (Áreas de Atuação) ─── */}
      <section className="py-24 sm:py-32 bg-[#fafafa]" id="como-ajudar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="inline-block text-sm sm:text-base font-medium text-amber-500 mb-3">
                Como você pode ajudar
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Encontre sua forma de contribuir
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-lg">
                Há espaço para todo perfil de voluntário neste projeto.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {helpOptions.map((option, i) => (
              <FadeUp key={i} delay={i * 0.1} className="h-full">
                <div className="bg-[#eef2e1] rounded-[2rem] p-8 shadow-sm h-full flex flex-col border border-gray-100/50">
                  <div className="bg-[#FFD699] text-amber-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 font-medium">
                    {option.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA para canal Instagram + cupom */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl p-6 sm:p-8" style={{ background: BRAND }}>
              <div className="text-center sm:text-left">
                <p className="text-white font-extrabold text-base sm:text-lg">Siga o canal exclusivo e pegue seu cupom</p>
                <p className="text-white/60 text-sm mt-1">Ofertas, hacks, conteúdos e vouchers toda semana.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{ background: AMBER, color: '#fff' }}
                  >
                    <IgIcon size={15} /> Instagram
                  </a>
                )}
                <a
                  href="#cupom"
                  className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
                >
                  🎟 Ver cupom
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── GALLERY & LOCAL SPONSORS ─── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Parceiros Locais */}
            <div>
              <FadeUp>
                <span className="inline-block text-sm sm:text-base font-medium text-amber-500 mb-3">
                  Apoio Local
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  Quem faz acontecer
                </h2>
                <p className="text-gray-500 text-lg mb-8 font-medium">
                  Estes parceiros fortalecem a base do projeto, garantindo que o impacto chegue a quem precisa.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {localSponsors.map((s, i) => (
                    <div
                      key={i}
                      className="bg-[#fafafa] border border-gray-200 text-gray-700 font-bold px-5 py-3 rounded-xl shadow-sm text-sm"
                    >
                      {s}
                    </div>
                  ))}
                  <a
                    href="#formulario"
                    className="border-2 border-dashed font-bold px-5 py-3 rounded-xl transition-all hover:bg-[#eef2e1] text-sm"
                    style={{ borderColor: BRAND, color: BRAND }}
                  >
                    + Seja parceiro
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{ background: AMBER, color: '#fff' }}
                    >
                      <IgIcon size={15} /> Canal exclusivo
                    </a>
                  )}
                  <a
                    href="#cupom"
                    className="inline-flex items-center gap-2 font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-[#dde8cc] active:scale-95"
                    style={{ background: '#eef2e1', color: BRAND, border: `1px solid ${BRAND}40` }}
                  >
                    🎟 Cupom exclusivo
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Galeria */}
            <FadeUp>
              <div
                className="rounded-2xl shadow-sm border border-[#8AA178]/20"
                style={{
                  aspectRatio: '3/2',
                  backgroundImage: `url(${galleryImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ─── CUPOM & VOLUNTARIADO DIGITAL ─── */}
      {couponCode && (
        <section className="py-20 sm:py-28 bg-[#eef2e1]" id="cupom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

              <div>
                <FadeUp>
                  <span className="inline-block text-sm font-semibold mb-2" style={{ color: AMBER }}>
                    Voluntariado Digital
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
                    Espalhe o<br />
                    <span style={{ color: AMBER }}>movimento.</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                    Compartilhe seu cupom exclusivo com amigos. Cada pessoa que você convida amplifica o impacto deste projeto.
                  </p>
                </FadeUp>

                <div className="space-y-4">
                  {[
                    '2 amigos + 4h/mês = Impacto mensurável',
                    'Cupom exclusivo por projeto',
                    'Transformação pessoal garantida',
                  ].map((item, i) => (
                    <FadeUp key={i} delay={0.1 + i * 0.07}>
                      <div className="flex items-center gap-3">
                        <CheckCheck className="w-5 h-5 shrink-0" strokeWidth={2.5} style={{ color: AMBER }} />
                        <span className="text-gray-700 font-semibold text-[15px]">{item}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

              <FadeUp delay={0.15}>
                <CouponBlock code={couponCode} instagramUrl={instagramUrl} />
              </FadeUp>

            </div>
          </div>
        </section>
      )}

      {/* ─── FORMULÁRIO FINAL ─── */}
      <section className="py-24 sm:py-32 bg-[#fafafa]" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-center">

            <div>
              <FadeUp>
                <span className="inline-block text-sm sm:text-base font-medium text-amber-500 mb-3">
                  Participe
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  Sua ação começa aqui.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                  Preencha o formulário e entraremos em contato para alinhar como suas habilidades farão a diferença.
                </p>
              </FadeUp>

              <div className="space-y-4 mb-8">
                {[
                  'Cadastro 100% gratuito',
                  'Você define sua disponibilidade de tempo',
                  'Receba certificado oficial após a ação',
                ].map((p, i) => (
                  <FadeUp key={i} delay={0.15 + i * 0.05}>
                    <div className="flex items-center gap-3">
                      <CheckCheck className="w-5 h-5 shrink-0" strokeWidth={2.5} style={{ color: AMBER }} />
                      <span className="text-gray-700 font-bold text-[15px]">{p}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.35}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/gptdoabem?igsh=MXF3eG80MnhvN2JycQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-bold px-6 py-3.5 rounded-xl text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md"
                    style={{ backgroundColor: AMBER }}
                  >
                    <IgIcon size={16} />
                    Seguir @gptdoabem
                  </a>
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{ background: BRAND, color: '#fff' }}
                    >
                      <IgIcon size={16} />
                      Canal exclusivo
                    </a>
                  )}
                  <a
                    href="#cupom"
                    className="inline-flex items-center gap-2.5 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-[#dde8cc] active:scale-95"
                    style={{ background: '#eef2e1', color: BRAND, border: `1px solid ${BRAND}40` }}
                  >
                    🎟 Ver cupom
                  </a>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <RegisterMini causaLabel={causaLabel} causaValue={causaValue} />
            </FadeUp>

          </div>
        </div>
      </section>

    </main>
  )
}