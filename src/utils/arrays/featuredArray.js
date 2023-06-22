import pucImg from '../../images/puc.gif';
import starWarsImg from '../../images/star-wars.gif';
import tfc from '../../images/tfc.png';

const starWars = {
  title: 'Star Wars Planets',
  img: starWarsImg,
  description: ['Aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Os dados retornados pela API são disponibilizados em uma tabela e poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.'],
  techs: ['React', 'Javascript', 'Context', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Filtrar planetas por nome', '-Filtrar por características numéricas dos planetas', '-Exibir informações sobre os planetas', '-Organizar dados de forma ascendente ou descendente'],
  linkToRepo: 'https://github.com/brenolg/Star-Wars-Planets',
  linkToPage: 'https://brenolg.github.io/Star-Wars-Planets/',
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
  title: 'Futebol Club API',
  img: tfc,
  description: ['API usando TDD, integrando front-end e back-end com Docker Compose, aplicando princípios de POO e SOLID, autenticação JWT e um banco de dados relacional, visando fornecer informações de partidas e classificações de futebol ao front-end.'],
  techs: ['TypeScript', 'Node.js', 'Express.js', 'Sequelize', 'JWT', 'Docker', 'Bcrypt.js', 'TDD', 'POO', 'SOLID', 'Mocha', 'Chai', 'Sinon'],
  functionalities: ['-Dockerização dos apps', '-Modelagem de dados com MySQL', '-Construção de um CRUD com TypeScript, utilizando ORM', '-Autenticação de rotas utilizando JWT', '-Programação Orientada a Objetos e princípios SOLID'],
  linkToRepo: 'https://github.com/brenolg/Futebol-Club-API',
};
const featured = [puc, starWars, TFC];

export default featured;
