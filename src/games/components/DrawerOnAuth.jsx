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

export const DrawerOnAuth = () => {
  const [openLink, setOpenLink] = useState(false);
  return (
    <>
      <Drawer open={openLink} onClose={() => setOpenLink(false)}>
        <List>
          <ListItem onClick={() => setOpenLink(false)}>
            <Button variant="text" color="inherit">
              <NavLink
                to="/auth/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>
            </Button>
          </ListItem>
          <Divider color="white" />
          <ListItem onClick={() => setOpenLink(false)}>
            <Button variant="text" color="inherit">
              <NavLink
                to="/auth/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </NavLink>
            </Button>
          </ListItem>
          <Divider color="white" />
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
      onClick={() => setOpenLink(!openLink)}
      >
        {/* <MenuIcon /> */}
        <MenuOutlined />
      </IconButton>
    </>
  );
};
