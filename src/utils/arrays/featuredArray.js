import appDelImg from '../../images/appDel.gif';
import carShopImg from '../../images/carShop.png';
import pucImg from '../../images/puc.gif';
import starWarsImg from '../../images/star-wars.gif';
import tfcImg from '../../images/tfc.png';
import yogaImg from '../../images/yoga.gif';

const starWars = {
  title: 'Star Wars Planets',
  img: starWarsImg,
  description: ['Aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Os dados retornados pela API são disponibilizados em uma tabela e poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.'],
  techs: ['React', 'Javascript', 'Context', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Filtrar planetas por nome', '-Filtrar por características numéricas dos planetas', '-Exibir informações sobre os planetas', '-Organizar dados de forma ascendente ou descendente'],
  linkToRepo: 'https://github.com/brenolg/Star-Wars-Planets-React-Context',
  linkToPage: 'https://brenolg.github.io/Star-Wars-Planets-React-Context//',
};

const puc = {
  title: 'PUC E-Commerce',
  img: pucImg,
  description: ['E-commerce de fácil usabilidade, que possibilita a venda de produtos e que também seja uma forma de divulgação de empresas do ramo de roupas e acessórios. O projeto foi realizado durante o primeiro semestre do curso de TI na PUC.'],
  techs: ['Javascript', 'HTML', 'CSS', 'Responsividade', 'E-commerce', 'Electronic retailing'],
  functionalities: [
    '-Banner promocional exibindo principais ofertas',
    '-Vitrine de produtos mostrando produtos em promoção',
    '-Página de Trocas e Devoluções com informações sobre políticas',
    '-Página de Fale Conosco com formulário para contato'],
  linkToRepo: 'https://github.com/brenolg/PUC---Ecommerce',
  linkToPage: 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-1-e1-proj-web-t9-e1projetot9grupo1ecommerce/',
};

const TFC = {
  title: 'Futebol Club API Sequelize',
  img: tfcImg,
  description: ['API usando TDD, integrando front-end e back-end com Docker Compose, aplicando princípios de POO e SOLID, autenticação JWT e um banco de dados relacional, visando fornecer informações de partidas e classificações de futebol ao front-end.'],
  techs: ['TypeScript', 'Node.js', 'Express.js', 'Sequelize', 'JWT', 'Docker', 'Bcrypt.js', 'TDD', 'POO', 'SOLID', 'Mocha', 'Chai', 'Sinon'],
  functionalities: ['-Dockerização dos apps', '-Modelagem de dados com MySQL', '-Construção de um CRUD com TypeScript, utilizando ORM', '-Autenticação de rotas utilizando JWT', '-Programação Orientada a Objetos e princípios SOLID'],
  linkToRepo: 'https://github.com/brenolg/Futebol-Club-API-Sequelize',
};

const carShop = {
  img: carShopImg,
  description: ['API de uma concessionária de veículos usando Typescript, MongoDB e Mongoose. O projeto inclui rotas para cadastrar, listar e atualizar carros e motos. O foco está na aplicação dos princípios da Programação Orientada a Objetos (POO) e na cobertura de testes para as camadas de serviço.'],
  techs: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Docker', 'TDD', 'POO', 'SOLID', 'Mocha', 'Chai', 'Sinon'],
  functionalities: ['-Implementação eficiente de Classes, Instâncias, Atributos, Métodos e Objetos', '-CRUD para gerenciamento de concessionária e veículos', '-Integração com MongoDB através do ODM Mongoose', '-Testes unitários com Mocha, Chai e Sinon'],
  linkToRepo: 'https://github.com/brenolg/Car-Shop-API-Mongoose',
};

const appDel = {
  title: 'Ze Birita FullStack',
  img: appDelImg,
  description: ['Sistema completo para distribuidora de bebidas com funcionalidades de login, pedidos, aprovação, entrega e gerenciamento de usuários. Comunicação entre clientes e vendedores, fluxos de pedidos e acompanhamento de status são destaques.'],
  techs: ['Styled-components', 'REACT', 'Node.js', 'Express.js', 'Sequelize', 'Javascript', 'POO', 'MSC', 'JWT', 'Multer', 'Joi'],
  functionalities: ['-Implementação eficiente de Classes, Instâncias, Atributos, Métodos e Objetos', '-CRUD para gerenciamento de concessionária e veículos', '-Integração com MongoDB através do ODM Mongoose'],
  linkToRepo: 'https://github.com/brenolg/Ze-Birita-FullStack-React-Sequelize',
};

const yoga = {
  title: 'Yoga Landing Page',
  img: yogaImg,
  description: ['A Yoga Landing Page é uma página de destino atraente e responsiva para promover aulas de Yoga, com design moderno e organizado. Desenvolvida em parceria com uma designer, seguindo o design do Figma.'],
  techs: ['React Scroll Libraries', 'Styled-components', 'CSS modules', 'React', 'Vite', 'AWS', 'Responsividade', 'JavaScript'],
  functionalities: ['-Apresentação de informações sobre a aula de Yoga', '-Exibição de depoimentos de alunos', '-Apresentação do instrutor e sua biografia', '-Horários disponíveis para as aulas'],
  ps: ['PS:', 'Em desenvolvimento...'],
  linkToRepo: 'https://github.com/brenolg/Yoga-LandingPage-React-Vite',
  linkToPage: 'http://isabellacayuela.com.br/',
};

const featured = [appDel, puc, yoga, starWars, TFC, carShop];

export default featured;
