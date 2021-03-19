import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import prof from '../images/prof.jpeg';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'left' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            

            <div className='banner-text'>
              <h1>Full Stack Software Developer</h1>
              

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | MySQL | NodeJS |
                Express | MongoDB| Python| C++ | Graphql | DJANGO
              </p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/sandrine-nubia-975aa2172/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/Snubia'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
