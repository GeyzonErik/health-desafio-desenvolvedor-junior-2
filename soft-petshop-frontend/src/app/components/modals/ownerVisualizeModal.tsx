import { useState } from "react";
import { Avatar, Box, Button, Modal, ThemeProvider, Typography } from "@mui/material";
import { FaTrash, FaUser } from "react-icons/fa";
import { theme, modalStyle } from "../themes";

export function OwnerVisualize({ label }: any) {
  const animalOwnerId = parseInt(label.ownerId)
  const [open, setOpen] = useState(false);
  const [ownerData, setOwnerData] = useState({ name: '', contact: '' })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  async function getOwner() {
    try {
        await fetch(`http://localhost:3001/owner/${animalOwnerId}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setOwnerData(data))
    } catch(error) {
        console.log(error)
    }
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Button 
            startIcon={<FaUser />} 
            onClick={() => {
                handleOpen()
                getOwner()
            }}
        >
            Visualize owner
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              color="error"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "primary.dark" }}
            >
              {label.name} Owner:
            </Typography>

            <Box display={"flex"} flexDirection={"column"} marginBottom={3}>
                <Typography alignSelf={"center"} marginBottom={2}>
                <Avatar sx={{ width: 72, height: 72 }}>
                    {ownerData.name[0]}
                </Avatar>
                </Typography>
                <Typography>Name: {ownerData.name}</Typography>
                <Typography>Contact: {ownerData.contact}</Typography>
            </Box>

            <Box display={"flex"} justifyContent={"space-evenly"} marginTop={5}>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </Box>
  );
}
