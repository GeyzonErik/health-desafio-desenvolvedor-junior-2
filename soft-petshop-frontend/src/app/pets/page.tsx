"use client";

import { useEffect, useState } from "react";
import { Box, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../components/themes";
import { DeleteModal } from "../components/modals/deleteModal";
import { FaUser } from "react-icons/fa";
import { OwnerVisualize } from "../components/modals/ownerVisualizeModal";
import { EditAnimalModal } from "../components/modals/editAnimalModal";

export default function Pets() {
  const [animals, setAnimals] = useState([]);

  const fetchAllAnimals = async () => {
    try {
      await fetch("http://localhost:3001/animals", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setAnimals(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllAnimals();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Pets</h1>

        <Box marginLeft={5}>
          <Grid
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            container
            rowSpacing={6}
            marginTop={7}
          >
            {animals.map((animal: any) => (
              <Grid
                item
                key={animal.id}
                marginLeft={2}
                marginTop={3}
                padding={5}
                sx={{
                  border: 2,
                  borderRadius: 1.6,
                  borderColor: "primary.main"
                }}
                xs={3}
              >
                <Box marginBottom={3}>
                    <Typography>name: {animal.name}</Typography>
                    <Typography>age: {animal.age}</Typography>
                    <Typography>type: {animal.type}</Typography>
                    <Typography>breed: {animal.breed}</Typography>
                </Box>

                <Box display={"flex"} justifyContent={"space-around"}>
                    <EditAnimalModal animal={animal} />
                    <DeleteModal label={animal} path={"animal"} />
                </Box>
                <Box textAlign={"center"}>
                  <OwnerVisualize label={animal} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}
