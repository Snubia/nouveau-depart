import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                NSB-STUDIO
              </Link>
            }
            scroll
          >
               <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our services
          </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Marketing</a></li>
              <li><a class="dropdown-item" href="#">Staffing</a></li>
              <li><a class="dropdown-item" href="#">Security</a></li>
              <li><a class="dropdown-item" href="#">Privacy</a></li>
             

              </ul>
              </li>
            <Navigation>
            
              <Link class="dropdown-item" to='/resume'>Resume</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                NSB-STUDIO
              </Link>
            }
          >
            <Navigation>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our services
          </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Marketing</a></li>
              <li><a class="dropdown-item" href="#">Staffing</a></li>
              <li><a class="dropdown-item" href="#">Add</a></li>
              <li><a class="dropdown-item" href="#">Security</a></li>
              <li><a class="dropdown-item" href="#">Privacy</a></li>
             

              </ul>
              </li>
              <Link to='/resume'>Resume</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
         
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
