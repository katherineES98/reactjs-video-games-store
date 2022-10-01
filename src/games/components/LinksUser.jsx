

import { LogoutOutlined } from '@mui/icons-material';
import { useDispatch } from "react-redux";
//import { startLogout } from "../../store/auth";


import { startLogout } from '../../store/auth';
import { IconButton } from '@mui/material';
export const LinksUser = () => {
    const dispatch= useDispatch();
    const onLogout =()=>{
      // console.log('logout')
       dispatch(startLogout())
    }
  return (
    <>
     <IconButton color="inherit" onClick={ onLogout}><LogoutOutlined /></IconButton>
    </>
  )
}
