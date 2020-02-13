import React, { Component } from 'react';
// import jsonServer from 'json-server';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';

import axios from 'axios';
import key from '../../key';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import { rowEvents, selectedRow } from './actions';
import bnoden from '../../bnoden';
import {actions, filters} from '../filters';

import './userTable.css';
import { SearchBar } from '../SearchBar';

const {stringFilter, idFilter, dateRenderer} = filters;

class UserTable extends Component {
  constructor(props) {
    super(props);
        this.getUsers = this.getUsers.bind(this);
        this.state = {
          users: []
        }
    }


  componentDidMount() {
    // hideFilters();
  }

  getUsers = (cb) => {
    if (cb) {
      let queryString = cb();

      if (queryString.length > 0) {
        axios.get(`https://mockaroo.com/api/${bnoden.a}?count=10&key=${bnoden.b}`).then(response => {
          let data = [];
          let max_id = 1;

          response.data.map(i => (max_id = i.id > max_id ? i.id : max_id));

          response.data.map(i => {
            let record = {};
            let querySplit = queryString.split(' ');

            let person = `${i.first_name} ${i.last_name} ${i.username} ${i.email} 0${i.id}`.toLowerCase();

            querySplit.map(q => {
              if (person && person.includes(q.toLowerCase())) {
                Object.assign(record, i);

                record.name = `${i.last_name}, ${i.first_name}`;

                data = data.concat(record);

                max_id = i.id > max_id ? i.id : max_id;
              }
            })
          });

          this.setState({
            users: data
          });
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div style={{paddingLeft:'25%', display:'flex',flexDirection:'row'}}>
          <SearchBar
            getUsers={this.getUsers}
            />
        </div>
        {/* <div
          className="btn_advanced"
          style={{
            textAlign: 'right',
            color: '#0984ff',
            fontWeight: 600
          }}
          onClick={toggleFilters}
        >
          Show search filters
        </div> */}
        <div>
          <BootstrapTable
            keyField="id"
            data={this.state.users}
            columns={columns}
            hover
            condensed
            bordered={false}
            rowEvents={rowEvents}
            filterPosition="top"
            rowStyle={{ lineHeight: 0.9, fontSize: '0.8em' }}
            headerStyle={{
              height: '10px',
              lineHeight: 0.6,
              fontSize: '0.4em'
            }}
            loading={true}
            sort={{
              dataField: 'name',
              order: 'asc'
            }}
            filter={filterFactory()}
            pagination={paginationFactory()}
            className="UserTable"
          />
        </div>
      </div>
    );
  }
}

const columns = [
  {
    dataField: 'id',
    text: 'ID',
    classes: 'id-column',
    headerClasses: 'id-column-header',
    sort: true,
    searchable: true,
    formatter: value => bnoden.ipad(value, 4),
    filter: idFilter
  },
  {
    dataField: 'name',
    text: 'Name',
    searchable: true,
    sort: true,
    filter: stringFilter
  },
  {
    dataField: 'email',
    text: 'Email',
    sort: true,
    searchable: true,
    filter: stringFilter
  },
  {
    dataField: 'username',
    text: 'Username',
    sort: true,
    searchable: true,
    filter: stringFilter
  },
  {
    dataField: 'title',
    text: 'Title',
    sort: true,
    searchable: true,
    filter: stringFilter
  },
  {
    dataField: 'date_created',
    text: 'Joined',
    sort: true,
    searchable: true,
    // formatter: value => new Date(value).toLocaleString(),
    filter: dateRenderer
  },
  {
    dataField: 'last_login',
    text: 'Visited',
    sort: true,
    searchable: true,
    // formatter: value => new Date(value).toLocaleString(),
    filter: dateRenderer,
    hidden: true
  }
];

export { UserTable, selectedRow };
