const toggleFilters = () => {
  let btn_advanced = document.querySelector('.btn_advanced');

  if (btn_advanced) {
    if (btn_advanced.innerText.includes('Hide')) {
      hideFilters();
    } else if (btn_advanced.innerText.includes('Show')) {
      showFilters();
    }
  }
};

const showFilters = () => {
  if (getFilters() && getFilters().length) {
    [...getFilters()].map(i => (i.style.display = 'inline'));
    getFilterBody().style.display = '';

    document.querySelector('.btn_advanced').innerText = 'Hide search filters';
  }
};

const hideFilters = () => {
  if (getFilters() && getFilters().length) {
    [...getFilters()].map(i => (i.style.display = 'none'));
    getFilterBody().style.display = 'none';

    document.querySelector('.btn_advanced').innerText = 'Show search filters';
  }
};

const getFilters = () => document.querySelectorAll('.filter');
const getFilterBody = () =>
  document.querySelector('.react-bootstrap-table').querySelector('.table')
    .tBodies[0];

//default ()=>{ toggleFilters, showFilters, hideFilters, getFilters, getFilterBody };
