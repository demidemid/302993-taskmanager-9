import {
  getMenuTemplate,
  getSearchTemplate,
  getFilterTemplate,
  getBoardTemplate,
  getLoadMoreButtonTemplate,
  getSortingBoardTemplate,
  getTaskTemplate,
  getEditTaskTemplate,
} from './components/';

import {render} from './render';

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, getMenuTemplate());
render(main, getSearchTemplate());
render(main, getFilterTemplate);
render(main, getBoardTemplate());

const board = main.querySelector(`.board`);
const boardTasks = board.querySelector(`.board__tasks`);

render(board, getSortingBoardTemplate(), `afterbegin`);
render(boardTasks, getEditTaskTemplate());

new Array(3).fill(``).forEach(() => render(boardTasks, getTaskTemplate()));

render(board, getLoadMoreButtonTemplate());
