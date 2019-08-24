import {filterElements} from '../data/mock';

const createFilterTemplate = ({name, count = 0, isChecked = false} = {}) => {
  const id = name.toLowerCase();
  return `
    <input
      type="radio"
      id="filter__${id}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${id}" class="filter__label">
      ${name.toUpperCase()}
      <span class="filter__${id}-count">${count}</span>
    </label>`.trim();
};


const filterTemplate = filterElements.map(createFilterTemplate).join(`\n`);

export const getFilterTemplate = `
  <section class="main__filter filter container">
    ${filterTemplate}
  </section>`;
