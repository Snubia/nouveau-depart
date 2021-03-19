import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          
          <Cell className='resume-right-col' col={8}>
            <h2>Skills</h2>
            <p>
              Javascript, HTML, CSS, Bootstrap, MySQL, MongoDB, Python, Redux,
              Node.js, React.js, GraphQL, C++
            </p>

            <hr style={{ borderTop: '3px solid #ffb3ec' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2021}
              jobName='Security & Privacy Compliance Analyst at Microsoft'
              jobDescription="
              • Ensure supplier security and privacy assurance (SSPA) compliance with Microsoft's 56 data processing requirements across confidential data, SAAS, PCI, website, and Microsoft Funding.
              • Analyze escalated tickets and data protection requirements (DPR) for an average of 20 companies per day, exceeding company’s goal of ten daily cases; communicate findings to Microsoft business owner and third-party companies.
              • Manage data security frameworks and regulatory standards for purchase orders, including PCI-DSS documentation, SOC2/3 reports, ISO27001 and 27701, penetration test, and independent assessments.
              • Develop security and compliance reporting for executive management, shareholders, and suppliers based on data class, processing scope, processing designation, and spend category.
              • Conduct vendor privacy/PCI/CCPA/GDPR risk assessments of data processing role and scope and collaborate with company business owners to identify compliance solutions.
              • Review suppliers’ cloud data security for Microsoft Azure, Google LLC, AWS, Bloomberg to obtain SaaS approval."
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName='Operation Advisor at Amazon'
              jobDescription='• Proofed 400+ pages of Hazmat products training used to onboard French-speaking associates across fulfillment centers.
              • Interfaced with Alexa preview team to test new voice features for Alexa/Netflix collaboration in French.
              • Surveyed global employees to collect data on management, performance, and policies.
              • Documented hotline complaints about harassment, discrimination, and safety issues.
              • Completed 400+ schedule adjustments as point of contact for Amazon’s Regional Center.'
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName='Bilingual Technical Support at Nintento Of America'
              jobDescription='• Answered an average of 200 calls per week, provided network and consoles troubleshooting, addressed purchase and accounts securities, set up parental control restrictions, and coordinated repairs'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear={2020}
              schoolName='University of Washington Coding Bootcamp'
              schoolDescription='Full-stack Software Developper Certification'
            />

            <Education
              startYear={2012}
              endYear={2015}
              schoolName='University Of Douala, Cameroon'
              schoolDescription='Associate in Economics'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
