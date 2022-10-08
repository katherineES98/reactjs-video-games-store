import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const dollars= "$"

export const ItemStore = ({storeName,isActive,images,price,retailPrice,savings}) => {
  //  console.log(import.meta.env.VITE_API_IMG_URL + images.logo )
    console.log(images)
  return (
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
               {storeName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Price: {dollars}{price}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Retail Price:{dollars}{retailPrice}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
             Savings:{dollars}{savings}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            component="img"
            sx={{ width: 220 }}
            image={import.meta.env.VITE_API_IMG_URL + images.logo}
            alt="Live from space album cover"
          />
        </Card>
      </Box>
    </Grid>
  );
};






