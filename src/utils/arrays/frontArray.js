import starWarsImg from '../../images/star-wars.gif';

const starWars = {
  title: 'Star Wars Planets',
  img: starWarsImg,
  description: ['Aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Os dados retornados pela API são disponibilizados em uma tabela. Os planetas poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.'],
  techs: ['React', 'Javascript', 'Context', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Pesquisar planetas por nome', '-Pesquisar por características numéricas dos planetas', '-Exibir informações sobre os planetas', '-Organizar dados de forma acendente ou descendente'],
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
