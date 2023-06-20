'use client'
import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from "@mui/material";
import { FaLinkedin, FaPaw } from "react-icons/fa";
import { theme } from "./components/themes";

export default function Home() {

  const texts: Array<String> = [
    'Form Validation Input',
    'Pet and Owner Photos',
    'Admin login mode',
  ] 

  return (
    <div>
      <h1>
        DASHBOARD
      </h1>

      <ThemeProvider theme={theme}>
        <Box margin={5} >
          <Typography>
            Soft PetShop is just a simple PetShop CRUD for the SoftMakers Test
          </Typography>
          <List>
            <ListSubheader>
              Things to improve:
            </ListSubheader>
            
            {texts.map(text => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'red' }}>
                    <FaPaw />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={text} />
              </ListItem>
            ))}
  
          </List>
        </Box>
  
        <Box>
          <List>
            <ListSubheader>
              You can send me your impressions by:
            </ListSubheader>
            <ListItem>
              <ListItemAvatar>
                <Link href="https://www.linkedin.com/in/geyzoncosta/" target="_blank">
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <FaLinkedin />
                  </Avatar>
                </Link>
              </ListItemAvatar>
            </ListItem>
          </List>
        </Box>
      </ThemeProvider>
    </div>
  )
}
