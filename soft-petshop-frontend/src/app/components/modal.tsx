import { useState } from 'react';
import {Alert, Box, Button, Modal, TextField, ThemeProvider, Typography} from '@mui/material';
import { theme, modalStyle } from './themes';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [ownerName, setOwnerName] = useState('')
  const [ownerContact, setOwnerContact] = useState('')
  const [newOwner, setNewOwner] = useState({})

  function handleOwnerName(event: any) {
    event.preventDefault();
    let ownerName = event.target.value;
    setOwnerName(ownerName)
  }

  function handleOwnerContact(event: any) {
    event.preventDefault();
    let ownerContact = event.target.value;
    setOwnerContact(ownerContact)
  }

  async function createNewOwner() {
    try {
        await fetch("http://localhost:3001/owners", {
        method: "POST",
        body: JSON.stringify({
            name: ownerName,
            contact: ownerContact
        }),
        headers: {
            "content-type": "application/json",
        }
        })
        .then(response => response.json())
        .then(data => console.log(data))

    } catch(error) {
        console.log(error);
    }

    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button color='primary' variant='contained' onClick={handleOpen}>Create a new Owner</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
            <Typography  id="modal-modal-title" variant="h6" component="h2" sx={{color: "primary.dark"}}>
                Create a new Owner
            </Typography>

            <TextField
                id="outlined-multiline-flexible"
                label="Owner Name"
                multiline
                maxRows={4}
                onChange={e => handleOwnerName(e)}
            />

            <TextField
                id="outlined-multiline-flexible"
                label="Owner Number"
                inputProps={{ maxLength: 11 }}
                onChange={e => handleOwnerContact(e)}
            />
            <hr />
            <Button sx={{color: "primary.light"}} onClick={handleClose}>Cancel</Button>
            <Button sx={{color: "primary.dark"}} onClick={createNewOwner}>Create</Button>
            </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}



