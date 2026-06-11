import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TrendingUp, Image as ImageIcon, Clapperboard, FileText,
  Scissors, PlayCircle, CheckCheck, Sparkles, GraduationCap, ArrowRight,
} from 'lucide-react'
import ShareBar from '../components/ShareBar'

const BRAND = '#7B9469'
const AMBER = '#FFA001'

function IgIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

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
const iaModules = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Encontrando conteúdos virais com o Google Trends',
    desc: 'Descubra como identificar temas em alta no momento certo. Nesta aula você aprende a usar o Google Trends para encontrar oportunidades de conteúdo com potencial real de viralizar.',
    video: 'https://www.youtube.com/embed/e64B8SMTvz4?si=Bn6mnyfThI6tbk95',
    tags: ['Google Trends', 'Pesquisa', 'Viralização'],
  },
  {
    num: '02',
    icon: ImageIcon,
    title: 'Criando imagens com ChatGPT e Flow',
    desc: 'Domine a criação de imagens com inteligência artificial: use o ChatGPT para construir prompts perfeitos e o Flow para transformar suas ideias em imagens incríveis.',
    video: 'https://www.youtube.com/embed/9MAJHmIUl5c?si=ydMme-b07swKxB5t',
    tags: ['ChatGPT', 'Flow', 'Imagens com IA'],
  },
  {
    num: '03',
    icon: Clapperboard,
    title: 'Criando vídeos com IA',
    desc: 'Mão na massa: produza dois vídeos completos — um dando vida à imagem criada no Módulo 2 e outro feito do zero usando a IA do Flow.',
    video: 'https://www.youtube.com/embed/neETkLVcZA8?si=Ka087yJ_54igX3yK',
    tags: ['Flow', 'Vídeo com IA', 'Prática'],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Descrição e roteiro com IA',
    desc: 'Feche o ciclo da produção: aprenda a gerar roteiros envolventes e descrições otimizadas para seus vídeos usando inteligência artificial.',
    video: 'https://www.youtube.com/embed/V0756AY0hiA?si=ztL4kb50Q6Nnt2PN',
    tags: ['Roteiro', 'Descrição', 'IA'],
  },
]

const cortesAulas = [
  {
    num: 'Aula 01',
    title: 'Introdução aos cortes',
    desc: 'Entenda o que são cortes, por que eles dominam as redes sociais e como dar os primeiros passos para produzir os seus.',
    video: 'https://www.youtube.com/embed/CCZO8ZK-wpo?si=sSi757LpWzYmsLFI',
  },
  {
    num: 'Aula 02',
    title: 'Cortes na prática',
    desc: 'Coloque a mão na massa: técnicas de edição para transformar vídeos longos em cortes que prendem a atenção do início ao fim.',
    video: 'https://www.youtube.com/embed/zkGe8gQcJCE?si=H--r2sbvf5P5FUpn',
  },
]

const heroStats = [
  { num: '4', label: 'Módulos de IA' },
  { num: '2', label: 'Aulas de Cortes' },
  { num: '6', label: 'Vídeos completos' },
  { num: '100%', label: 'Gratuito' },
]

/* ─── VIDEO EMBED ─── */
function VideoEmbed({ src, title }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-md">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

/* ─── PAGE ─── */
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Aulas() {
  return (
    <main className="min-h-screen bg-white">

      {/* ═══ HERO ═══ */}
      <section className="relative bg-[#eef2e1] overflow-hidden" id="inicio-aulas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: AMBER }}>
                <GraduationCap className="w-4 h-4" />
                Formação Digital · 100% Gratuita
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-5">
                Aprenda a criar<br />
                <span style={{ color: AMBER }}>conteúdo com IA</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
                Do tema viral ao vídeo pronto: 4 módulos com foco em inteligência artificial e 2 aulas de cortes
                para você dominar a criação de conteúdo e amplificar o impacto dos projetos.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button
                  onClick={() => scrollTo('aulas-ia')}
                  className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: AMBER, boxShadow: `0 8px 24px ${AMBER}50` }}
                >
                  <Sparkles className="w-4 h-4" />
                  Aulas com IA
                </button>
                <button
                  onClick={() => scrollTo('aulas-cortes')}
                  className="inline-flex items-center gap-2 border-2 text-sm font-bold px-7 py-4 rounded-2xl transition-all duration-200 bg-white/70 hover:bg-white"
                  style={{ borderColor: BRAND, color: BRAND }}
                >
                  <Scissors className="w-4 h-4" />
                  Aulas de Cortes
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div className="flex justify-center">
                <ShareBar title="Aulas 2Doe4" subtitle="Formação gratuita em IA e cortes de vídeo" />
              </div>
            </FadeUp>
          </div>

          {/* Stats */}
          <FadeUp delay={0.3}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {heroStats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#8AA178]/30 shadow-sm px-4 py-5 text-center">
                  <div className="text-3xl font-extrabold tabular-nums" style={{ color: BRAND }}>{s.num}</div>
                  <div className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ AULAS COM IA ═══ */}
      <section className="py-24 sm:py-32 bg-white" id="aulas-ia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-amber-500 mb-3">Curso com foco em IA</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                4 módulos. Da ideia ao vídeo pronto.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-gray-500">
                Um caminho completo: encontre o tema, crie a imagem, produza o vídeo e finalize com roteiro e descrição — tudo com IA.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {iaModules.map((m, i) => (
              <FadeUp key={m.num} delay={0.05}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                  {/* Vídeo */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <VideoEmbed src={m.video} title={`Módulo ${m.num} — ${m.title}`} />
                  </div>

                  {/* Conteúdo */}
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="bg-[#FFD699] text-amber-600 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                        {m.num}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Módulo {m.num}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                      {m.title}
                    </h3>

                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium mb-6">
                      {m.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {m.tags.map(t => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                          style={{ background: '#eef2e1', color: BRAND, border: `1px solid ${BRAND}40` }}
                        >
                          <m.icon className="w-3 h-3" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AULAS DE CORTES ═══ */}
      <section className="py-24 sm:py-32 bg-[#eef2e1]" id="aulas-cortes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-amber-500 mb-3">Curso de Cortes</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Domine a arte dos cortes
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-gray-500">
                Duas aulas práticas para transformar vídeos longos em cortes que engajam nas redes sociais.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cortesAulas.map((a, i) => (
              <FadeUp key={a.num} delay={i * 0.1} className="h-full">
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="p-4 pb-0">
                    <VideoEmbed src={a.video} title={`Cortes — ${a.num}: ${a.title}`} />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#FFD699] text-amber-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                        <Scissors className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{a.num}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">{a.title}</h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium flex-1">{a.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 sm:py-32 bg-[#fafafa]" id="praticar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="rounded-3xl p-8 sm:p-14 shadow-xl border border-[#8AA178] relative overflow-hidden" style={{ backgroundColor: BRAND }}>
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-10 -translate-y-10 pointer-events-none">
                <PlayCircle className="w-72 h-72 text-white" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                  Aprendeu? Agora coloque em prática
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Use suas novas habilidades para transformar comunidades
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                  Crie conteúdo para os projetos do 2Doe4 — voluntariado digital que gera impacto real.
                  Suas 4 horas mensais podem começar agora.
                </p>

                <div className="space-y-3 mb-9">
                  {[
                    'Aulas 100% gratuitas e abertas',
                    'Aplique criando conteúdo para os projetos sociais',
                    'Voluntariado digital conta como suas 4h mensais',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCheck className="w-5 h-5 shrink-0 text-white" strokeWidth={2.5} />
                      <span className="text-white font-medium text-sm sm:text-base">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/home#cadastro"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-extrabold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-md active:scale-[0.98]"
                  >
                    Quero ser voluntário
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://www.instagram.com/gptdoabem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold px-6 py-4 rounded-xl text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md"
                    style={{ background: AMBER }}
                  >
                    <IgIcon size={16} />
                    Seguir @gptdoabem
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
