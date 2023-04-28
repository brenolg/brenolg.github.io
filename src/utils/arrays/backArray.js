import sql from '../../images/mysql.png';
import docker from '../../images/docker.png';

const dockerToDoList = {
  title: 'Docker To Do List',
  img: docker,
  description: ['O objetivo deste projeto é praticar os conceitos de Docker, como imagens, containers, volumes e redes. Cada serviço roda em um container separado e se comunicam por meio de uma rede criada pelo docker.'],
  techs: ['Docker compose', 'Docker', 'Dockerfile', 'Contêiner', 'Images', 'YML', 'networks'],
  functionalities: ['-Criar um contêiner Docker para uma aplicação de front-end', '-Criar um contêiner Docker para uma aplicação de back-end', '-Criar um contêiner Docker para uma aplicação de testes', '-Orquestrar os três contêineres utilizando o Docker compose'],
  linkToRepo: 'https://github.com/brenolg/Docker-To-Do-List',

};

const oneForAll = {
  title: 'MySQL One For All',
  img: sql,
  description: ['O projeto consiste em normalizar um banco de dados desnormalizado e desenvolver queries que retornem a quantidade de colunas e registros esperados. Para isso, foi necessário analisar duas tabelas não normalizadas, identificar modificações necessárias para adequá-las às Formas Normais.'],
  techs: ['Gerenciamento de dados', 'Data Science', 'MySQL', 'Database', 'Queries', 'Docker'],
  functionalities: ['-Identificar e realizar modificações necessárias para que as tabelas estejam adequadamente na 1ª, 2ª e 3ª Forma Normais', '-Criação de um banco de dados a partir de uma planilha que contém tabelas e dados', '-Criar e modelar tabelas', '-Queries que passam pelos principais comandos SQL'],
  linkToRepo: 'https://github.com/brenolg/Mysql-One-For-All',
};

const allForOne = {
  title: 'MySQL All For One',
  img: sql,
  description: ['O objetivo deste projeto é praticar os conceitos de SQL, consolidar e aprimorar conhecimentos sobre a manipulação de bancos de dados, essenciais para o funcionamento de sistemas e empresas.'],
  techs: ['Gerenciamento de dados', 'Data Science', 'MySQL', 'Database', 'Queries', 'Docker'],
  functionalities: ['-Desafios de seleção, criação, atualização e deleção de dados', '-Desafios sobre filtragem de dados', '-Desafios de manipulação de tabelas'],
  linkToRepo: 'https://github.com/brenolg/Mysql-All-For-One',
};

const back = [dockerToDoList, allForOne, oneForAll];

export default back;
