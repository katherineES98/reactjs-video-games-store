import { LogoutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
//import { startLogout } from "../../store/auth";

import { startLogout } from "../../store/auth";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { DrawerUser } from "./DrawerUser";
// import { useTheme } from "styled-components";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const LinksUser = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const onLogout = () => {
    // console.log('logout')
    dispatch(startLogout());
  };
  return (
    <>
      {isResponsive ? (
        <DrawerUser />
      ) : (
        <>
          <Button variant="text">
            <NavLink
              to="/savegames"
              style={{
                textDecoration: "none",
                color: "#4df0e0",
                fontWeight: "bold",
                fontFamily: "Barlow,sans-serif",
              }}
            >
              My Games
            </NavLink>
          </Button>
          <Button variant="text" color="inherit">
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#4df0e0",
                fontWeight: "bold",
                fontFamily: "Barlow,sans-serif",
              }}
            >
              Games
            </NavLink>
          </Button>
          <IconButton sx={{ color: "#4df0e0" }} onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </>
      )}
    </>
  );
};
