import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useContext  } from 'react';
import {pageContext } from '../pages/Home';
export default function PaginationSize({count}) {
  const {currentPage,handleNavPage} = useContext(pageContext);

  return (
    <Stack spacing={2}>
      <Pagination  count={count} size="small" onChange={handleNavPage} page={currentPage}/>
    </Stack>
  );
}
