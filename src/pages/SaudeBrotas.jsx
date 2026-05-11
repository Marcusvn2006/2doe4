import ProjectPage from './ProjectPage'
import galleryImg from '../assets/img/saudecta.webp'
import bannerImg from '../assets/img/bannerSaude.webp'
import bannerMobileImg from '../assets/img/bannerSaudeMobile.webp'

const config = {
  heroClass:   'subhero--saude',
  badge:       '🏥 Saúde',
  title:       'Projeto Saúde',
  subtitle:    'Campanhas preventivas, atendimentos comunitários e educação em saúde para quem mais precisa.',
  causaLabel:  'Saúde',
  causaValue:  'saude',
  accentColor: '#0D9488',

  aboutTitle: 'Saúde de qualidade para quem mais precisa',
  aboutText:
    'O Projeto Saúde realiza ações preventivas, educação em saúde e apoio direto à comunidade. Trabalhamos com estudantes e profissionais da área para levar orientação, rastreio de doenças e suporte a famílias em situação de vulnerabilidade. Cada ação é cuidadosamente planejada para gerar impacto real e duradouro.',

  infoRows: [
    { icon: '👥', label: 'Beneficiários', value: 'Famílias em situação de vulnerabilidade' },
    { icon: '📅', label: 'Frequência',    value: 'Ações mensais + pontuais' },
    { icon: '🤝', label: 'Voluntários',   value: 'Área de saúde e apoio geral' },
    { icon: '📋', label: 'Modalidade',    value: 'Presencial e remoto' },
  ],

  helpOptions: [
    { icon: '👨‍⚕️', title: 'Profissionais e estudantes de saúde', text: 'Médicos, enfermeiros, psicólogos, nutricionistas e estudantes aplicam seus conhecimentos em consultas, rastreios e oficinas educativas direto nas comunidades — sem burocracia, com impacto imediato.' },
    { icon: '📣', title: 'Criadores de conteúdo e comunicação', text: 'Fotografe as ações, produza reels, escreva posts ou leve a história do projeto para sua faculdade ou empresa. Cada compartilhamento salva vidas ao alcançar quem ainda não conhece o projeto.' },
    { icon: '🚗', title: 'Voluntário de apoio e logística', text: 'Não é da área da saúde? Sem problema. Você pode organizar kits, montar estandes, orientar o público e garantir que cada ação aconteça com excelência. Sua presença muda tudo.' },
  ],

  impactNums: [
    { num: '350+', label: 'Pessoas atendidas' },
    { num: '12',   label: 'Ações realizadas' },
    { num: '80+',  label: 'Voluntários participantes' },
    { num: '6',    label: 'Bairros alcançados' },
  ],

  galleryColor: '#0D9488',
  galleryImg,
  bannerImg,
  bannerMobileImg,
  couponCode: 'CURADOABEM',
  instagramUrl: 'https://www.instagram.com/curadoabem',

  localSponsors: ['Farmácia Parceira', 'Clínica Local', 'Faculdade de Medicina', 'Laboratório XYZ'],
}

export default function SaudeBrotas() {
  return <ProjectPage config={config} />
}
