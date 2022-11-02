import React from 'react'

import Card from './Compoments/BasicCard.js';
import AppBar from './Compoments/AppBar.js'

import jobs from './Compoments/data/jobs.json';

function App() {
  return (
    <div>
      <AppBar />
      {jobs.slice(0,4).map(job=>(
         <Card title={job.title} salaryMax={job.salaryHigh} city={job.city} />
      ))}
    </div>
  );

}

export default App
