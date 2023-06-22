import appRecipesImg from '../../images/app-receitas.png';
import sCartImg from '../../images/cart.gif';
import pixelArtImg from '../../images/pixelArt.gif';
import toDoListImg from '../../images/todo-list.gif';
import triviaImg from '../../images/trivia.gif';
import tryunfoImg from '../../images/tryunfo.png';
import tuneMusicsImg from '../../images/tuneMusics.gif';
import walletImg from '../../images/wallet.gif';

const walletExpenses = {
  title: 'Wallet Expenses',
  img: walletImg,
  description: ['Este projeto é uma carteira virtual que permite ao usuário gerenciar suas despesas e receitas em diferentes moedas. A aplicação computa gastos em diferentes moedas e converte tudo para uma única moeda.'],
  techs: ['React', 'Redux', 'Javascript', 'Hooks', 'RTL', 'Jest', 'HTML', 'CSS'],
  functionalities: ['-Fazer login de usuário na home', '-Adicionar, editar e excluir despesas e receitas', '-Converter as moedas usando uma API externa', '-60% de cobertura de testes da aplicação'],
  linkToRepo: 'https://github.com/brenolg/Wallet-Expenses-Redux',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const tuneMusics = {
  title: 'Tune Musics',
  img: tuneMusicsImg,
  description: ['Interface de streaming de música que permite ao usuário pesquisar por artistas e álbuns, adicionar músicas à sua playlist favorita e ouvir trechos das músicas disponíveis na API do iTunes.'],
  techs: ['Lifecycle methods', 'Javascript', 'React', 'Hooks', 'API', 'Router', 'HTML', 'CSS'],
  functionalities: ['-Pesquisar por artistas', '-Clicar em um card para ver mais detalhes do álbum', '-Adicionar ou remover músicas à playlist favorita', '-Ouvir trechos das músicas na playlist favorita'],
  linkToRepo: 'https://github.com/brenolg/Tune-Musics',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const pixelArt = {
  title: 'Pixel Art',
  img: pixelArtImg,
  description: ['Este projeto consiste em criar uma página web que permite ao usuário desenhar uma arte pixelada escolhendo as cores de uma paleta. O usuário poderá alterar o tamanho da grade de pixels como desejar.'],
  techs: ['Dom manipulation', 'Stylelint', 'Javascript', 'D.O.M', 'HTML', 'ESLint', 'CSS'],
  functionalities: ['-Ao clicar em uma das cores da paleta, a cor selecionada é aplicada ao pincel para pintar os pixels do quadro', '-Um botão que limpa o quadro preenchendo todos os pixels com branco'],
  linkToRepo: 'https://github.com/brenolg/Pixel-Art',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const appReceitas = {
  title: 'App Receitas',
  img: appRecipesImg,
  description: ['Este é um projeto de app de receitas que consiste em desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados são de 2 APIs distintas.'],
  techs: ['React', 'LocalStorage', 'RTL', 'Context', 'Hooks', 'Javascript', 'HTML', 'CSS'],
  functionalities: ['-Buscar receitas', '-Acessar os detalhes de cada receita', '-Explorar receitas por categoria', '-Iniciar, pausar e finalizar o preparo de uma receita'],
  linkToRepo: 'https://github.com/brenolg/App-Recipes',
  linkToPage: '',
  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const toDoList = {
  title: 'To Do List',
  img: toDoListImg,
  description: ['Aplicação web que permite ao usuário criar e gerenciar uma lista de tarefas (to-do-list). O usuário pode adicionar novas tarefas, marcar as tarefas concluídas, remover tarefas individuais ou todas as tarefas da lista..'],
  techs: ['Dom manipulation', 'LocalStorage', 'Stylelint', 'Javascript', 'D.O.M', 'HTML', 'CSS'],
  functionalities: ['-Adicionar uma nova tarefa à lista', '-Marcar uma tarefa como concluída', '-Remover uma tarefa específica da lista', '-Remover todas as tarefas da lista'],
  linkToRepo: 'https://github.com/brenolg/To-Do-List',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const trivia = {
  title: 'Trivia Game',
  img: triviaImg,
  description: ['Este projeto é um jogo de trivia que permite ao usuário testar seus conhecimentos em diferentes categorias e níveis de dificuldade. Projeto criado utilizando React e Redux , sendo desenvolvido em grupo onde as demandas definidas e organizadas em um quadro Kanban.'],
  techs: ['React', 'Redux', 'RTL', 'Hooks', 'Javascript', 'HTML', 'CSS'],
  functionalities: [
    '-Responder a 5 perguntas de múltipla escolha por rodada',
    '-Tela de score e ranking',
    '-Configuração de opções de jogo'],
  linkToRepo: 'https://github.com/brenolg/Trivia-Game-Redux',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const shoppingCart = {
  title: 'Shopping Cart',
  img: sCartImg,
  description: ['Este projeto é um carrinho de compras online. Que permite ao usuário adicionar e remover produtos do carrinho. Os produtos listados têm origem da API do Mercado Livre.'],
  techs: ['Javascript', 'CSS', ' HTML', 'Jest ', 'Tests', 'async-await', 'mercado-livre'],
  functionalities: [
    '-Adicionar produtos ao carrinho de compras',
    '-Remover produtos do carrinho de compras',
    '-Aumentar ou diminuir a quantidade de produtos no carrinho de compras'],
  linkToRepo: 'https://github.com/brenolg/Shopping-Cart',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const tryunfo = {
  title: 'Tryunfo Card Game',
  img: tryunfoImg,
  description: ['Um jogo no estilo Super Trunfo, em que será possível criar novas cartas e listar as cartas já existentes no baralho. Tudo isso de forma dinâmica, usando formulários e o estado da aplicação.'],
  techs: ['React', 'Props', 'Javascript', 'CSS', ' HTML'],
  functionalities: [
    '-Criar um baralho com o tema livre',
    '-Adicionar e remover uma carta do baralho',
    '-Visualizar todas as cartas que foram adicionadas ao baralho'],
  linkToRepo: 'https://github.com/brenolg/Game-Tryunfo',

  ps: ['PS:', 'Em desenvolvimento... Imagem ilustrativa'],
};

const front = [appReceitas,
  walletExpenses, trivia, tuneMusics, tryunfo, pixelArt, toDoList, shoppingCart];

export default front;
