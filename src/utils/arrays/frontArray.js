import starWarsImg from '../../images/star-wars.gif';
import walletImg from '../../images/wallet.gif';
import tuneMusicsImg from '../../images/tuneMusics.gif';
import appRecipesImg from '../../images/app-receitas.png';
import pixelArtImg from '../../images/pixelArt.gif';
import toDoListImg from '../../images/todo-list.gif';

const starWars = {
  title: 'Star Wars Planets',
  img: starWarsImg,
  description: ['Aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Os dados retornados pela API são disponibilizados em uma tabela e poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.'],
  techs: ['React', 'Javascript', 'Context', 'Hooks', 'UseEffec', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Filtrar planetas por nome', '-Filtrar por características numéricas dos planetas', '-Exibir informações sobre os planetas', '-Organizar dados de forma ascendente ou descendente'],
  linkToRepo: 'https://github.com/brenolg/Star-Wars-Planets',
  linkToPage: 'https://brenolg.github.io/Star-Wars-Planets/',
  ps: ['PS:', 'Layout responsivo em desenvolvimento'],
};

const walletExpenses = {
  title: 'Wallet Expenses',
  img: walletImg,
  description: ['Este projeto é uma carteira virtual que permite ao usuário gerenciar suas despesas e receitas em diferentes moedas. A aplicação computa gastos em diferentes moedas e converte tudo para uma única moeda.'],
  techs: ['React', 'Redux', 'Javascript', 'Hooks', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Fazer login de usuário na home', '-Adicionar, editar e excluir despesas e receitas', '-Converter as moedas usando uma API externa', '-60% de cobertura de testes da aplicação'],
  linkToRepo: 'https://github.com/brenolg/Wallet-Expenses',

  ps: ['PS:', 'Em desenvolvimento ... Imagem ilustrativa'],
};

const tuneMusics = {
  title: 'Tune Musics',
  img: tuneMusicsImg,
  description: ['Interface de streaming de música que permite ao usuário pesquisar por artistas e álbuns, adicionar músicas à sua playlist favorita e ouvir trechos das músicas disponíveis na API do iTunes.'],
  techs: ['Lifecycle methods', 'Javascript', 'React', 'Hooks', 'API', 'Router', 'HTML', 'CSS'],
  functionalities: ['-Pesquisar por artistas', '-Clicar em um card para ver mais detalhes do álbum', '-Adicionar ou remover músicas à playlist favorita', '-Ouvir trechos das músicas na playlist favorita'],
  linkToRepo: 'https://github.com/brenolg/Tune-Musics',

  ps: ['PS:', 'Em desenvolvimento ... Imagem ilustrativa'],
};

const pixelArt = {
  title: 'Pixel Art',
  img: pixelArtImg,
  description: ['Este projeto consiste em criar uma página web que permite ao usuário desenhar uma arte pixelada escolhendo as cores de uma paleta. O usuário poderá alterar o tamanho da grade de pixels como desejar.'],
  techs: ['Dom manipulation', 'Stylelint', 'Javascript', 'D.O.M', 'HTML', 'ESLint', 'CSS'],
  functionalities: ['-Ao clicar em uma das cores da paleta, a cor selecionada é aplicada ao pincel para pintar os pixels do quadro', '-Um botão que limpa o quadro preenchendo todos os pixels com branco'],
  linkToRepo: 'https://github.com/brenolg/Pixel-Art',

  ps: ['PS:', 'Em desenvolvimento ... Imagem ilustrativa'],
};

const appReceitas = {
  title: 'App Receitas',
  img: appRecipesImg,
  description: ['Este é um projeto de app de receitas que consiste em desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.'],
  techs: ['React', 'LocalStorage', 'RTL', 'Context', 'Hooks', 'Javascript', 'HTML', 'CSS'],
  functionalities: ['-Buscar receitas', '-Acessar os detalhes de cada receita', '-Explorar receitas por categoria', '-Iniciar, pausar e finalizar o preparo de uma receita'],
  linkToRepo: 'https://github.com/brenolg/App-Recipes',
  linkToPage: '',
  ps: ['PS:', 'Em desenvolvimento ... Imagem ilustrativa'],
};

const toDoList = {
  title: 'To Do List',
  img: toDoListImg,
  description: ['Aplicação web que permite ao usuário criar e gerenciar uma lista de tarefas (to-do-list). O usuário pode adicionar novas tarefas, marcar as tarefas concluídas, remover tarefas individuais ou todas as tarefas da lista..'],
  techs: ['Dom manipulation', 'LocalStorage', 'Stylelint', 'Javascript', 'D.O.M', 'HTML', 'CSS'],
  functionalities: ['-Adicionar uma nova tarefa à lista', '-Marcar uma tarefa como concluída', '-Remover uma tarefa específica da lista', '-Remover todas as tarefas da lista'],
  linkToRepo: 'https://github.com/brenolg/To-Do-List',

  ps: ['PS:', 'Em desenvolvimento ... Imagem ilustrativa'],
};

const front = [starWars, walletExpenses, tuneMusics, pixelArt, appReceitas, toDoList];

export default front;
