import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project4.jpg';
import Project5 from './assets/project5.jpg';
import Project7 from './assets/project7.jpg';
import Project0 from './assets/project0.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Sobre Mim',
    path: 'aboutme',
  },
  {
    name: 'Projetos',
    path: 'projects',
  },
  {
    name: 'Resumo',
    path: 'resume',
  },
  {
    name: 'Contato',
    path: 'contact',
  }
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'HTML/CSS',
    title: 'AluraPlus',
    description:
      'Neste projeto acadêmico foi executado técnicas flexbox para o posicionamento de elementos na tela, pseudo-classes e reutilização de estilos.',
    link: 'https://aluraplus-igorsilveira.vercel.app/'
  },
  {
    id: 2,
    img: Project3,
    category: 'JavaScript',
    title: 'AluraPlay',
    description:
      'Neste projeto acadêmico, foi utilizado de métodos GET e POST de uma API alimentada dinâmicamente, além de um campo de pesquisa.',
    link: "https://aluraplay-igorsilveira.vercel.app/"
  },
  {
    id: 3,
    img: Project5,
    category: 'React',
    title: 'Organo',
    description:
      'Neste projeto acadêmico, foi desenvolvido utilizando a biblioteca ReactJs, com o auxilio de componentes e Hooks como o useState e useEffect.',
    link: "https://organo-react-igorsilveira.vercel.app/"
  },
  {
    id: 4,
    img: Project7,
    category: 'React',
    title: 'CineTag',
    description:
      'Neste projeto acadêmico, foi utilizado técnicas de rotas aninhadas e rotas dinâmicas, Contextos e aprofundando o estudo sobre Hooks.',
    link: 'https://cinetag-igorsilveira.vercel.app/'
  },
  {
    id: 5,
    img: Project2,
    category: 'HTML/CSS',
    title: 'AluraBooks',
    description:
      'Neste projeto acadêmico, foi aplicado o conceito de mobile first, onde o desenvolvimento parte inicialmente utilizando telas mobile como referência.',
    link: "https://alurabooks-igorsilveira.vercel.app/"
  },
  {
    id: 6,
    img: Project4,
    category: 'JavaScript',
    title: 'Monibank',
    description:
      'Neste projeto acadêmico, foi implementado técnicas de validação de formulário, utilizando JavaScript e também armazenando os dados em um localStorage.',
    link: "https://monibank-igorsilveira.vercel.app/"
  },
];

export const cv = [
  {
    id: 1,
    title: 'Universidade São Judas Tadeu',
    subtitle: 'Bacharel em Sistemas de Informação',
    date: '2019 - 2022',
    description:
      'Ensino Superior completo em Sistemas da Informação, através da Universidade São Judas Tadeu',
    category: 'education',
  },

  {
    id: 2,
    title: 'Alura: JavaScript para Front End',
    subtitle: 'Formação',
    date: '2023',
    description:
      '8 cursos que fazem parte da formação com uma carga horária total de 60h',
    category: 'education',
  },

  {
    id: 3,
    title: 'Alura: HTML e CSS',
    subtitle: 'Formação',
    date: '2013',
    description:
      '6 cursos que fazem parte da formação com uma carga horária total de 51h',
    category: 'education',
  },

  {
    id: 4,
    title: 'Alura: React com Javascript',
    subtitle: 'Formação',
    date: '2023',
    description:
      '7 cursos da formação com carga horária estimada em 65 horas.',
    category: 'education',
  },

  {
    id: 5,
    title: 'Analista de Service Desk',
    subtitle: 'Spread Tecnologia',
    date: '2016 - 2018',
    description:
      'Aqui foi onde iniciei minha carreira em TI atuando como Analista de Service Desk, adquirindo maior experiência no atendimento a usuários VIPs.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Assistente de Suporte',
    subtitle: 'CVC corp',
    date: '2018 - 2020',
    description:
      'Comecei a me aprofundar em Office 365 e isso acabou me trazendo para dentro da CVC corp no fim de 2018. Desde então fui me aprofundando em questões como: criação e correções de contas de e-mail, manutenção em objetos do AD, criação de grupos de distribuição e caixas compartilhadas, concessão de acessos, backup, migração de G Suite para Microsoft, entre outras...',
    category: 'experience',
  },

  {
    id: 7,
    title: 'Analista de Suporte',
    subtitle: 'CVC corp',
    date: '2018 - Presente momento',
    description:
      'Atualmente trabalho focado em automações de fluxos empresariais utilizando o Microsoft Flow e também integrando essas automações a um chatbot criado através do Power Virtual Agents afim de ajudar o usuário na ponta e ao mesmo tempo mitigar a quantidade de chamados abertos.',
    category: 'experience',
  },

  {
    id: 8,
    title: 'Desenvolvedor Front End',
    subtitle: 'Freelancer',
    date: '2023',
    description:
      'Afim de trabalhar com técnologia e criatividade ao mesmo tempo, decidi buscar novos desafios e me aventurar no mundo do Front End',
    category: 'experience',
  },
];

