import { MenuOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../store/auth";
import "../pages/GamePage/styles.css";


export const DrawerUser = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    // console.log('logout')
    dispatch(startLogout());
  };

  const [openLink, setOpenLink] = useState(false);
  return (
    <>
      <Drawer  
      open={openLink } 
   
      onClose={() => setOpenLink(false)}>
        <List >
          <ListItem onClick={() => setOpenLink(false)}>
            <Button variant="text" color="inherit">
              <Link  style={{ textDecoration: "none" ,color:"#4df0e0", fontWeight:"bold",fontFamily: "Barlow,sans-serif"}} to="/savegames">My Games</Link>
            </Button>
          </ListItem>
          <Divider  color="white"/>
          <ListItem onClick={() => setOpenLink(false)}>
            <Button variant="text" color="inherit">
              <Link  style={{ textDecoration: "none" ,color:"#4df0e0", fontWeight:"bold",fontFamily: "Barlow,sans-serif"}} to="/">Games</Link>
            </Button>
          </ListItem>
          <Divider  color="white" />
          <ListItem onClick={() => setOpenLink(false)}>
            <Button variant="text" color="inherit" onClick={onLogout}>
              <Link style={{ textDecoration: "none" ,color:"#4df0e0", fontWeight:"bold",fontFamily: "Barlow,sans-serif"}}>Sign out</Link>
            </Button>
          </ListItem>
          <Divider  color="white" />
        </List>
      </Drawer>
      <IconButton 
          sx={{ color: "white" }}
          onClick={() => setOpenLink(!openLink)}>
        {/* <MenuIcon /> */}
        <MenuOutlined />
      </IconButton>
    </>
  );
};
