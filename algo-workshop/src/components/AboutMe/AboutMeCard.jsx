import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
          <GitHubIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content'}} />
          <YouTubeIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content'}} />
          <LinkedInIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content'}} />
          <ArticleIcon style={{'padding': '5px', 'marginLeft':'5px', 'marginBottom': '-15px', 'width': '30px', 'height': 'max-content'}} />
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

          <b>Software Engineer - Intuit</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Feb 2021 - July 2023</span>
          <br /> 
          My role:
          <br />
          How am I helping the team in achieving goals?
          <br />
          What are the major challenges faced and learning from them?
          <br />
          <br /> 

          <b>Research Assistant - University of Cincinnati</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Aug 2019 - May 2021</span>
          <br />
          My role:
          <br />
          How am I helping the team in achieving goals?
          <br />
          What are the major challenges faced and learning from them?
          <br />
          <br /> 

          <b>Software Engineer Intern - Oracle</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>May 2019 - July 2019</span>
          <br />
          My role:
          <br />
          How am I helping the team in achieving goals?
          <br />
          What are the major challenges faced and learning from them?
          <br />
          <br /> 

          
          <b>Research Assistant - Cincinnati Childrens Hospital</b>  <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Jan 2019 - April 2019</span>
          <br />
          My role:
          <br />
          How am I helping the team in achieving goals?
          <br />
          What are the major challenges faced and learning from them?
          <br />
          <br /> 
          
          <b>Research Assistant - Indian Institute of Technology, Mandi</b> <span style={{"margin-left":"20px", "color":"gray", "font-weight":"500"}}>Jan 2018 - May 2018</span>
          <br />
          My role:
          <br />
          How am I helping the team in achieving goals?
          <br />
          What are the major challenges faced and learning from them?
        </Typography>
        
      </CardContent>
    </Card>
  );
}