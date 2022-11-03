import React from 'react'

import Card from './Compoments/BasicCard.js';
import AppBar from './Compoments/AppBar.js';



import jobs from './Compoments/data/jobs.json';
import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar />
      <Grid sx={{mt:2,}} container spacing={3}>
          {jobs.slice(5,8).map(job=>(
            <Grid item xs={4}>
              <Card title={job.title} salaryMax={job.salaryHigh} city={job.city} jobDes={job.description} skills={job.skills}/>
            </Grid>
          ))}
  
      </Grid>

    </div>
  );

}

export default App
