
import {AppBar,Button,Grid,IconButton,Toolbar,Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = () => {
   const dispatch= useDispatch();
  const onLogout =()=>{
    // console.log('logout')
     dispatch(startLogout())
  }

  return (
    <AppBar 
    position="fixed"
    sx={{ 
    backgroundColor: "secondary.main",
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
     
               

                <IconButton color="inherit"
                   onClick={ onLogout}  
                >
                    <LogoutOutlined />
                </IconButton>
         
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
