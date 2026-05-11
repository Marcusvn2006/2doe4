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
    { icon: '🏃', title: 'Treinador e educador esportivo', text: 'Se você pratica, ensina ou apenas ama esporte, este é o seu lugar. Conduza treinos de futebol, basquete, vôlei ou atletismo — e veja jovens em situação de risco descobrirem disciplina, propósito e sonhos dentro de uma quadra.' },
    { icon: '📣', title: 'Organizador de eventos e torneios', text: 'Planeje e execute campeonatos, dias de integração e festivais esportivos que viram o maior evento da vida de muitas crianças. Logística, comunicação, arbitragem — cada função importa.' },
    { icon: '🎽', title: 'Captador de recursos e patrocínio', text: 'Um uniforme novo pode mudar a autoestima de um atleta. Ajude a arrecadar chuteiras, bolas, kits esportivos e patrocínios que mantêm os times na ativa e abrem portas para competições regionais.' },
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
  couponCode: 'ULTRADOABEM',
  instagramUrl: 'https://www.instagram.com/ultradoabem',

  localSponsors: ['Loja de Artigos Esportivos', 'Prefeitura Municipal', 'Academia Parceira', 'Empresa Patrocinadora'],
}

export default function EsporteJau() {
  return <ProjectPage config={config} />
}
