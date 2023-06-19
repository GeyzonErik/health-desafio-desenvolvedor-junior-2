"use client";

import {
  Avatar,
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../components/themes";
import OwnerModal from "../components/modals/createOwnerModal";
import { DeleteModal } from "../components/modals/deleteModal";
import { EditOwnerModal } from "../components/modals/editOwnerModal";
import CreateAnimalModal from "../components/modals/createAnimalModal";

export default function Owners() {
  const [owners, setOwners] = useState([]);

  const fetchAllOwners = async () => {
    try {
      await fetch("http://localhost:3001/owners", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setOwners(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOwners();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Owners</h1>

        <OwnerModal />

        <Box marginLeft={5}>
          <Grid
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            container
            rowSpacing={6}
            marginTop={7}
          >
            {owners.map((owner: any) => (
              <Grid
                item
                key={owner.id}
                marginLeft={2}
                marginTop={3}
                padding={5}
                sx={{
                  border: 2,
                  borderRadius: 1.6,
                  borderColor: "primary.main",
                }}
                xs={3}
              >
                <Box display={"flex"} flexDirection={"column"} marginBottom={3}>
                  <Typography alignSelf={"center"} marginBottom={2}>
                    <Avatar sx={{ width: 72, height: 72 }}>
                      {owner.name[0]}
                    </Avatar>
                  </Typography>
                  <Typography>Name: {owner.name}</Typography>
                  <Typography>Contact: {owner.contact}</Typography>
                </Box>

                <Box display={"flex"} justifyContent={"space-around"}>
                  <EditOwnerModal owner={owner} />
                  <DeleteModal label={owner} path={"owner"} />
                </Box>
                <Box textAlign={"center"}>
                  <CreateAnimalModal ownerName={owner.name} ownerId={owner.id}/>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}
