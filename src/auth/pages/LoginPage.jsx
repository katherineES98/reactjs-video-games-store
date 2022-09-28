import { useDispatch } from "react-redux";
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

import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

  //dispatch 
  const dispatch = useDispatch();
   //Formulario  que es lo que deseo que tenga
   const { email, password, onInputChange, formState } = useForm({
    email: 'katherine@google.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log({ email, password });
    dispatch(checkingAuthentication())
  };

  const onGoogleSingIn =()=>{
    //console.log('google')
    dispatch(startGoogleSignIn())

  }


  return (

    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://indiehoy.com/wp-content/uploads/2020/09/high-score.jpg)",
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
            Sign in
          </Typography>
          <form  onSubmit={onSubmit} >
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              label="Email Address"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          {/** xs={ 12 }  en pnatlla pequenas 12  columnas y tomara todo el ancho posible , el ancho es de 12 psiciones y si es xs de 6 seria la mita y xs de 12 es de 12 columnas , extrai extra sx={{ mt: 2 }} con margin top de 2*/}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

      

          {/** spacin 2entre sus hijos margin botoom mb y sx  extra psize */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
            
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1, mb: 1}}
                //usarlos en los botones esa const con la propiedad disable
                // disabled={isAuthehticating} // si esta autenticado estara desabilitado
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1, mb: 1 }}
                onClick={onGoogleSingIn}
                // onClick={onGoogleSignIn}
                // disabled={isAuthehticating} // si esta autenticado estara desabilitado
              >
                
                {/** margin left ml */}
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
          <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  component={RouterLink}
                  to="/auth/register"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> 
          </Grid>
        </Grid>
            
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
