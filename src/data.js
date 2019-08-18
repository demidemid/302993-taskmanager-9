export const getData = () => ({
  description: [
    `Prepare for the pitch`,
    `Find money for travel`,
    `Eat something`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `cinema`,
    `enteraiment`,
    `myself`,
    `cinema`
  ]),
  repeatingDays: {
    'mo': false,
    'tu': true,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': true,
    'sa': false,
    'su': true,
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
  isEdit: false
});
