import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme, modalStyle } from "../themes";
import { FaPaw } from "react-icons/fa";

export default function CreateAnimalModal({ ownerName, ownerId }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState(0);
  const [animalType, setAnimalType] = useState("");
  const [animalBreed, setAnimalBreed] = useState("N/A");

  function handleAnimalName(event: any) {
    event.preventDefault();
    let animalName = event.target.value;
    setAnimalName(animalName);
  }
  function handleAnimalAge(event: any) {
    event.preventDefault();
    let animalAge = parseInt(event.target.value);
    setAnimalAge(animalAge);
  }
  function handleAnimalType(event: any) {
    event.preventDefault();
    let animalType = event.target.value;
    setAnimalType(animalType);
  }
  function handleAnimalBreed(event: any) {
    event.preventDefault();
    let animalBreed = event.target.value;
    setAnimalBreed(animalBreed);
  }

  async function createNewAnimal() {
    try {
      await fetch("http://localhost:3001/animals", {
        method: "POST",
        body: JSON.stringify({
          name: animalName,
          age: animalAge,
          type: animalType,
          breed: animalBreed,
          ownerId: parseInt(ownerId),
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }

    handleClose();
  }

  return (
    <Box margin={2}>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} startIcon={<FaPaw />}>
          Add Animal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "primary.dark" }}
            >
              Add an animal to {ownerName}
            </Typography>

            <Box margin={3}>
              <Grid
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                container
                rowSpacing={2}
              >
                <Grid item>
                  <TextField
                    id="create-animal-name"
                    label="Animal Name"
                    onChange={(e) => handleAnimalName(e)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="create-animal-age"
                    label="Animal Age"
                    type="number"
                    onChange={(e) => handleAnimalAge(e)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="create-animal-breed"
                    label="Animal type"
                    onChange={(e) => handleAnimalType(e)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="create-animal-type"
                    label="Animal breed"
                    onChange={(e) => handleAnimalBreed(e)}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box display={"flex"} justifyContent={"space-evenly"}>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                sx={{ color: "secondary.main" }}
                variant="contained"
                onClick={createNewAnimal}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </Box>
  );
}
