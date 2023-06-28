import apiBlogsImg from '../../images/apiBlogs.png';
import blackSmith from '../../images/black.png';
import devsDragonsImg from '../../images/devsDragons.png';
import docker from '../../images/docker.png';
import mongoDB from '../../images/mongoDB.png';
import sql from '../../images/mysql.png';
import storeManagerImg from '../../images/storeManager.png';
import talkerImg from '../../images/talker.png';

const dockerToDoList = {
  title: 'Docker To Do List',
  img: docker,
  description: ['O objetivo deste projeto é praticar os conceitos de Docker, como imagens, containers, volumes e redes. Cada serviço roda em um container separado e se comunicam por meio de uma rede criada pelo docker.'],
  techs: ['Docker compose', 'Docker', 'Dockerfile', 'Contêiner', 'Images', 'YML', 'networks'],
  functionalities: ['-Criar um contêiner Docker para uma aplicação de front-end', '-Criar um contêiner Docker para uma aplicação de back-end', '-Criar um contêiner Docker para uma aplicação de testes', '-Orquestrar os três contêineres utilizando o Docker compose'],
  linkToRepo: 'https://github.com/brenolg/Docker-To-Do-List',

};

const oneForAll = {
  title: 'One For All SQL',
  img: sql,
  description: ['O projeto consiste em normalizar um banco de dados desnormalizado e desenvolver queries que retornem a quantidade de colunas e registros esperados. Para isso, foi necessário analisar duas tabelas não normalizadas, identificar modificações necessárias para adequá-las às Formas Normais.'],
  techs: ['Gerenciamento de dados', 'Data Science', 'MySQL', 'Database', 'Queries', 'Docker'],
  functionalities: ['-Identificar e realizar modificações necessárias para que as tabelas estejam adequadamente na 1ª, 2ª e 3ª Forma Normais', '-Criação de um banco de dados a partir de uma planilha que contém tabelas e dados', '-Criar e modelar tabelas', '-Queries que passam pelos principais comandos SQL'],
  linkToRepo: 'https://github.com/brenolg/Mysql-One-For-All',
};

const allForOne = {
  title: 'All For One SQL',
  img: sql,
  description: ['O objetivo deste projeto é praticar os conceitos de SQL, consolidar e aprimorar conhecimentos sobre a manipulação de bancos de dados, essenciais para o funcionamento de sistemas e empresas.'],
  techs: ['Gerenciamento de dados', 'Data Science', 'MySQL', 'Database', 'Queries', 'Docker'],
  functionalities: ['-Desafios de seleção, criação, atualização e deleção de dados', '-Desafios sobre filtragem de dados', '-Desafios de manipulação de tabelas'],
  linkToRepo: 'https://github.com/brenolg/Mysql-All-For-One',
};

const talkerManager = {
  img: talkerImg,
  description: ['Aplicação de palestrantes (talkers), na qual é possível cadastrar, listar, pesquisar, editar e excluir palestrantes. A API possui o conjunto de operações CRUD de palestrantes (talkers) e possui alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.'],
  techs: ['Data Science', 'Javascript', 'Express', 'C.R.U.D', 'Node', 'Docker'],
  functionalities: ['-Endpoints que irão cadastrar, listar, pesquisar, editar e excluir palestrantes'],
  linkToRepo: 'https://github.com/brenolg/Talker-Manager-API',
};

const storeManager = {
  img: storeManagerImg,
  description: ['API de gerenciamento de vendas no modelo dropshipping, com arquitetura MSC e seguindo o REST. Utiliza o banco MySQL para criar, visualizar, atualizar e excluir produtos e vendas, garantindo integridade e escalabilidade.'],
  techs: ['MSC Architeture', 'Data Science', 'Javascript', 'Middlewares', 'MySQL', 'Express', 'C.R.U.D', 'Node', 'Docker'],
  functionalities: ['-Endpoints que irão cadastrar, listar, pesquisar, editar e excluir produtos', '-Endpoints que irão cadastrar, listar, pesquisar, editar e excluir vendas'],
  linkToRepo: 'https://github.com/brenolg/Store-Maneger-API-REST-MySql',
};

const apiBlogs = {
  img: apiBlogsImg,
  description: ['API para um blog com CRUD de postagens e autenticação de usuários. Solução completa para produção de conteúdo, com a possibilidade de criar, editar, deletar e visualizar postagens, além de criar, editar e deletar usuários.'],
  techs: ['MSC Architeture', 'Javascript', 'Middlewares', 'Sequelize', 'MySQL', 'Express', 'C.R.U.D', 'JWT', 'Node', 'Docker'],
  functionalities: ['Criação, atualização, exclusão e visualização de postagens',
    'Autenticação de usuários para garantir a segurança dos dados',
    'Armazenamento de informações em um banco de dados'],
  linkToRepo: 'https://github.com/brenolg/API-Blogs-Sequelize',
};

const trybesmith = {
  img: blackSmith,
  description: ['API em TypeScript para CRUD de itens medievais, utilizando tipagem para garantir robustez e compreensibilidade do código, e aplicando os conhecimentos adquiridos na linguagem.'],
  techs: ['MSC Architeture', 'TypeScript', 'Middlewares', 'Sequelize', 'MySQL', 'Express', 'C.R.U.D', 'JWT', 'Node', 'Docker'],
  functionalities: ['Cadastro e listagem de produtos',
    'Cadastro de Pessoas Usuárias', 'Listagem de Pedidos', 'Login de Pessoas Usuárias'],
  linkToRepo: 'https://github.com/brenolg/Blacksmith-API-MySql',
};

const devsDragons = {
  img: devsDragonsImg,
  description: ['O projeto "Devs and Dragons" aplica POO e princípios SOLID em um ambiente de aventuras, fortalecendo conhecimentos e habilidades em desenvolvimento de código escalável e legível.'],
  techs: ['Programação Orientada a Objetos', 'POO', 'TypeScript', 'SOLID', 'Classes', 'Node', 'Docker'],
  functionalities: ['Criação de raças com características específicas',
    'Definição de arquétipos para os personagens', 'Construção de personagens com atributos e habilidades'],
  linkToRepo: 'https://github.com/brenolg/Devs-and-Dragons-POO',
};

const commerce = {
  title: 'Commerce MongoDB',
  img: mongoDB,
  description: ['O projeto usa MongoDB para aplicar operadores e queries complexas em dados fictícios do cardápio do McDonalds, com alterações de documentos e expressões regulares.'],
  techs: ['Gerenciamento de dados', 'Data Science', 'MongoDB', 'Database', 'Queries', 'Docker'],
  functionalities: ['-Desafios de seleção, criação, atualização e deleção de dados', '-Desafios sobre filtragem de dados', '-Desafios de manipulação de dados'],
  linkToRepo: 'https://github.com/brenolg/Commerce-MongoDB',
};

const back = [
  dockerToDoList,
  commerce,
  devsDragons,
  allForOne,
  oneForAll,
  trybesmith,
  storeManager,
  apiBlogs,
  talkerManager,
];

export default back;
