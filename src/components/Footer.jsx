import { Link, useNavigate } from 'react-router-dom'
import { Camera, MessageCircle, Briefcase, Heart } from 'lucide-react'
import logoEscura from '../assets/img/logoescura.png'

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-4">
              <img src={logoEscura} alt="2Doe4" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#101828' }}>
              Um ecossistema que conecta pessoas a projetos sociais reais — com impacto que você pode ver e vantagens que vai sentir.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Camera,         label: 'Instagram' },
                { icon: MessageCircle,  label: 'WhatsApp' },
                { icon: Briefcase,      label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-brand-800/60 hover:bg-brand-700 flex items-center justify-center transition-colors"
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
              {[
                { to: '/saude-brotas',          label: 'Saúde' },
                { to: '/equoterapia-boituva',   label: 'Equoterapia' },
                { to: '/esporte-jau',           label: 'Esporte' },
                { to: '/meio-ambiente-bocaina', label: 'Meio Ambiente' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm transition-colors" style={{ color: '#101828' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecossistema */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#101828' }}>Ecossistema</p>
            <div className="flex flex-col gap-2.5">
              {['DoaBem', 'GPTDoaBem', 'GPT do Lucro', 'FotoDoaBem'].map(item => (
                <a key={item} href="#" className="text-sm transition-colors" style={{ color: '#101828' }}>
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
                  className="text-sm transition-colors text-left"
                  style={{ color: '#101828' }}
                >
                  {label}
                </button>
              ))}
              <a href="mailto:contato@2doe4.com.br" className="text-sm transition-colors" style={{ color: '#101828' }}>
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-brand-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#101828' }}>
            © 2025 2Doe4. Feito com <Heart className="w-3 h-3 text-cta-500 fill-cta-500" /> para o Brasil.
          </p>
          <div className="flex items-center gap-6">
            {['Privacidade', 'Termos de uso', 'LGPD'].map(item => (
              <a key={item} href="#" className="text-xs transition-colors" style={{ color: '#101828' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
