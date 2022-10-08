import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  Paper,
} from "@mui/material";
import React from "react";
import { getDate } from "../../const";

export const GameDetails = ({ game, stores }) => {
  
  return (
    <>
      <Grid className="container-detail" container sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography className="text-title">{game.info.title}</Typography>
          <Box
            className="image-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* border={1} */}
            <div className="contenedor">
              <img
                src={game.info.thumb}
                // "https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_%5E_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"
                // {game.info.thumb}
                //  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                className="img-detail"
                alt="hola"
                loading="lazy"
              />
              <div className="texto-encima">
                <Typography>Price: ${game.cheapestPriceEver.price},</Typography>
              </div>
              <div className="centrado">
                <Typography>
                  date: {getDate(new Date(game.cheapestPriceEver.date))}
                </Typography>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* ofertas */}

      <Typography className="title-store">
        Stores with available game offers
      </Typography>

      <Grid
        container
        style={{
          marginLeft: 15,
        }}
        spacing={1}
      >
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Box>
            <Card
              style={{
                boxShadow: "0px 1px 10px rgba(1,2,2,2.2)",
                cursor: "default",
                transition: "all 400ms ease-out",
              }}
              sx={{ display: "flex", width: 400 }}
            >
              <div sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Price:16.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Retail Price:19.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Savings:15.007504
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                component="img"
                sx={{ width: 220 }}
                image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2021/10/30-mejores-juegos-lectores-hobby-consolas-2515693.jpg?itok=6o3aE-1w"
                alt="Live from space album cover"
              />
            </Card>
          </Box>
        </Grid>

        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Box>
            <Card
              style={{
                boxShadow: "0px 1px 10px rgba(1,2,2,2.2)",
                cursor: "default",
                transition: "all 400ms ease-out",
              }}
              sx={{ display: "flex", width: 400 }}
            >
              <div sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Price:16.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Retail Price:19.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Savings:15.007504
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                component="img"
                sx={{ width: 220 }}
                image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2021/10/30-mejores-juegos-lectores-hobby-consolas-2515693.jpg?itok=6o3aE-1w"
                alt="Live from space album cover"
              />
            </Card>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <Box>
            <Card
              style={{
                boxShadow: "0px 1px 10px rgba(1,2,2,2.2)",
                cursor: "default",
                transition: "all 400ms ease-out",
              }}
              sx={{ display: "flex", width: 400 }}
            >
              <div sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Price:16.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Retail Price:19.99
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Savings:15.007504
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                component="img"
                sx={{ width: 220 }}
                image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2021/10/30-mejores-juegos-lectores-hobby-consolas-2515693.jpg?itok=6o3aE-1w"
                alt="Live from space album cover"
              />
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* 
        <Grid container >
        <Grid item  xs={6} sm={4} md={4} >
        <Box border={2}> hola1   </Box>
  </Grid>

  <Grid item xs={12} sm={8}  md={6}>

  <Box border={2}>  hola2  </Box>
  </Grid>
  
        </Grid> */}
    </>
  );
};

{
  /* <h1>GameDetails</h1>
      <ul>
        <li>{game.info.title}</li>
        <li>{game.cheapestPriceEver.price}</li>
      </ul> */
}
