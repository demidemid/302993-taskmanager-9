import {
  getMenuTemplate,
  getSearchTemplate,
  getFilterTemplate,
  getBoardTemplate,
  getLoadMoreButtonTemplate,
  getSortingBoardTemplate,
  getTaskEditTemplate,
  getTaskTemplate,
} from './components/';

import {getData, TaskDisplay, tasks} from './data/mock';
import {render} from './render';

const taskStat = {
  quantityCounter: 0,
  leftToShow: tasks.length,

  updateTaskStat(quantity) {
    this.quantityCounter += quantity;
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
render(boardTasks, new Array(1).fill(``).map(getData).map(getTaskEditTemplate).join(``));

const renderTasks = (start, end) => {
  render(boardTasks, tasks.slice(start, end).map(getTaskTemplate).join(``));
};

const getTaskQuantityParam = () => {
  let quantity = taskStat.leftToShow > TaskDisplay.PER_PAGE ? TaskDisplay.PER_PAGE : taskStat.leftToShow;

  taskStat.updateTaskStat(quantity);
  return quantity;
};

renderTasks(taskStat.quantityCounter, getTaskQuantityParam());


// LOAD MORE BUTTON
if (taskStat.leftToShow > 0) {
  render(board, getLoadMoreButtonTemplate());

  const loadMoreButton = document.querySelector(`.load-more`);
  loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);

  const onLoadMoreButtonClick = () => {
    renderTasks(taskStat.quantityCounter, taskStat.quantityCounter + getTaskQuantityParam());

    if (taskStat.leftToShow === 0) {
      loadMoreButton.remove();
    }
  };
}
