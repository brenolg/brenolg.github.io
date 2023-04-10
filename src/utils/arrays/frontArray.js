import starWarsImg from '../../images/star-wars.gif';

const starWars = {
  title: 'StarWars Planets',
  img: starWarsImg,
  description: 'Este é um projeto desenvolvido durante o curso de Desenvolvimento Web Full-Stack da Trybe. O objetivo do projeto é criar uma aplicação web que permite ao usuário buscar planetas do universo Star Wars através da API pública disponibilizada pela Lucasfilm Ltd. Foram utilizados filtros em JavaScript para manipular e apresentar os dados dos planetas na aplicação, além dos hooks useState e useEffect do React para gerenciar o estado da aplicação. A Context API do React foi utilizada para permitir o compartilhamento de informações entre componentes da aplicação.',
  techs: ['react', 'javascript', 'css', 'html', 'jest', 'context-api', 'react-testing-library', 'react-hooks', 'react-useeffec'],
  funcionalidades: ['Permitir que o usuário pesquise planetas pelo nome', 'Permitir que o usuário pesquise por características numéricas dos planetas', 'Exibir informações sobre o planeta pesquisado, como clima, terreno e número de filmes em que apareceu', 'Organizar dados de forma acendente ou descendente', 'Permitir que o usuário visualize as informações de cada planeta da lista.'],
};

const two = {
  title: 'test',
  img: {
    starWarsImg,
  },
  description: '2',
  techs: [['2'], ['3'], ['tree']],
  funcionalidades: [['2222'], [21212], ['dsdsd']],
};

const front = [starWars, two];

export default front;
