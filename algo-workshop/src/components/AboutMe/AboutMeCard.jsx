import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import Divider from '@mui/material/Divider';


export default function BasicCard() {
  return (
    <Card style={{ margin: '20px auto', padding:'10px 0', width: '80%' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          About
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Hi! I'm Adit Chawdhary currently working as a Software Engineer at Intuit. I have created this web app to discuss algorithms of interest, 
          the implementations of these algorithms can be found on Github. The Algorithms Workshop is available on YouTube platform as well. 
          On the YouTube channel I've explained multiple stages of these algorithms.
          <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Here are some relevant links: 
          <a href="https://github.com/khac/codeproj/tree/main/algo-workshop"       target="_blank"   rel="noopener noreferrer"> 
            <GitHubIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content', 'color': 'black'}} />
          </a>
          <a href="https://www.youtube.com/@AlgorithmsWorkshop/videos"       target="_blank"   rel="noopener noreferrer"> 
            <YouTubeIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content', 'color': 'black'}} />
          </a>
          <a href="https://www.linkedin.com/in/adit/"       target="_blank"   rel="noopener noreferrer"> 
            <LinkedInIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content', 'color': 'black'}} />
          </a>
          <a href="https://docs.google.com/document/d/1mB-dbUY-gROhMYWKB4xe1vFSZIm2X_sDRKMXUungupY/edit?usp=sharing"       target="_blank"   rel="noopener noreferrer"> 
            <ArticleIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content', 'color': 'black'}} />
          </a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          I graduated from the University of Cincinnati with a Master's in Computer Science in May 2021. There is got a chance to pursue multiple interests
          ranging from Machine Learning, Deep Learning, Data Visualization, Backend Development, Microservice Architecture, Frontend Web Development and Big Data Analysis with Distributed Systems.
          I have covered some topics from each of these in the Algorithms Workshop. I have hands-on experience in these feilds with great exposure in some and novice in others. 
          I am willing to explore any of these fields.
          <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          <b>Summary of learning from prior experience in the industry and working in research labs:</b>
          <br /> 
          <br /> 
          <b>Software Engineer - Intuit</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Feb 2021 - July 2023</span>
          <br /> 
          <b>My role:</b>
          <br />
          As a full-stack engineer at Intuit, I am responsible for developing both the front-end and back-end components of software applications. 
          I collaborate with cross-functional teams to deliver high-quality solutions. My role involves designing user-friendly interfaces, 
          implementing robust server-side logic, and optimizing application performance. I enjoy the opportunity to contribute to system 
          architecture and engage in continuous learning to stay up-to-date with the latest technologies. Being a full-stack engineer allows 
          me to have a holistic perspective and contribute to the end-to-end development process.
          <br /><br /> 
          <b>How am I helping the team in achieving goals?</b>
          <br />
          My work at Intuit involved taking accountability and ownership of the code being pushed to production. Writing documentation around the technical problems I'm solving. 
          I also participated in Assess for Awesome training for removing bottlenecks and roadblocks for myself and teammates.
          <br /><br />
          <b>What are the major challenges faced and learning from them?</b>
          <br />
          I got a chance to build analytics features on web application interactions, deploying these apps in production. Made web page load time efficient by contributing to orchestration microservice architecture, saving 40% page load time.
          <br /><br /><Divider /> <br /> 
          
          <b>Research Assistant - University of Cincinnati</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Aug 2019 - May 2021</span>
          <br /> 
          <b>My role:</b>
          <br />
          As a graduate student, working with self-organizing maps (SOM) in machine learning, I would be involved in studying the theoretical foundations 
          of SOM and understand its applications in clustering, visualization, and dimensionality reduction. Next, I would implement SOM algorithms 
          and experiment with different datasets to gain practical experience. Additionally, I would explore optimization techniques to improve SOM 
          performance and analyze the impact of different hyperparameters. As a graduate student, I contributed to research by exploring novel
           extensions or modifications to SOM algorithms and publish findings in academic conference.
          <br /><br /> 
          <b>How am I helping the team in achieving goals?</b>
          <br />
          My work involved training SOM in an incremental way. So, if we train a nxn map, this map will serve as a starting point for 
          <br /><br />
          <b>What are the major challenges faced and learning from them?</b>
          <br />
          I got a chance to build analytics features on web application interactions, deploying these apps in production. Made web page load time efficient by contributing to orchestration microservice architecture, saving 40% page load time.
          <br />
          <br /><Divider /> <br /> 

          <b>Software Engineer Intern - Oracle</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>May 2019 - July 2019</span>
          <br /> 
          <b>My role:</b>
          <br />
          As a full-stack engineer at Intuit, I am responsible for developing both the front-end and back-end components of software applications. 
          I collaborate with cross-functional teams to deliver high-quality solutions. My role involves designing user-friendly interfaces, 
          implementing robust server-side logic, and optimizing application performance. I enjoy the opportunity to contribute to system 
          architecture and engage in continuous learning to stay up-to-date with the latest technologies. Being a full-stack engineer allows 
          me to have a holistic perspective and contribute to the end-to-end development process.
          <br /><br /> 
          <b>How am I helping the team in achieving goals?</b>
          <br />
          My work at Intuit involved taking accountability and ownership of the code being pushed to production. Writing documentation around the technical problems I'm solving. 
          I also participated in Assess for Awesome training for removing bottlenecks and roadblocks for myself and teammates.
          <br /><br />
          <b>What are the major challenges faced and learning from them?</b>
          <br />
          I got a chance to build analytics features on web application interactions, deploying these apps in production. Made web page load time efficient by contributing to orchestration microservice architecture, saving 40% page load time.
          <br />
          <br /><Divider /> <br /> 

          
          <b>Research Assistant - Cincinnati Childrens Hospital</b>  <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Jan 2019 - April 2019</span>
          <br /> 
          <b>My role:</b>
          <br />
          As a full-stack engineer at Intuit, I am responsible for developing both the front-end and back-end components of software applications. 
          I collaborate with cross-functional teams to deliver high-quality solutions. My role involves designing user-friendly interfaces, 
          implementing robust server-side logic, and optimizing application performance. I enjoy the opportunity to contribute to system 
          architecture and engage in continuous learning to stay up-to-date with the latest technologies. Being a full-stack engineer allows 
          me to have a holistic perspective and contribute to the end-to-end development process.
          <br /><br /> 
          <b>How am I helping the team in achieving goals?</b>
          <br />
          My work at Intuit involved taking accountability and ownership of the code being pushed to production. Writing documentation around the technical problems I'm solving. 
          I also participated in Assess for Awesome training for removing bottlenecks and roadblocks for myself and teammates.
          <br /><br />
          <b>What are the major challenges faced and learning from them?</b>
          <br />
          I got a chance to build analytics features on web application interactions, deploying these apps in production. Made web page load time efficient by contributing to orchestration microservice architecture, saving 40% page load time.
          <br />
          <br /><Divider /> <br /> 
          
          <b>Research Assistant - Indian Institute of Technology, Mandi</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Jan 2018 - May 2018</span>
          <br /> 
          <b>My role:</b>
          <br />
          As a full-stack engineer at Intuit, I am responsible for developing both the front-end and back-end components of software applications. 
          I collaborate with cross-functional teams to deliver high-quality solutions. My role involves designing user-friendly interfaces, 
          implementing robust server-side logic, and optimizing application performance. I enjoy the opportunity to contribute to system 
          architecture and engage in continuous learning to stay up-to-date with the latest technologies. Being a full-stack engineer allows 
          me to have a holistic perspective and contribute to the end-to-end development process.
          <br /><br /> 
          <b>How am I helping the team in achieving goals?</b>
          <br />
          My work at Intuit involved taking accountability and ownership of the code being pushed to production. Writing documentation around the technical problems I'm solving. 
          I also participated in Assess for Awesome training for removing bottlenecks and roadblocks for myself and teammates.
          <br /><br />
          <b>What are the major challenges faced and learning from them?</b>
          <br />
          I got a chance to build analytics features on web application interactions, deploying these apps in production. Made web page load time efficient by contributing to orchestration microservice architecture, saving 40% page load time.
        </Typography>
        
      </CardContent>
    </Card>
  );
}