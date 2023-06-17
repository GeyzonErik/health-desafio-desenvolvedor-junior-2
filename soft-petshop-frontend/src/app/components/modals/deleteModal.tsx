import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { theme, modalStyle } from "../themes";

export function DeleteModal({ owner }: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteOwner = async (event: any, owner: any) => {
        event.preventDefault()

        try {
            await fetch(`http://localhost:3001/owner/${owner.id}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
      
        } catch (error) {
            console.log(error);
        }
    
        handleClose()
        window.location.reload()
    };
    

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button 
            color="error"
            startIcon={<FaTrash />}
            onClick={handleOpen}
        >
          Delete
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
              You sure want to delete {owner.name}?
            </Typography>
            <hr />
            <Button 
                variant="contained"
                onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
                color="error"
                onClick={e => deleteOwner(e, owner)}
                variant="contained"
            >
                Delete
            </Button>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
