import { LogoutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
//import { startLogout } from "../../store/auth";

import { startLogout } from "../../store/auth";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export const LinksUser = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    // console.log('logout')
    dispatch(startLogout());
  };
  return (
    <>
      <Button variant="text" color="inherit">
        <NavLink
          to="/savegames"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          library
        </NavLink>
      </Button>
      <Button variant="text" color="inherit">
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Games
        </NavLink>
      </Button>
      <IconButton color="inherit" onClick={onLogout}>
        <LogoutOutlined />
      </IconButton>
    </>
  );
};
