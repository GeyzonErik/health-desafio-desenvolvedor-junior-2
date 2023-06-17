"use client";

import { Avatar, Button, ThemeProvider} from "@mui/material";
import { useEffect, useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { theme } from "../components/themes";
import OwnerModal from "../components/modal";

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

    fetchAllOwners();
  };


  useEffect(() => {
    fetchAllOwners();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Owners</h1>

        <OwnerModal />

        <ul>
          {owners.map((owner: any) => (
            <ul key={owner.id}>
              <li>
                <Avatar>{owner.name[0]}</Avatar>
              </li>
              <li>Name: {owner.name}</li>
              <li>
                <Button startIcon={<FaPen />}>Edit</Button>
              </li>
              <li>
                <Button 
                    color="error" 
                    startIcon={<FaTrash />}
                    onClick={e => deleteOwner(e, owner)}
                >
                  Exluir
                </Button>
              </li>
              <li>Contact: {owner.contact}</li>
            </ul>
          ))}
        </ul>
      </ThemeProvider>
    </div>
  );
}
