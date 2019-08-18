import {
  getMenuTemplate,
  getSearchTemplate,
  getFilterTemplate,
  getBoardTemplate,
  getLoadMoreButtonTemplate,
  getSortingBoardTemplate,
  getTaskTemplate,
} from './components/';

import {getData} from './data';
import {render} from './render';

const TASK_TOTAL_COUNT = 26;
const TASK_PER_PAGE = 8;

const taskStat = {
  leftToShow: TASK_TOTAL_COUNT,

  updateLeftToShow(quantity) {
    this.leftToShow -= quantity;
  },
};

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, getMenuTemplate());
render(main, getSearchTemplate());
render(main, getFilterTemplate);
render(main, getBoardTemplate());

const board = main.querySelector(`.board`);
const boardTasks = board.querySelector(`.board__tasks`);

render(board, getSortingBoardTemplate(), `afterbegin`);

const renderTasks = (container, count, firstEdit = false) => {

  const tasks = new Array(count).fill(``).map(getData);
  if (firstEdit) {
    tasks[0].isEdit = true;
  }

  render(container, tasks.map(getTaskTemplate).join(``));
};

const getTaskQuantityParam = () => {
  let quantity = taskStat.leftToShow > TASK_PER_PAGE ? TASK_PER_PAGE : taskStat.leftToShow;
  taskStat.updateLeftToShow(quantity);

  if (taskStat.leftToShow === 0) {
    loadMoreButton.remove();
  }

  return quantity;
};

renderTasks(boardTasks, getTaskQuantityParam(), true);

render(board, getLoadMoreButtonTemplate());

const onClickMoreButton = () => {
  renderTasks(boardTasks, getTaskQuantityParam());
};

const loadMoreButton = document.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, onClickMoreButton);
