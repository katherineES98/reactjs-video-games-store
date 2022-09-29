import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hook";
import { useDispatch,useSelector } from "react-redux";
import { useMemo } from 'react';
import { useState } from 'react';
import { startRegisterUserWithEmailPassword } from "../../store/auth";
import { Alert } from "@mui/material";


const formData={
  email:'',
  password:'',
  displayName:''

}

const formValidations={
  
  email:[(value)=> value.includes('@'),'The email must have an @'],//mandar una funcion para evaluar la validacion 
  password:[(value)=> value.length >=6,'The password must have more than 6 letters'],
  displayName:[(value)=>value.length>=1, 'Name is required']
}

export const RegisterPage = () => {
  const dispatch=useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage}= useSelector(state=>state.auth)
  //bloquear el boton  mientras carga
  const isCheckingAuthentication=useMemo(()=>status==='checking',[status])
 
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData,formValidations);
//console.log(displayNameValid)
  

  const onSubmit = (event) => {
    event.preventDefault();
   // console.log(formState);
    setFormSubmitted(true);

    if(!isFormValid)return;

    dispatch(startRegisterUserWithEmailPassword (formState))
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://img.unocero.com/2021/11/Videojuegos-fuentes-de-informacion-gamers-.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Name"
                  type="text"
                  placeholder="Name"
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  //si lo pongo aqui true erro={true} si no lo puedo dejar como error porque es por defecto
                  error={!!displayNameValid && formSubmitted } //si el error esta fale se desaparec lo rojo pero por eso hay que estra jugando con eso
                  helperText={displayNameValid}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="email"
                  type="email"
                  placeholder="email"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}

                  error={!!emailValid && formSubmitted} //si el error esta fale se desaparec lo rojo pero por eso hay que estra jugando con eso
                  helperText={emailValid}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Password"
                  type="Password"
                  placeholder="Password"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}

                  error={!!passwordValid && formSubmitted} //si el error esta fale se desaparec lo rojo pero por eso hay que estra jugando con eso
                  helperText={passwordValid}
                />
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
              item xs={12} display={!!errorMessage ? '': 'none'}>
                 <Alert 
                 severity='error'>{errorMessage} </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={isCheckingAuthentication}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                   Register
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
              
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    component={RouterLink}
                    to="/auth/login"
                  >
                    {"Already have an account? Sign in"}
                  </Link>
                  <h3> Form valid { isFormValid? 'Valid': 'Incorrecto' }</h3>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
