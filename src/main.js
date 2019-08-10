import {createMenuTemplate} from './components/site-menu.js';
import {createSearchTemplate} from './components/search.js';
import {filterBlockTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';

import {createTaskTemplate} from './components/task.js';
import {createEditTaskTemplate} from './components/edit-task.js';
import {createLoadMoreButtonTemplate} from './components/loud-more.js';
import {createSortingBoardTemplate} from './components/sort-board.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, createMenuTemplate());
render(main, createSearchTemplate());

render(main, filterBlockTemplate);

render(main, createBoardTemplate());

const board = main.querySelector(`.board`);
const boardTasks = board.querySelector(`.board__tasks`);

render(board, createSortingBoardTemplate(), `afterbegin`);
render(boardTasks, createEditTaskTemplate());

new Array(3).fill(``).forEach(() => render(boardTasks, createTaskTemplate()));

render(board, createLoadMoreButtonTemplate());
