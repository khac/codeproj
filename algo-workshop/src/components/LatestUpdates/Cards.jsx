import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Body = ({body}) => {
    return (
      <ul>
        {body.map((element) => {
          return (
            <li>
              <Typography variant="body2">
                {element}    
              </Typography>
            </li>
          )}
        )}
      </ul>  
    );
};

export default function BasicCard({heading, subheading, body}) {
    const [learnMore, setLearnMore] = React.useState(false);
    return (
        <Card style={{ margin: '20px auto', padding:'10px 0', width: '100%'  }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            </Typography>
            <Typography variant="h5" component="div">
                {heading}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {subheading}
            </Typography>
            {learnMore && <Body body={body} />}
        </CardContent>
        <CardActions>
            <Button onClick={() => {setLearnMore(!learnMore)}} size="small">
                {!learnMore && 'Learn More'}
                {learnMore && 'Hide'}
            </Button>
        </CardActions>
        </Card>
  );
}