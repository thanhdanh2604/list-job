import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips({skills}) {
  return (
    <Stack sx={{flexWrap: 'wrap'}} direction="row" spacing={1}>
      {skills.slice(0,4).map((skill)=>(
        <Chip sx={{backgroundColor:'#c5351dd6',color:'white'}} label={skill} size="small"/>
      ))}
    </Stack>
  );
}