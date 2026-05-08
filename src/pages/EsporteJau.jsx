import ProjectPage from './ProjectPage'
import galleryImg from '../assets/img/esportecta.webp'
import bannerImg from '../assets/img/bannerEsporte.webp'
import bannerMobileImg from '../assets/img/bannerEsporteMobile.webp'

const config = {
  heroClass:   'subhero--esporte',
  badge:       '⚽ Esporte',
  title:       'Projeto Esporte',
  subtitle:    'Inclusão social pelo esporte — formando atletas, criando oportunidades e transformando o futuro de jovens.',
  causaLabel:  'Esporte',
  causaValue:  'esporte',
  accentColor: '#2563EB',

  aboutTitle: 'O esporte como caminho de transformação',
  aboutText:
    'O Projeto Esporte usa o poder das atividades físicas e do trabalho em equipe para oferecer uma alternativa real para jovens em situação de risco social. Com treinos regulares, competições e formação de caráter, o projeto vai além da quadra — constrói cidadãos. Precisamos de treinadores voluntários, apoio logístico e parceiros que acreditam que o esporte salva.',

  infoRows: [
    { icon: '👥', label: 'Beneficiários', value: 'Jovens de 8 a 18 anos em situação de risco' },
    { icon: '📅', label: 'Frequência',    value: 'Treinos 3x por semana + eventos' },
    { icon: '🤝', label: 'Voluntários',   value: 'Treinadores, árbitros e apoio logístico' },
    { icon: '📋', label: 'Modalidade',    value: 'Presencial (quadras municipais)' },
  ],

  helpOptions: [
    { icon: '🏃', title: 'Treinador voluntário', text: 'Se você pratica ou ensina esporte, aqui é o seu lugar. Treinos de futebol, basquete, vôlei, atletismo e outras modalidades.' },
    { icon: '📣', title: 'Apoio nos eventos', text: 'Organize e apoie campeonatos, festivais esportivos e dias de integração que movimentam a comunidade.' },
    { icon: '🎽', title: 'Captação de recursos', text: 'Ajude a arrecadar uniformes, equipamentos, materiais esportivos e patrocínios para os times.' },
  ],

  impactNums: [
    { num: '120+', label: 'Jovens atendidos' },
    { num: '8',    label: 'Modalidades esportivas' },
    { num: '50+',  label: 'Voluntários ativos' },
    { num: '15+',  label: 'Eventos realizados' },
  ],

  galleryColor: '#1D4ED8',
  galleryImg,
  bannerImg,
  bannerMobileImg,

  localSponsors: ['Loja de Artigos Esportivos', 'Prefeitura Municipal', 'Academia Parceira', 'Empresa Patrocinadora'],
}

export default function EsporteJau() {
  return <ProjectPage config={config} />
}
