import { useState } from "react";
import {Box, Button, Modal, TextField, ThemeProvider, Typography} from '@mui/material';
import { FaPen } from "react-icons/fa";
import { modalStyle, theme } from "../themes";

export function EditOwnerModal({ owner }: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newOwnerName, setNewOwnerName] = useState(`${owner.name}`);
    const [newOwnerContact, setNewOwnerContact] = useState(`${owner.contact}`);

    function handleNewNameInfo(event: any) {
        event.preventDefault();
        let ownerNewName = event.target.value;
        setNewOwnerName(ownerNewName)
    }

    function handleNewContactInfo(event: any) {
        event.preventDefault();
        let ownerNewContact = event.target.value;
        setNewOwnerContact(ownerNewContact)
    }

    async function sendOwnerNewInfos() {
        try {
            await fetch(`http://localhost:3001/owner/${owner.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: newOwnerName,
                    contact: newOwnerContact
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
            <ThemeProvider theme={ theme }>
                <Button 
                    startIcon={ <FaPen /> }
                    onClick={ handleOpen }
                >
                    Edit
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle} >
                        <Typography
                        color="error"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ color: "primary.dark" }}
                        >
                        You're now editing {owner.name}!
                        </Typography>

                        <Box display={"flex"} justifyContent={"space-around"} margin={3}>
                            <TextField 
                                id="update-owner-name"
                                label="Owner Name"
                                onChange={e => handleNewNameInfo(e)}
                                defaultValue={owner.name}
                            />
    
                            <TextField 
                                id="update-owner-contact"
                                label="Owner Contact"
                                onChange={e => handleNewContactInfo(e)}
                                defaultValue={owner.contact}
                            />
                        </Box>

                        <Box display={"flex"} justifyContent={"space-evenly"}>
                            <Button 
                                color="error"
                                onClick={handleClose}
                            >
                            Cancel
                            </Button>
                            <Button 
                                onClick={sendOwnerNewInfos}
                                variant="contained"
                            >
                            Update
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </ThemeProvider>
        </div>
    )
}