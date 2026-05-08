import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { toast } from 'sonner'
import {
  Tag, Ticket, Award, BookOpen, Globe, CheckCircle2,
  Handshake, Bot, TrendingUp, Camera,
  Megaphone, BarChart3, Building2, Link2, Volume2,
  ChevronDown, ArrowRight, Leaf, Users, MapPin,
  Star, Check, CheckCheck
} from 'lucide-react'
import { useCounter } from '../hooks/useCounter'
import { cn } from '../lib/utils'
import bannerImg from '../assets/img/banner2doe4.webp'
import bannerMobileImg from '../assets/img/banner-mobile.webp'
import projectImg from '../assets/img/imgsection.webp'
import ctaGraficoImg from '../assets/img/ctagrafico.webp'
import imgCtaEngaja from '../assets/img/imgctaengaja.webp'
import imgSaude from '../assets/img/card-saude.webp'
import imgEquoterapia from '../assets/img/Equoterapia.webp'
import imgEsporte from '../assets/img/Esporte.webp'
import imgMeioAmbiente from '../assets/img/MeioAmbiente.webp'

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

/* ─── DATA ─── */
const faqs = [
  { q: 'Preciso de experiência prévia para ser voluntário?', a: 'Não! O 2Doe4 conecta pessoas de todos os perfis e habilidades a projetos que precisam delas. Há espaço para quem quer ajudar nas atividades do dia a dia e para quem tem expertise específica.' },
  { q: 'Quanto tempo preciso dedicar?', a: 'Você decide. Há ações pontuais de um único dia e comprometimentos regulares. Na hora do cadastro você informa sua disponibilidade e a gente conecta você ao que faz sentido.' },
  { q: 'Como recebo minhas vantagens e cupons?', a: 'Após se cadastrar, você entra para a nossa comunidade e começa a receber os benefícios dos nossos parceiros diretamente pelo WhatsApp ou pelo painel do voluntário.' },
  { q: 'Posso indicar minha empresa como parceira?', a: 'Sim! Temos um programa específico para parceiros corporativos com visibilidade, relatórios de impacto e conexão com a agenda ESG. Fale com a gente.' },
  { q: 'Os projetos são verificados?', a: 'Todos os projetos do ecossistema 2Doe4 passam por validação interna. Visitamos os locais, conhecemos as equipes e acompanhamos os resultados.' },
  { q: 'Posso participar mesmo morando longe dos projetos?', a: 'Sim! Há modalidades de voluntariado remoto — produção de conteúdo, apoio digital, mentoria online — que não exigem presença física.' },
]

const projects = [
  { slug: '/saude-brotas', title: 'Saúde', desc: 'Campanhas preventivas, atendimentos comunitários e educação em saúde para quem mais precisa.', color: 'from-teal-600 to-teal-800', badge: 'bg-teal-100 text-teal-800', icon: '🏥', img: imgSaude },
  { slug: '/equoterapia-boituva', title: 'Equoterapia', desc: 'Reabilitação por meio da interação com cavalos, atendendo crianças e adultos com deficiência.', color: 'from-amber-500 to-amber-700', badge: 'bg-amber-100 text-amber-800', icon: '🐴', img: imgEquoterapia },
  { slug: '/esporte-jau', title: 'Esporte', desc: 'Inclusão social pelo esporte, formando atletas e criando oportunidades para jovens em situação de risco.', color: 'from-blue-600 to-blue-800', badge: 'bg-blue-100 text-blue-800', icon: '⚽', img: imgEsporte },
  { slug: '/meio-ambiente-bocaina', title: 'Meio Ambiente', desc: 'Reflorestamento, educação ambiental e ações sustentáveis conectadas à agenda ESG.', color: 'from-green-700 to-green-900', badge: 'bg-green-100 text-green-800', icon: '🌿', img: imgMeioAmbiente },
]

const testimonials = [
  { text: '"Nunca imaginei que ser voluntária fosse me trazer tantas oportunidades. Além de ajudar, fiz networking, ganhei cupons e ainda recebi um certificado que coloquei no meu LinkedIn."', name: 'Camila R.', role: 'Voluntária — Projeto Saúde', initials: 'CR', color: 'bg-teal-600' },
  { text: '"Participo do projeto de equoterapia há 3 meses. Ver a evolução das crianças é impossível de descrever. O 2Doe4 tornou isso acessível pra mim como voluntário."', name: 'Lucas M.', role: 'Prof. de Ed. Física — Equoterapia', initials: 'LM', color: 'bg-amber-500' },
  { text: '"Nossa empresa passou a patrocinar o projeto ambiental e o retorno de imagem foi incrível. Os relatórios de impacto ajudaram no nosso balanço ESG anual."', name: 'Patricia S.', role: 'Diretora de Sustentabilidade — Parceira', initials: 'PS', color: 'bg-brand-700' },
]

const ecosystem = [
  { icon: Handshake, name: 'DoaBem', desc: 'Plataforma integrada de doações para projetos sociais verificados.', badge: 'Ativo', live: true },
  { icon: Bot, name: 'GPTDoaBem', desc: 'IA que conecta doadores e voluntários às causas certas.', badge: 'Ativo', live: true },
  { icon: TrendingUp, name: 'GPT do Lucro', desc: 'Ferramenta de monetização inteligente para parceiros e afiliados.', badge: 'Em breve', live: false },
  { icon: Camera, name: 'FotoDoaBem', desc: 'Banco de imagens sociais produzidas durante as ações do ecossistema.', badge: 'Em breve', live: false },
]

const benefits = [
  { icon: Tag, text: 'Cupons e descontos exclusivos de parceiros' },
  { icon: Ticket, text: 'Vouchers e cashback em compras' },
  { icon: Award, text: 'Certificado oficial de voluntariado' },
  { icon: BookOpen, text: 'Acesso a cursos e oficinas gratuitas' },
  { icon: Globe, text: 'Rede de contatos e networking real' },
  { icon: CheckCircle2, text: 'Experiência comprovável para currículo e LinkedIn' },
]

const steps = [
  { num: '01', title: 'Cadastre-se gratuitamente', desc: 'Nome, WhatsApp, cidade e causa de interesse. Leva menos de 60 segundos.' },
  { num: '02', title: 'Escolha sua causa', desc: 'Conectamos você ao projeto que mais combina com seu perfil e disponibilidade.' },
  { num: '03', title: 'Participe de uma ação', desc: 'Presencial ou remoto. Pontual ou regular. Você decide como contribuir.' },
  { num: '04', title: 'Receba suas vantagens', desc: 'Cupons, certificados, networking e reconhecimento real pela sua contribuição.' },
]

/* ─── ANIMATED COUNTER ─── */
function Stat({ target, suffix = '', label }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
        {count}<span className="text-cta-400">{suffix}</span>
      </div>
      <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}

function ImpactNum({ target, suffix = '', label }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-brand-800 tabular-nums">
        {count}<span className="text-cta-500">{suffix}</span>
      </div>
      <div className="text-sm text-gray-500 mt-1.5 font-medium">{label}</div>
    </div>
  )
}

/* ─── FAQ ITEM ─── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-gray-800 font-medium hover:text-brand-700 transition-colors text-sm sm:text-base"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <ChevronDown className={cn('w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300', open && 'rotate-180')} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── REGISTER FORM ─── */
function RegisterForm() {
  const [values, setValues] = useState({ nome: '', whatsapp: '', cidade: '', causa: '' })
  const [errors, setErrors] = useState({})

  const set = (k, v) => setValues(p => ({ ...p, [k]: v }))

  const validate = () => {
    const e = {}
    if (!values.nome.trim()) e.nome = 'Informe seu nome completo'
    if (!values.whatsapp.trim()) e.whatsapp = 'Informe seu WhatsApp'
    if (!values.cidade.trim()) e.cidade = 'Informe sua cidade'
    if (!values.causa) e.causa = 'Escolha uma causa'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const causa = values.causa || 'Não informada'
    const msg = `Olá! Quero me cadastrar no 2Doe4 😊\n\n*Nome:* ${values.nome}\n*Cidade:* ${values.cidade}\n*WhatsApp:* ${values.whatsapp}\n*Causa de interesse:* ${causa}`
    const url = `https://wa.me/5514988388888?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')

    toast.success('Cadastro enviado! 🎉', {
      description: 'Você será redirecionado ao WhatsApp.',
    })
    setValues({ nome: '', whatsapp: '', cidade: '', causa: '' })
    setErrors({})
  }

  const fieldClass = (err) => cn(
    'w-full px-4 py-3.5 rounded-[0.8rem] text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 border-none bg-[#eef2e1]',
    'focus:ring-2 focus:ring-amber-500 focus:ring-offset-0',
    err ? 'ring-2 ring-red-400' : ''
  )

  return (
    <div className="bg-[#7B9469] rounded-3xl shadow-xl p-8 sm:p-10 border border-[#8AA178]">
      <h3 className="text-[22px] font-extrabold text-gray-900 mb-4">Faça seu cadastro gratuito</h3>
      <hr className="border-white/20 mb-8" />
      <form onSubmit={submit} noValidate className="space-y-5">

        {[
          { key: 'nome', type: 'text', label: 'Nome completo *', placeholder: '' },
          { key: 'cidade', type: 'text', label: 'Cidade *', placeholder: '' },
          { key: 'whatsapp', type: 'tel', label: 'WhatsApp *', placeholder: '' },
        ].map(({ key, type, label, placeholder }) => (
          <div key={key}>
            <label className="block text-[15px] font-medium text-gray-900 mb-2">{label}</label>
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
          <label className="block text-[15px] font-medium text-gray-900 mb-2">Causa de interesse</label>
          <select
            className={fieldClass(errors.causa)}
            value={values.causa}
            onChange={e => set('causa', e.target.value)}
          >
            <option value=""></option>
            <option value="saude">Saúde</option>
            <option value="equoterapia">Equoterapia</option>
            <option value="esporte">Esporte</option>
            <option value="ambiente">Meio Ambiente</option>
            <option value="todas">Tenho interesse em todas</option>
          </select>
          {errors.causa && <p className="text-xs text-red-300 mt-1">{errors.causa}</p>}
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

/* ─── HOME PAGE ─── */
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Home() {
  const { scrollY } = useScroll()
  const marqueeOffset = useTransform(scrollY, [0, 1500], ['0%', '-30%'])

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-start sm:items-center"
        id="inicio"
      >
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden" style={{ backgroundImage: `url(${bannerMobileImg})` }} />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: `url(${bannerImg})` }} />
        {/* Conteúdo */}
        <div
          className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 sm:pt-32 pb-10 sm:pb-20"
        >
          <div className="max-w-[460px] mx-auto sm:mx-0 text-center sm:text-left sm:pl-[65px]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-4 sm:mb-5"
            >
              Doe seu tempo.<br />
              Receba muito{' '}
              <span style={{ color: AMBER }}>mais<br />de volta.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              O 2Doe4 conecta você a projetos sociais reais, em cidades reais — com impacto que você pode ver e vantagens que você vai sentir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-3 justify-center sm:justify-start"
            >
              <button
                onClick={() => scrollTo('cadastro')}
                className="text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: BRAND, boxShadow: `0 8px 24px ${BRAND}50` }}
              >
                Quero participar
              </button>
              <button
                onClick={() => scrollTo('projetos')}
                className="border-2 text-sm font-semibold px-7 py-4 rounded-2xl transition-all duration-200 bg-white/70 hover:bg-white"
                style={{ borderColor: BRAND, color: BRAND }}
              >
                Conhecer os projetos
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE BANNER ═══ */}
      <section className="relative w-full h-0 z-[100] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 -translate-y-1/2 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" className="w-full h-auto opacity-100" style={{ minWidth: '1200px' }}>
            <defs>
              <path id="curve" d="M-71 300 C 0 300 200 160 480 185 C 760 205 1050 270 1511 260" fill="none"></path>
            </defs>
            <path d="M-71 300 C 0 300 200 160 480 185 C 760 205 1050 270 1511 260" stroke="#FFA001" strokeWidth="120" fill="none"></path>
            <text fill="#ffffff" fontSize="44" fontWeight="600" dy="16">
              <motion.textPath href="#curve" style={{ startOffset: marqueeOffset }}>
                4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito. &nbsp;&nbsp;&nbsp;&nbsp; 4 projetos. 4 cidades. Um único propósito.
              </motion.textPath>
            </text>
          </svg>
        </div>
      </section>

      {/* ═══ IDENTIFICATION ═══ */}
      <section className="sobre-section" id="sobre">
        <div className="sobre-container">
          <div className="sobre-grid">

            {/* Left Column */}
            <div>
              <FadeUp>
                <p className="sobre-subtitle">Para quem é o 2Doe4?</p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="sobre-title">
                  Se você quer fazer diferença<br className="hidden-sm" /> mas não sabe por onde<br className="hidden-sm" /> começar...
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="sobre-highlight">O 2Doe4 existe pra isso.</p>
              </FadeUp>

              <div className="sobre-pills-container">
                {[
                  'Quer ter experiência real e algo concreto para o currículo',
                  'Busca uma rede que vai além do like nas redes sociais',
                  'Procura se conectar a causas com propósito e impacto verdadeiro',
                  'Quer ser reconhecido por contribuir, não só por aparecer',
                ].map((text, i) => (
                  <FadeUp key={i} delay={0.15 + i * 0.07}>
                    <div className="sobre-pill">
                      {text}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <FadeUp delay={0.2}>
              <div className="sobre-card">
                <h3 className="sobre-card-title">
                  Você não precisa de dinheiro<br />para mudar o mundo.
                </h3>
                <p className="sobre-card-text mb-1">
                  Você já tem o que precisa.
                </p>
                <p className="sobre-card-text mb-8">
                  A gente te mostra onde.
                </p>

                <hr className="sobre-card-divider" />

                <div className="sobre-card-list-container">
                  <div className="sobre-card-list">
                    {[
                      'Cadastro 100% gratuito',
                      'Conexão imediata com projetos',
                      'Vantagens desde o primeiro dia',
                      'Comunidade ativa no WhatsApp',
                    ].map((f, i) => (
                      <div key={i} className="sobre-card-list-item">
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sobre-card-button-container">
                  <button
                    onClick={() => scrollTo('cadastro')}
                    className="sobre-card-button"
                  >
                    Quero fazer parte
                  </button>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section className="py-24 sm:py-32 bg-white" id="projetos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-amber-500 mb-3">Nossas áreas de atuação</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">4 projetos. 4 cidades. Um único propósito</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-gray-500">Escolha a causa que faz mais sentido pra você — ou participe de todas.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {projects.map((p, i) => (
              <FadeUp key={p.slug} delay={i * 0.1} className="h-full">
                <Link to={p.slug} className="group relative block w-full h-[400px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-3">{p.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="flex justify-center">
            <FadeUp delay={0.4}>
              <button onClick={() => scrollTo('cadastro')} className="bg-[#7B9469] hover:bg-[#688056] text-white font-semibold px-10 py-4 rounded-xl transition-colors shadow-md text-base">
                Quero participar
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="pt-24 pb-12 bg-[#EDF0CD] relative" id="como-funciona">

        {/* Right side - Sticky Image glued to screen edge */}
        <div className="absolute inset-y-0 right-0 w-[50vw] hidden lg:block pt-24 pb-12 z-0">
          <div className="sticky top-32 flex justify-end">
            <FadeUp delay={0.2} className="w-full flex justify-end">
              <img
                src={projectImg}
                alt="Como funciona o 2Doe4"
                className="w-full h-auto object-contain rounded-l-3xl scale-[1.1] origin-right"
              />
            </FadeUp>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left side - Content & Cards (Scrolls naturally with page) */}
            <div className="w-full lg:w-[45%]">
              <div className="mb-12">
                <FadeUp>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Como funciona o 2Doe4</h2>
                </FadeUp>
                <FadeUp delay={0.05}>
                  <p className="text-gray-600 text-lg">Quatro passos que mudam o jogo — e podem mudar sua vida.</p>
                </FadeUp>
              </div>

              {/* Timeline cards */}
              <div className="relative mt-8">
                {/* Vertical line connecting steps */}
                <div className="absolute left-[35px] top-8 bottom-8 w-0.5 bg-amber-400" />

                <div className="space-y-12">
                  {steps.map((step, i) => (
                    <FadeUp key={i} delay={i * 0.1}>
                      <div className="relative pl-20 pr-0 sm:pr-4">
                        {/* Dot */}
                        <div className="absolute left-[29px] top-8 w-3.5 h-3.5 rounded-full bg-amber-500 z-10 ring-4 ring-[#EDF0CD]" />

                        {/* Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                          <div className="bg-[#FFD699] text-amber-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                            {step.num}
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>

            {/* Invisible placeholder for right side so flex doesn't collapse horizontally */}
            <div className="w-full lg:w-[55%] hidden lg:block pointer-events-none"></div>

          </div>
        </div>
      </section>

      {/* ═══ AREAS DE ATUACAO ═══ */}
      <section className="py-24 sm:py-32 bg-[#fafafa]" id="areas-atuacao">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="inline-block text-sm sm:text-base font-medium text-amber-500 mb-3">
                Nossas áreas de atuação
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Histórias reais. Impacto real.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-lg">
                Quem entrou no 2Doe4 não queria apenas ajudar — queria pertencer.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Item 1 - spans 2 cols */}
            <FadeUp delay={0.1} className="md:col-span-2 h-full">
              <div className="group relative bg-[#7B9469] rounded-[2rem] p-8 sm:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full min-h-[300px] flex flex-col justify-end">
                <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/30">
                    <Star className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Conexão que transforma</h3>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
                    Mais do que doar tempo, você se conecta com pessoas incríveis. O 2Doe4 é uma rede de networking real, pautada em propósito e impacto.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Item 2 - spans 1 col */}
            <FadeUp delay={0.2} className="md:col-span-1 h-full">
              <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full min-h-[300px] flex flex-col">
                 <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-xl flex items-center justify-center mb-auto transition-transform group-hover:scale-110">
                   <TrendingUp className="w-6 h-6" />
                 </div>
                 <div className="mt-8">
                   <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Visível</h3>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed">
                     Acompanhe o crescimento dos projetos e veja métricas reais do que o seu trabalho voluntário está gerando no mundo.
                   </p>
                 </div>
              </div>
            </FadeUp>

            {/* Item 3 - spans 1 col */}
            <FadeUp delay={0.3} className="md:col-span-1 h-full">
              <div className="group bg-[#FFD699] rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all border border-[#FFD699] h-full min-h-[300px] flex flex-col relative overflow-hidden">
                 <div className="absolute -bottom-6 -right-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
                   <Award className="w-40 h-40 text-amber-800" />
                 </div>
                 <div className="bg-white/40 backdrop-blur-sm text-amber-900 w-12 h-12 rounded-xl flex items-center justify-center mb-auto relative z-10 transition-transform group-hover:scale-110">
                   <Award className="w-6 h-6" />
                 </div>
                 <div className="mt-8 relative z-10">
                   <h3 className="text-xl font-bold text-gray-900 mb-3">Reconhecimento</h3>
                   <p className="text-gray-800 text-sm font-medium leading-relaxed">
                     Certificados oficiais, badges digitais e um currículo social que vai fazer você se destacar profissionalmente.
                   </p>
                 </div>
              </div>
            </FadeUp>

            {/* Item 4 - spans 2 cols */}
            <FadeUp delay={0.4} className="md:col-span-2 h-full">
              <div className="group relative bg-[#1F2937] rounded-[2rem] p-8 sm:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full min-h-[300px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800/50 z-0"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 transform group-hover:scale-105 transition-transform duration-700 pointer-events-none">
                   <Globe className="w-64 h-64 text-gray-500" />
                </div>
                <div className="relative z-10 w-full sm:w-2/3">
                  <div className="bg-gray-700 text-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Expansão Contínua</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                    O que começou em 4 cidades do interior paulista está virando um movimento. Estamos construindo a maior rede de voluntariado inteligente do país.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>

          <div className="flex justify-center">
            <FadeUp delay={0.4}>
              <button
                onClick={() => scrollTo('cadastro')}
                className="bg-[#7B9469] hover:bg-[#688056] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md"
              >
                Quero participar
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section
        className="pt-24 pb-32 lg:pb-48 bg-[#EFF3D8] bg-no-repeat bg-right-bottom"
        id="vantagens"
        style={{
          backgroundImage: `url(${ctaGraficoImg})`,
          backgroundSize: 'max(50vw, 700px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-center">

            {/* Left side */}
            <div className="w-full lg:w-1/2">
              <FadeUp>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  Você doa seu tempo.<br />Recebe muito mais de volta
                </h2>
              </FadeUp>
              <FadeUp delay={0.05}>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
                  No 2Doe4, voluntariado não é sacrifício — é troca inteligente.
                </p>
              </FadeUp>

              <div className="space-y-4 mb-10">
                {benefits.map((b, i) => (
                  <FadeUp key={i} delay={0.1 + i * 0.05}>
                    <div className="flex items-start gap-3">
                      <CheckCheck className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-bold text-base">{b.text}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4}>
                <button
                  onClick={() => scrollTo('cadastro')}
                  className="bg-[#7B9469] hover:bg-[#688056] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md"
                >
                  Quero participar
                </button>
              </FadeUp>
            </div>

            {/* Right side - Just the Card now */}
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex flex-col items-end min-h-[300px] sm:min-h-[400px]">
              <FadeUp delay={0.2} className="w-full max-w-[480px] relative z-20">
                <div className="bg-[#7B9469] rounded-3xl p-8 sm:p-10 shadow-lg lg:mr-8 xl:mr-16">
                  <h3 className="text-2xl font-bold text-white mb-3">Vantagens que você sente</h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    Descontos reais, produtos gratuitos, acesso a cursos e uma rede de pessoas que constroem algo maior do que elas mesmas.
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <section className="py-24 bg-gray-50" id="ecossistema">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <FadeUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">Mais do que um site</span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Um ecossistema inteiro trabalhando por você</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">O 2Doe4 é o hub. Ao redor dele, ferramentas que ampliam cada passo do seu impacto.</p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystem.map((e, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-brand-200 transition-all duration-300 h-full flex flex-col"
                >
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', i % 2 === 0 ? 'bg-brand-50' : 'bg-orange-50')}>
                    <e.icon className={cn('w-5 h-5', i % 2 === 0 ? 'text-brand-700' : 'text-cta-500')} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{e.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{e.desc}</p>
                  <div className="mt-4">
                    <span className={cn('inline-block text-xs font-semibold px-2.5 py-1 rounded-full', e.live ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500')}>
                      {e.badge}
                    </span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <p className="text-center mt-10 text-sm text-gray-400">
              Cada ferramenta é independente. Juntas, formam o ecossistema mais completo de impacto social do Brasil.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ PARTNERS B2B ═══ */}
      <section
        className="pt-12 pb-[420px] sm:pb-12 lg:py-16 bg-[#98B689] bg-no-repeat bg-[center_bottom] sm:bg-left-bottom bg-[length:max(90vw,420px)] lg:bg-[length:max(45vw,600px)]"
        id="parceiros"
        style={{
          backgroundImage: `url(${imgCtaEngaja})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-end items-center">

            {/* Empty space on left for the background image to show */}
            <div className="w-full lg:w-1/2 hidden lg:block" />

            {/* Content on the right */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <FadeUp delay={0.05}>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  Sua marca conectada a<br />quem faz acontecer
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-gray-800 text-lg leading-relaxed mb-10 font-medium max-w-md">
                  Patrocine projetos reais, alcance voluntários engajados e fortaleça sua presença ESG com dados concretos de impacto.
                </p>
              </FadeUp>

              <div className="space-y-6 mb-12">
                {[
                  { title: 'Visibilidade de marca', text: 'Logo em materiais, redes sociais e eventos dos projetos' },
                  { title: 'Relatórios de impacto', text: 'Dados reais para seu balanço ESG e comunicação institucional' },
                  { title: 'Conexão com voluntários', text: 'Acesso a uma base engajada e alinhada com propósito' },
                ].map((b, i) => (
                  <FadeUp key={i} delay={0.2 + i * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-[0.8rem] bg-[#FFA001] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <span className="text-white font-medium text-[17px]">04</span>
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold text-[17px] mb-0.5">{b.title}</div>
                        <div className="text-gray-800 text-sm font-medium leading-snug">{b.text}</div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.5}>
                <button
                  onClick={() => scrollTo('cadastro')}
                  className="bg-[#FFA001] hover:bg-[#e69000] text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-base shadow-md"
                >
                  Quero participar
                </button>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">Dúvidas frequentes</span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tem perguntas? A gente responde.</h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100 overflow-hidden px-2">
              {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ REGISTER ═══ */}
      <section className="py-24 sm:py-32 bg-[#fafafa]" id="cadastro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-center">
            <div className="lg:pr-8">
              <FadeUp delay={0.05}>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                  Sua ação começa com um<br />passo.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-[420px] font-medium">
                  Cadastre-se gratuitamente e entre para o movimento que está transformando o interior de São Paulo.
                </p>
              </FadeUp>

              <div className="space-y-4">
                {[
                  'Cupons e descontos exclusivos de parceiros',
                  'Cupons e descontos exclusivos de parceiros',
                  'Cupons e descontos exclusivos de parceiros',
                  'Cupons e descontos exclusivos de parceiros',
                  'Cupons e descontos exclusivos de parceiros',
                  'Cupons e descontos exclusivos de parceiros',
                ].map((p, i) => (
                  <FadeUp key={i} delay={0.15 + i * 0.05}>
                    <div className="flex items-center gap-3">
                      <CheckCheck className="w-5 h-5 text-[#FFA001] shrink-0" strokeWidth={2.5} />
                      <span className="text-gray-700 font-semibold text-[15px]">{p}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <FadeUp delay={0.2} className="w-full">
              <RegisterForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
