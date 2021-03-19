import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import prof from '../images/prof.jpeg';


class About extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='about-grid'>
          <Cell col={6}>
            <h2>Sandrine Nubia</h2>
            <img src={prof} alt='avatar' style={{ height: '300px' }} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            <h4>Forward Thinking Full-Stack Software Developer / Security and Privacy Compliance</h4>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr />
            <p>
            After working for Nintendo, Amazon, and Microsoft, I developed a high interest in technology. I recently obtained my full-stack web development certificate (HTML, CSS, JavaScript, Bootstrap, Node.js, MySQL, React.js) from the University of Washington. As part of the curriculum, I developed a social media platform for developers connected to their GitHub repositories (TechyLounge), an E-commerce platform (GlamHouse), and a dating website (iMatchHearts).{' '}
            </p>

            <p>
            I am passionate about all things tech and engaged with engineers, UX designers, cloud architects, data scientists, and AI enthusiasts in GitHub and Stack Overflow groups on a daily basis to stay up to speed on the trends.

As a security and privacy compliance at Amazon, I quickly became prodicient with Microsoft's 56 data processing requirements and I am able to review up to 20 companies per day to ensure supplier security and privacy assurance (SSPA) compliance. I am well versed in privacy/PCI/CCPA/GDPR risk assessments and cloud data security for Microsoft Azure, Google LLC, AWS, Bloomberg..{' '}
            </p>

            <p>
            My core expertise include:
Programming Languages: JavaScript, Python, HTML, CSS, Node.js, MongoDB, MySQL, React.js, C++, Bootstrap, TypeScript
+ Software and Tools: MS Office Suite, Salesforce, Cisco, SQL, AWS, Google Cloud, MS Azure.{' '}
            </p>

            
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default About;
