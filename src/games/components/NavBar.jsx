import {  MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
 
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <AppBar 
    position="fixed" 
    sx={{ 
    backgroundColor: "secondary.tranparent",
    boxShadow: 'none'
    
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <Button variant="text" color="inherit" >
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
