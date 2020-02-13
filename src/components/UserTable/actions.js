const actions = {};
const selectedRow = {
  data: {},
  set: function(row) {
    this.data = {};
    Object.assign(this.data, row)
  },
  get: function() {
    return this.data;
  }
};

actions.getSelectedRow = () => selectedRow;

actions.rowEvents = {
  onDoubleClick: (e, row, rowIndex) => {
    let container = document.querySelector('.container');

    if (container && container.hasChildNodes()) {
      let table = container.firstElementChild;
      table.style.display = 'none';
      let profile = document.querySelector('.profile');
      if (profile) {
        profile.style.display = '';
      }

      document.body.classList.add('modal-under');
    }
  },
  onClick: (e, row, rowIndex) => {
    selectedRow.set(row);
    selectedRow.data.rowIndex = rowIndex;

    if (document.querySelector('.selected-row')) {
      document.querySelector('.selected-row').classList.remove('selected-row');
    }

    let domRow = document.querySelector(
      `.table tbody tr:nth-child(${rowIndex + 1})`
    );
    domRow.classList.add('selected-row');

    document.querySelector('.profile-name').innerText = `${
      selectedRow.data.first_name
    } ${selectedRow.data.last_name}`;
    document.querySelector('.profile-img').src = selectedRow.data.profile_img;
    document.querySelector('.profile-email').innerText = `email: ${
      selectedRow.data.email
    }`;
    document.querySelector('.profile-url').innerText = `website: ${
      selectedRow.data.personal_url
    }`;
    document.querySelector(
      '.profile-date_created'
    ).innerText = `Member since: ${new Date(
      selectedRow.data.date_created
    ).toLocaleDateString()}`;

    document.querySelector('.profile-title').innerText = `${selectedRow.data.title}`;

    if (selectedRow.data.state) {
      document.querySelector('.profile-location').innerText = `${
        selectedRow.data.city
      }, ${selectedRow.data.state}\n${selectedRow.data.country}`;
    } else {
      document.querySelector('.profile-location').innerText = `${
        selectedRow.data.city
      }, ${selectedRow.data.country}`;
    }

    document.querySelector('.profile-description').innerText = `${
      selectedRow.data.description
    }`;
  }
};

const { rowEvents } = actions;

export { rowEvents, selectedRow };
export default actions;
