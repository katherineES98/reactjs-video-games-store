
import {AppBar,Button,Grid,IconButton,Toolbar,Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { useCheckAuth } from "../../hook";
import { LinksUser } from "./LinksUser";
import { LinksOnAuth } from "./LinksOnAuth";


export const NavBar = () => {
  

  //const status = useCheckAuth();
  const {displayName}=useSelector(state=>state.auth)
 
  const status = useCheckAuth();
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
          {/* enlaces  */}
          {
           (status ==='authenticated')
           ?   <LinksUser />
           :   <LinksOnAuth />
          }

        <Typography variant='h6' noWrap component='div'> 
        { displayName}
         </Typography>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
