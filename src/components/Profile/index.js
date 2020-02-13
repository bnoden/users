import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Jumbotron, Toast, Container, Button } from 'react-bootstrap';

import './profile.css';
import pfi from './pfi.jpg';

// Modal.setAppElement('#root');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      email: this.props.email,
      date_created: this.props.date_created,
      city: this.props.city,
      state: this.props.state,
      country: this.props.country,
      title: this.props.title,
      phone: this.props.phone,
      description: this.props.description,
      last_login: this.props.last_login,
      profile_img: this.props.profile_img
    };
  }

  render() {
    return (
      <Container className="profile" style={{ zIndex: 16000, display: 'none' }}>

        <Jumbotron>
          <div
            className="btn_close"
            style={{
              textAlign: 'right',
              color: '#0984ff',
              fontWeight: 600
            }}
            onClick={closeProfile}
            >
            X Close
            </div>
            <hr />
          <div className="flex-grid">
            <div className="profile-detail profile-left" width="30%">
              <div style={{ textAlign: 'center', fontSize: '1em' }}>
                <img className="profile-img" src='' width="80px" height="80px"  alt="profile display" />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1em' }}>
                  <h6 className="profile-name"></h6>
                  <p className="profile-title"></p>
                  <p className="profile-location"></p>
                </div>
                <div style={{ fontSize: '0.8em' }}>
                  <p className="profile-email"></p>
                  <p className="profile-url"></p>
                  <p className="profile-date_created"></p>
                </div>
              </div>
            </div>
            <div className="profile-center" width="5%"></div>
            <div className="profile-detail profile-right" width="65%">
              <h6 style={{ fontStyle: 'italic' }}>About</h6>
              <p className="profile-description"></p>
            </div>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

const closeProfile = () => {
  document.body.classList.remove('modal-under');
  if (document.querySelector('.container')) {
    let container = document.querySelector('.container');
    if (container.children && container.children.length) {
      let table = container.children[0];
      table.style.display = '';
      let profile = document.querySelector('.profile');
      if (profile) {
        profile.style.display = 'none';
      }
    }
  }
}

export default Profile;
