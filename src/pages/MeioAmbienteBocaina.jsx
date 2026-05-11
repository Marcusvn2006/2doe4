import ProjectPage from './ProjectPage'
import galleryImg from '../assets/img/meioambiententecta.webp'
import bannerImg from '../assets/img/bannerMeioAmbiente.webp'
import bannerMobileImg from '../assets/img/bannerMeioAmbienteMobile.webp'

const config = {
  heroClass:   'subhero--ambiente',
  badge:       '🌿 Meio Ambiente',
  title:       'Projeto Meio Ambiente',
  subtitle:    'Reflorestamento, educação ambiental e ações sustentáveis que conectam comunidade, natureza e agenda ESG.',
  causaLabel:  'Meio Ambiente',
  causaValue:  'ambiente',
  accentColor: '#166534',

  aboutTitle: 'Plantar hoje para colher um futuro possível',
  aboutText:
    'O Projeto Meio Ambiente reúne voluntários, empresas e comunidade em torno de ações concretas de preservação e recuperação ambiental. Plantamos árvores nativas, realizamos mutirões de limpeza, educamos crianças e adultos sobre sustentabilidade e fornecemos relatórios de impacto ambiental para empresas que precisam de dados reais para seu compromisso ESG. Cada árvore plantada é um ato de esperança.',

  infoRows: [
    { icon: '👥', label: 'Beneficiários', value: 'Comunidade local e ecossistema regional' },
    { icon: '📅', label: 'Frequência',    value: 'Mutirões mensais + ações educativas' },
    { icon: '🤝', label: 'Voluntários',   value: 'Todas as áreas e perfis' },
    { icon: '🌱', label: 'Foco ESG',      value: 'Relatórios de impacto para empresas parceiras' },
  ],

  helpOptions: [
    { icon: '🌱', title: 'Voluntário de plantio e reflorestamento', text: 'Plante mudas nativas, recupere áreas degradadas e participe de mutirões de limpeza em rios e trilhas. Nenhuma experiência é exigida — só a vontade de deixar o planeta um pouco melhor do que você encontrou.' },
    { icon: '📚', title: 'Educador e comunicador ambiental', text: 'Leve palestras e oficinas de sustentabilidade a escolas públicas, empresas e eventos. Ensine sobre reciclagem, nascentes e biodiversidade — porque a transformação começa na consciência de uma criança.' },
    { icon: '📊', title: 'Analista de impacto e ESG', text: 'Colete dados de campo, monte relatórios de carbono fixado e área recuperada, e ajude empresas parceiras a comprovar suas metas ESG com números reais. Sua habilidade analítica tem valor ambiental concreto.' },
  ],

  impactNums: [
    { num: '2.400+', label: 'Árvores plantadas' },
    { num: '18',     label: 'Mutirões realizados' },
    { num: '60+',    label: 'Voluntários ativos' },
    { num: '5',      label: 'Empresas ESG parceiras' },
  ],

  galleryColor: '#166534',
  galleryImg,
  bannerImg,
  bannerMobileImg,
  couponCode: 'VERDEDOABEM',

  localSponsors: ['Empresa ESG Parceira', 'ONG Ambiental', 'Prefeitura Municipal', 'Fazenda Voluntária'],
}

export default function MeioAmbienteBocaina() {
  return <ProjectPage config={config} />
}
