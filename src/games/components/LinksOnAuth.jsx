import React from 'react'
import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
export const LinksOnAuth = () => {
  return (
  <>
   <> 
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
  </>
  
  
  </>
  )
}
