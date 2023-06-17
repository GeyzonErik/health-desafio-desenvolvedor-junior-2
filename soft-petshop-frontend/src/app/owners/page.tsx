"use client";

import { Avatar, Box, Button, ThemeProvider} from "@mui/material";
import { useEffect, useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { theme } from "../components/themes";
import OwnerModal from "../components/modals/createOwnerModal";
import { DeleteModal } from "../components/modals/deleteModal";

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

        <Box>
          {owners.map((owner: any) => (
            <ul key={owner.id}>
              <li>
                <Avatar>{owner.name[0]}</Avatar>
              </li>
              <li>Name: {owner.name}</li>
              <li>
                <Button
                  startIcon={<FaPen />}
                >
                  Edit
                </Button>
              </li>
              <li>
               <DeleteModal owner={owner} />  
              </li>
              <li>Contact: {owner.contact}</li>
            </ul>
          ))}
        </Box>

      </ThemeProvider>
      
    </div>
  );
}
