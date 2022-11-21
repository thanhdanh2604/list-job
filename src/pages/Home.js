import React, { createContext, useEffect, useState } from 'react';
import Card from '../Compoments/BasicCard.js';
// import jobs from '../Compoments/data/jobs_old.json';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import PaginationSize from '../Compoments/Pagination.js';
import AppBar from '../Compoments/AppBar.js';

export const pageContext = createContext(); 
function Home() {
  const [currentPage,setcurrentPage] = useState(1);
  const [jobs,setJobs] = useState([]);
  const [isLogging,setlogging] = useState(false);
  const [userName,setUserName] = useState('Username');
  const handleNavPage  = (event, value)=>{
    setcurrentPage(value);
  };
  useEffect( ()=>{
    fetch('http://localhot:3000/jobs')
    .then((res)=> res.json())
    .then((data)=>setJobs(data))
    .catch((error) => {
      document.querySelector('#errorMessenge').innerText = error +'   App chạy Json server nên không đưa lên netlify được';
    });
  },[currentPage]);

  return (
    <div>
      <pageContext.Provider value={{currentPage,handleNavPage,isLogging,setlogging,userName,setUserName}}>
        <Container>
            <p id='errorMessenge'></p>
            <AppBar></AppBar>
            <Grid sx={{mt:1,p:2}} container spacing={2} >
              {jobs.slice(currentPage*5-5,currentPage*5).map(job=>(
                  <Grid key={job.id} item xs={12} sm={6} md={4}  >
                      <Card  sx={{backgroundColor:'#5d5d5d'}} titleJob={job.title} salaryMax={job.salaryHigh} city={job.city} jobDes={job.description} jobId={job.id} skills={job.skills}/>
                  </Grid>
              ))}
            </Grid>
            <PaginationSize count={Math.round(jobs.length/5)}></PaginationSize>
            
        </Container>
      </pageContext.Provider>
    </div>
  )
}

export default Home
