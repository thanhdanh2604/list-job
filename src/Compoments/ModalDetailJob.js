import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicChips from './Chips';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router';
import { pageContext } from '../pages/Home';
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};
export default function ModalDetailJob({jobTitle,jobDes,skills}) {
  // const navigate = useNavigate();
  const {isLogging} = React.useContext(pageContext);
  const [open, setOpen] = React.useState(false);
  const handleOpenDetailJob = () => {
    if (isLogging) {
      setOpen(true);
    }
  };

  const handleCloseDetailJob = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpenDetailJob} sx={{backgroundColor:'orange',color:'black'}} variant="contained" size="small">Learn More</Button>
      <Modal
        open={open}
        onClose={handleCloseDetailJob}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {jobTitle}
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" sx={{ m: 2 }}>
            {jobDes}
          </Typography>
          <span>Skill: </span><BasicChips sx={{mb:1}} skills={skills} />
        </Box>
      </Modal>
    </div>
  );
}