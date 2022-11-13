import React, { createContext, useEffect, useRef, useState } from 'react';
import Card from '../Compoments/BasicCard.js';
import jobs from '../Compoments/data/jobs.json';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import PaginationSize from '../Compoments/Pagination.js';
export const pageContext = createContext(); 
function Home() {
  const [currentPage,setcurrentPage] = useState(1);
  const prePage = useRef(0);
  const handleNavPage  = (event, value)=>{
    setcurrentPage(value);
  };
  useEffect(()=>{
    prePage.current  = currentPage;
  },[currentPage]);
  return (
    <div>
      <Container>
        <pageContext.Provider value={{currentPage,handleNavPage}}>
            <Grid sx={{mt:1,p:2}} container spacing={2} >
              {jobs.slice(currentPage*5-5,currentPage*5).map(job=>(
                  <Grid item xs={12} sm={6} md={4}  >
                      <Card key={job.id} sx={{backgroundColor:'#5d5d5d'}} titleJob={job.title} salaryMax={job.salaryHigh} city={job.city} jobDes={job.description} jobId={job.id} skills={job.skills}/>
                  </Grid>
              ))}
            </Grid>
            <PaginationSize count={Math.round(jobs.length/5)}></PaginationSize>
        </pageContext.Provider>
      </Container>
      
    </div>
  )
}

export default Home
