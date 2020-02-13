import React, { Component } from 'react';

// import logo from './logo.svg';

import { UserTable, selectedRow } from './components/UserTable';
import Profile from './components/Profile';

const App = () => (
  <div className="container" style={{ marginTop: 60 }}>
    <UserTable />
    <Profile

      />
    <footer style={{textAlign:"center", fontSize:'0.8em', marginTop:"2em"}}>
        <p className="copy-right">
          <a href="https://bnoden.com" rel="noopener noreferrer" target="_blank">&copy;{crYear()} bro</a>
        </p>
      </footer>
  </div>
)

const crYear = (dt = new Date()) => dt.getFullYear();

export default App;
