import {
  AppBar,

  Grid,

  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useCheckAuth } from "../../hook";
import { LinksUser } from "./LinksUser";
import { LinksOnAuth } from "./LinksOnAuth";

export const NavBar = () => {
  //const status = useCheckAuth();
  const { displayName } = useSelector((state) => state.auth);

  const status = useCheckAuth();
  return (
    <AppBar
    className="nav-bar"
      position="fixed"
      sx={{
        backgroundColor:
          status === "authenticated"
            ? "secondary.main"
            : "secondary.tranparent",

        boxShadow: "none",
      }}
    >
      <Toolbar>
       
        <Grid container alignItems="start">
          <Typography  sx={{
        fontFamily: "Barlow,sans-serif",
        fontWeight: "bold",

      }} className="text-name"  variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          {/* enlaces  */}
          {status === "authenticated" ? <LinksUser /> : <LinksOnAuth />}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
