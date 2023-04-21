import starWarsImg from '../../images/star-wars.gif';

const starWars = {
  title: 'Star Wars Planets',
  img: starWarsImg,
  description: ['Aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Os dados retornados pela API são disponibilizados em uma tabela e poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.'],
  techs: ['React', 'Javascript', 'Context', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Pesquisar planetas por nome', '-Pesquisar por características numéricas dos planetas', '-Exibir informações sobre os planetas', '-Organizar dados de forma acendente ou descendente'],
  linkToRepo: 'https://github.com/brenolg/Star-Wars-Planets',
  linkToPage: 'https://brenolg.github.io/Star-Wars-Planets/',
  ps: ['PS:', 'Layout responsivo em desenvolvimento'],
};

const walletExpenses = {
  title: 'Wallet Expenses',
  img: '',
  description: ['Este projeto é uma carteira virtual que permite ao usuário gerenciar suas despesas e receitas em diferentes moedas.'],
  techs: ['React', 'Redux', 'Javascript', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Criar uma conta com email e senha', '-Fazer login e logout da conta', '-Adicionar, editar e excluir despesas e receitas', '-Visualizar o saldo total e por categoria', '-Converter as moedas usando uma API externa'],
  linkToRepo: 'https://github.com/brenolg/Wallet-Expenses',
  linkToPage: '',
  ps: ['PS:', 'Aplicação em desenvolvimento'],
};

const tunesMusics = {
  title: 'Tunes Musics',
  img: '',
  description: ['Interface de streaming de música que permite ao usuário pesquisar por artistas e álbuns, adicionar músicas à sua playlist favorita e ouvir trechos das músicas disponíveis na API do iTunes.'],
  techs: ['React', 'API', 'Javascript', 'Router', 'HTML', 'CSS'],
  functionalities: ['-Pesquisar por artistas ou álbuns na barra de busca', '-Clicar em um card para ver mais detalhes sobre o artista ou álbum', '-Adicionar ou remover músicas à playlist favorita', '-VOuvir trechos das músicas na playlist favorita'],
  linkToRepo: 'https://github.com/brenolg/Tunes-Musics',
  linkToPage: '',
  ps: ['PS:', 'Aplicação em desenvolvimento'],
};

const pixelArt = {
  title: 'Pixel Art',
  img: '',
  description: ['Este projeto consiste em criar uma página web que permite ao usuário desenhar uma arte pixelada escolhendo as cores de uma paleta. O usuário pode alterar o tamanho da grade de pixels e salvar a sua arte em um arquivo local.'],
  techs: ['Javascript', 'HTML', 'CSS', 'Dom manipulation'],
  functionalities: ['-Ao clicar em uma das cores da paleta, a cor selecionada é aplicada ao pincel para pintar os pixels do quadro.', '-Um botão que limpa o quadro preenchendo todos os pixels com branco', 'Permitir que o usuário possa alterar a largura e altura do quadro de pixels', '-Um botão que gera uma cor aleatória para cada elemento da paleta ao ser clicado'],
  linkToRepo: 'https://github.com/brenolg/Pixel-Art',
  linkToPage: '',
  ps: ['PS:', 'Aplicação em desenvolvimento'],
};

const appReceitas = {
  title: 'App Receitas',
  img: '',
  description: ['Este é um projeto de app de receitas que consiste em desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.'],
  techs: ['Javascript', 'React', 'RTL', 'Context', 'Hooks', 'HTML', 'CSS'],
  functionalities: ['-Buscar receitas por ingrediente, nome ou primeira letra', '-Acessar os detalhes de cada receita,', '-Acessar o perfil do usuário com as receitas favoritas e feitas'],
  linkToRepo: 'https://github.com/brenolg/App-Recipes',
  linkToPage: '',
  ps: ['PS:', 'Aplicação em desenvolvimento'],
};

const front = [starWars, walletExpenses, tunesMusics, pixelArt, appReceitas];

export default front;
