import {
  getMenuTemplate,
  getSearchTemplate,
  getFilterTemplate,
  getBoardTemplate,
  createLoadMoreButtonTemplate,
  createSortingBoardTemplate,
  createTaskTemplate,
  createEditTaskTemplate,
} from './index';

import {render} from './components/render';

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, getMenuTemplate());
render(main, getSearchTemplate());
render(main, getFilterTemplate);
render(main, getBoardTemplate());

const board = main.querySelector(`.board`);
const boardTasks = board.querySelector(`.board__tasks`);

render(board, createSortingBoardTemplate(), `afterbegin`);
render(boardTasks, createEditTaskTemplate());

new Array(3).fill(``).forEach(() => render(boardTasks, createTaskTemplate()));

render(board, createLoadMoreButtonTemplate());
