import { toggleFilters, showFilters, hideFilters, getFilters, getFilterBody } from './actions';

import {
  Comparator,
  dateFilter,
  numberFilter,
  textFilter
} from 'react-bootstrap-table2-filter';

const stringFilter = textFilter({
  style: { display: 'none' }
});

const idFilter = numberFilter({
  placeholder: '1234',
  className: 'id_filter',
  style: { display: 'none' }
});

const dateRenderer = dateFilter({
  //placeholder: '00/00/0000',
  className: 'date_renderer',
  comparatorClassName: 'date_created_comp',
  style: { display: 'none' },
  comparatorStyle: { transform: 'scale(0.8)' },
  defaultValue: { date: new Date(2015, 0, 1), comparator: '>=' }
});

export const actions = { toggleFilters, showFilters, hideFilters, getFilters, getFilterBody };
export const filters = {stringFilter, idFilter, dateRenderer};

//export const filters = {stringFilter, idFilter, dateRenderer};
// export const actions = { toggleFilters, showFilters, hideFilters, getFilters, getFilterBody };
//const { toggleFilters, showFilters, hideFilters, getFilters, getFilterBody } = actions;
//export { toggleFilters, showFilters, hideFilters, getFilters, getFilterBody };
//export default ()=>{actions,filters};
