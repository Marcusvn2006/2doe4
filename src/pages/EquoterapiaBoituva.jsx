import ProjectPage from './ProjectPage'
import galleryImg from '../assets/img/Equoterapiacta.webp'
import bannerImg from '../assets/img/bannerEquoterapia.webp'
import bannerMobileImg from '../assets/img/bannerEquoterapiaMobile.webp'

const config = {
  heroClass: 'subhero--equo',
  badge: '🐴 Equoterapia',
  title: 'Projeto Equoterapia',
  subtitle: 'Reabilitação e desenvolvimento por meio da interação com cavalos — transformando vidas com propósito.',
  causaLabel: 'Equoterapia',
  causaValue: 'equoterapia',
  accentColor: '#D97706',

  aboutTitle: 'Quando o cavalo é o terapeuta',
  aboutText:
    'A equoterapia é um método terapêutico que utiliza o cavalo como mediador para o desenvolvimento biopsicossocial de pessoas com deficiência, transtorno do espectro autista, paralisia cerebral e outras condições. O projeto atende crianças e adultos em sessões regulares conduzidas por profissionais qualificados e apoiadas por voluntários dedicados. O impacto emocional e físico dessas sessões transforma não só os pacientes, mas todos que participam.',

  infoRows: [
    { icon: '👥', label: 'Beneficiários', value: 'Crianças e adultos com deficiência e TEA' },
    { icon: '📅', label: 'Frequência', value: 'Sessões semanais regulares' },
    { icon: '🤝', label: 'Voluntários', value: 'Profissionais de saúde e apoio geral' },
    { icon: '📋', label: 'Modalidade', value: 'Presencial (sítio parceiro)' },
  ],

  helpOptions: [
    { icon: '🐎', title: 'Auxiliar nas sessões', text: 'Acompanhe as sessões ao lado dos terapeutas, auxiliando os pacientes e cuidando dos animais durante as atividades.' },
    { icon: '💊', title: 'Profissionais de saúde', text: 'Fisioterapeutas, psicólogos, fonoaudiólogos e terapeutas ocupacionais complementam o trabalho da equipe central.' },
    { icon: '📸', title: 'Documentação e captação', text: 'Fotografe, produza conteúdo e apoie a captação de recursos e patrocinadores para manter e expandir o projeto.' },
  ],

  impactNums: [
    { num: '45+', label: 'Pacientes atendidos' },
    { num: '200+', label: 'Sessões realizadas' },
    { num: '30+', label: 'Voluntários ativos' },
    { num: '3', label: 'Cavalos do projeto' },
  ],

  galleryColor: '#92400E',
  galleryImg,
  bannerImg,
  bannerMobileImg,
  couponCode: 'POWERDOABEM',
  instagramUrl: 'https://www.instagram.com/powerdoabem',

  localSponsors: ['Agropecuária Parceira', 'Clínica de Reabilitação', 'Haras Voluntário', 'ONG Apoiadora'],
}

export default function EquoterapiaBoituva() {
  return <ProjectPage config={config} />
}
