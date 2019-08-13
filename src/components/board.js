import {createTaskTemplate} from './task.js';
import {createEditTaskTemplate} from './edit-task.js';

export {
  createTaskTemplate,
  createEditTaskTemplate,
};

export const getBoardTemplate = () => {
  return `<section class="board container">
  <div class="board__tasks"></div>
  </section>`;
};
