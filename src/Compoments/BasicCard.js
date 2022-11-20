import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chips from './Chips.js';
import ModalDetailJob from './ModalDetailJob.js';


export default function BasicCard({titleJob,jobDes,skills,jobId}) {
  
  return (
    <Card key={jobId} sx={{ minWidth: 275, minHeight:300, p:0.5, backgroundColor:'#5d5d5d' }}>
      <CardContent >
        <Typography  variant="h5" component="div" sx={{color:'white',minHeight:80}}>
          {titleJob}
        </Typography>
        <hr></hr>
        <Chips skills={skills} label="Chip Filled"></Chips>
        <Typography sx={{color:'white',mt:1,maxHeight:'80px',overflow:'hidden'}} variant="body2">
          {jobDes}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {
          <ModalDetailJob jobTitle={titleJob} jobDes={jobDes} skills={skills}/>
        }
        
      </CardActions>
    </Card>
  );
}
