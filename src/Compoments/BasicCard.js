import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chips from './Chips.js';
import { useNavigate } from 'react-router';
export default function BasicCard({titleJob,jobDes,skills,jobId}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275, p:0.5, backgroundColor:'#5d5d5d' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{color:'white'}}>
          {titleJob}
        </Typography>
        <hr></hr>
        <Chips skills={skills} label="Chip Filled"></Chips>
        <Typography sx={{color:'white',mt:1}} variant="body2">
          {jobDes}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button onClick={()=>navigate(`/job/${jobId}`)} sx={{backgroundColor:'orange',color:'black'}} variant="contained" size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
