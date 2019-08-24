import {getRandomBool, getRandomItem, getRandomInt, getRandomlyReducedArray} from '../utils';

const DESCRIPTIONS = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS_PER_TASK = 3;
const TAGS = [`cinema`, `enteraiment`, `myself`, `homework`, `theory`, `practice`, `intensive`, `keks`];
const TIME_WEEK = 7 * 24 * 3600 * 1000;
const dateNow = Date.now();
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const TaskDisplay = {
  TOTAL: 5,
  PER_PAGE: 8,
};

const getData = () => ({
  description: getRandomItem(DESCRIPTIONS),
  dueDate: getRandomInt(dateNow, dateNow + TIME_WEEK),
  tags: new Set(getRandomlyReducedArray(TAGS, Math.round(Math.random() * TAGS_PER_TASK))),
  repeatingDays: {
    'mo': false,
    'tu': getRandomBool(),
    'we': false,
    'th': false,
    'fr': getRandomBool(),
    'sa': false,
    'su': false,
  },
  color: getRandomItem(COLORS),
  isFavorite: getRandomBool(),
  isArchive: getRandomBool()
});

export const tasks = new Array(TaskDisplay.TOTAL).fill(``).map(getData);

const filterElements = [
  {
    name: `All`,
    count: tasks.length, isChecked: true
  },
  {
    name: `Overdue`,
    count: tasks.reduce((acc, it) => {
      return (it.dueDate < Date.now()) ? ++acc : acc;
    }, 0)
  },
  {
    name: `Today`,
    count: tasks.reduce((acc, it) => {
      return (new Date(it.dueDate).toDateString() === new Date(Date.now()).toDateString()) ? ++acc : acc;
    }, 0)
  },
  {
    name: `Favorites`,
    count: tasks.reduce((acc, it) => {
      return (it.isFavorite) ? ++acc : acc;
    }, 0)
  },
  {
    name: `Repeating`,
    count: tasks.reduce((acc, it) => {
      return (Object.values(it.repeatingDays).some((day) => day)) ? ++acc : acc;
    }, 0)
  },
  {
    name: `Tags`,
    count: tasks.reduce((acc, it) => {
      return (it.tags.size) ? ++acc : acc;
    }, 0)
  },
  {
    name: `Archive`,
    count: tasks.reduce((acc, it) => {
      return (it.isArchive) ? ++acc : acc;
    }, 0)
  },
];

export {COLORS, TIME_WEEK, TaskDisplay, filterElements, getData};
