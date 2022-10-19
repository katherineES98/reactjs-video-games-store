import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DrawerOnAuth } from "./DrawerOnAuth";

export const LinksOnAuth = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isResponsive ? (
        <DrawerOnAuth />
      ) : (
        <>
         
          <Button variant="text" color="inherit">
            <NavLink
              to="/auth/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </NavLink>
          </Button>
          <Button variant="text" color="inherit">
            <NavLink
              to="/auth/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </NavLink>
          </Button>
        </>
      )}
    </>
  );
};
