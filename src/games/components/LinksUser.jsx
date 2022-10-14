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
      <Button variant="text" >
        <NavLink
          to="/savegames"
          style={{ textDecoration: "none" ,color:"#4df0e0", fontWeight:"bold",fontFamily: "Barlow,sans-serif",}}
          
        >
          My Games
        </NavLink>
      </Button>
      <Button variant="text" color="inherit">
        <NavLink
          to="/"
          style={{ textDecoration: "none" ,color:"#4df0e0", fontWeight:"bold",fontFamily: "Barlow,sans-serif",}}
        >
          Games
        </NavLink>
      </Button>
      <IconButton sx={{color:"#4df0e0"}} onClick={onLogout}>
        <LogoutOutlined />
      </IconButton>
    </>
  );
};
