import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips({skills}) {
  return (
    <Stack direction="row" spacing={1}>
      {skills.splice(0,4).map((skill)=>(
        <Chip label={skill} />
      ))}
    </Stack>
  );
}