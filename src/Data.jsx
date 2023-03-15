import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';
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
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'PHP',
    percentage: 85,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 3,
    name: 'WordPress',
    percentage: 90,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 4,
    name: 'Python',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 5,
    name: 'React',
    percentage: 70,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 6,
    name: 'Adobe XD',
    percentage: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project0,
    category: 'HTML/CSS',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 2,
    img: Project0,
    category: 'JavaScript',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 3,
    img: Project0,
    category: 'ReactJS',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 4,
    img: Project0,
    category: 'Design',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 5,
    img: Project0,
    category: 'HTML/CSS',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 6,
    img: Project0,
    category: 'JavaScript',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
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
    title: 'Alura',
    subtitle: 'Formação JavaScript para Front End',
    date: '2023',
    description:
      '8 cursos que fazem parte da formação com uma carga horária total de 60h',
    category: 'education',
  },

  {
    id: 3,
    title: 'Alura',
    subtitle: 'HTML e CSS',
    date: '2013',
    description:
      '6 cursos que fazem parte da formação com uma carga horária total de 51h',
    category: 'education',
  },

  {
    id: 4,
    title: 'Alura',
    subtitle: 'React com Javascript',
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

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
