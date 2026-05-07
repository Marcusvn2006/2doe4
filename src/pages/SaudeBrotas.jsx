import ProjectPage from './ProjectPage'
import galleryImg from '../assets/img/saudecta.webp'

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
    { icon: '👨‍⚕️', title: 'Profissionais de saúde', text: 'Médicos, enfermeiros, psicólogos, nutricionistas, fisioterapeutas e estudantes das áreas contribuem diretamente nas ações.' },
    { icon: '📣', title: 'Comunicação e divulgação', text: 'Ajude a ampliar o alcance do projeto nas redes sociais, produzindo conteúdo ou levando o 2Doe4 para sua universidade.' },
    { icon: '🚗', title: 'Apoio logístico', text: 'Transporte de materiais, organização de eventos e suporte operacional nas ações presenciais.' },
  ],

  impactNums: [
    { num: '350+', label: 'Pessoas atendidas' },
    { num: '12',   label: 'Ações realizadas' },
    { num: '80+',  label: 'Voluntários participantes' },
    { num: '6',    label: 'Bairros alcançados' },
  ],

  galleryColor: '#0D9488',
  galleryImg,

  localSponsors: ['Farmácia Parceira', 'Clínica Local', 'Faculdade de Medicina', 'Laboratório XYZ'],
}

export default function SaudeBrotas() {
  return <ProjectPage config={config} />
}
