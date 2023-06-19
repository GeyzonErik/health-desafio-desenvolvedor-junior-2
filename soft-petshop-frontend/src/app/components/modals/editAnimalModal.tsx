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
import { FaPen } from "react-icons/fa";
import { modalStyle, theme } from "../themes";

export function EditAnimalModal({ animal }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newAnimalName, setNewAnimalName] = useState(`${animal.name}`);
  const [newAnimalAge, setNewAnimalAge] = useState(animal.age);
  const [newAnimalType, setNewAnimalType] = useState(`${animal.type}`);
  const [newAnimalBreed, setNewAnimalBreed] = useState(`${animal.breed}`);

  function handleNewNameInfo(event: any) {
    event.preventDefault();
    let animalNewName = event.target.value;
    setNewAnimalName(animalNewName);
  }

  function handleNewAgeInfo(event: any) {
    event.preventDefault();
    let animalNewAge = parseInt(event.target.value);
    setNewAnimalAge(animalNewAge);
  }

  function handleNewTypeInfo(event: any) {
    event.preventDefault();
    let animalNewType = event.target.value;
    setNewAnimalType(animalNewType)
  }

  function handleNewBreedInfo(event: any) {
    event.preventDefault();
    let animalNewBreed = event.target.value;
    setNewAnimalBreed(animalNewBreed)
  }

  async function sendOwnerNewInfos() {
    try {
        await fetch(`http://localhost:3001/animal/${animal.id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: newAnimalName,
                age: newAnimalAge,
                type: newAnimalType,
                breed: newAnimalBreed,
            }),
            headers: {
                "content-type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => data)

    } catch(error) {
        console.log(error);
    }

    handleClose()
    window.location.reload()
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button startIcon={<FaPen />} onClick={handleOpen}>
          Edit
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
              You're now editing {animal.name}!
            </Typography>

            <Box margin={3}>
              <Grid
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                container
                rowSpacing={2}
              >
                <Grid item>
                  <TextField
                    id="update-animal-name"
                    label="Animal Name"
                    onChange={(e) => handleNewNameInfo(e)}
                    defaultValue={animal.name}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="update-animal-age"
                    label="Animal Age"
                    type="number"
                    onChange={(e) => handleNewAgeInfo(e)}
                    defaultValue={animal.age}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="update-animal-breed"
                    label="Animal type"
                    onChange={(e) => handleNewTypeInfo(e)}
                    defaultValue={animal.type}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="update-animal-type"
                    label="Animal breed"
                    onChange={(e) => handleNewBreedInfo(e)}
                    defaultValue={animal.breed}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box display={"flex"} justifyContent={"space-evenly"}>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={sendOwnerNewInfos} variant="contained">
                Update
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
