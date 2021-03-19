import React, { Component } from 'react';
import love from '../images/love.jpeg';
import techy from '../images/techy.jpeg';
import meteo from '../images/meteo.jpeg';
import game from '../images/game.jpeg';
import tracker from '../images/tracker.jpeg';
import glam from '../images/glam.jpeg';
import tictac from '../images/tictac.jpeg';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '200px',
                background:
                  'url(https://still-caverns-19224.herokuapp.com/) center / cover',
              }}
            >
              <img
                src={techy}
                alt='avatar'
                style={{ height: '200px' }}
              />
              React Project #1
            </CardTitle>
            <CardText>
              A MERN social media platform for developers using React, Node,
              Redux and MongoDB
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/DevLounge" colored target='_blank'>GitHub</Button>

              <Button href="https://still-caverns-19224.herokuapp.com/" colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '',
              }}
            >
              <img
                src={love}
                alt='avatar'
                style={{ height: '200px' }}
              />
              iMatchHearts
            </CardTitle>
            <CardText>
            A Dating App using Node.js, handlebars, Mongo.DB, facebook and google login, payment options using Stripe.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/iMatchHearts" colored target='_blank'>GitHub</Button>

              <Button href="https://vast-cliffs-42692.herokuapp.com/" colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '200px',
                background:
                  'url(https://github.com/Snubia/Employee_Directoy/blob/master/dem.jpeg) center / cover',
              }}
            >
              <img
                src={glam}
                alt='avatar'
                style={{ height: '175px' }}
              />
              GlamHouse
            </CardTitle>
            <CardText>
            An E-commerce Website using Node.js, MongoDb, Ejs, Multer and Stripe
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/NSB_GlamHouse" colored  target='_blank'>GitHub</Button>

              <Button href="https://limitless-citadel-93108.herokuapp.com/"  colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

       

        
          
          
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project A */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '',
              }}
            >
              <img
                src={meteo}
                alt='avatar'
                style={{ height: '175px' }}
              />
              Meteo
            </CardTitle>
            <CardText>
              A 5 days forecast weather App with Javascript and OpenWeather API
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/meteo" colored target='_blank'>GitHub</Button>

              <Button href="https://snubia.github.io/meteo/" colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

              {/* Project B */}
              <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '200px',
                background:
                  'url(https://github.com/Snubia/Employee_Directoy/blob/master/dem.jpeg) center / cover',
              }}
            >
              <img
                src={tictac}
                alt='avatar'
                style={{ height: '175px' }}
              />
              Tic-tac-toe
            </CardTitle>
            <CardText>
            A tic tac toe game using React.js
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/game_tictactoe" colored  target='_blank'>GitHub</Button>

              <Button href="https://github.com/Snubia/game_tictactoe"  colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project C */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '',
              }}
            >
              <img
                src={game}
                alt='avatar'
                style={{ height: '175px' }}
              />
              Breakout
            </CardTitle>
            <CardText>
              A Breakout game using HTML, Javascript, CSS and Canvas
            </CardText>
            <CardActions border>
              <Button colored target='_blank'>GitHub</Button>

              <Button href="https://snubia.github.io/casse-restart/" colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://github.com/Snubia/Employee_Directoy/blob/master/dem.jpeg) center / cover',
              }}
            >
                <img
                src={tracker}
                alt='avatar'
                style={{ height: '175px' }}
              />
              Budget Tracker
            </CardTitle>
            <CardText>
              Online/Offline Budget tracker with Node.js
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Snubia/Budgeting" colored target='_blank'>GitHub</Button>

              <Button href="https://mighty-lake-47205.herokuapp.com/" colored target='_blank'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>MERN/Fullstack</Tab>
          <Tab>FrontEnd & API</Tab>
          <Tab>BackEnd</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
