import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

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
             <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Our services
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/resume">Action</Dropdown.Item>
    <Dropdown.Item href="#/aboutme">Another action</Dropdown.Item>
    <Dropdown.Item href="#/projects">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>

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
            
             

            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Our services
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/resume">Action</Dropdown.Item>
    <Dropdown.Item href="#/aboutme">Another action</Dropdown.Item>
    <Dropdown.Item href="#/projects">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>

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
