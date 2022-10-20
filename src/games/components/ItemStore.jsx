
import {

  Grid,
  Box,
  Typography,
  ImageList,
  Button,
  ImageListItemBar,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
 
} from "@mui/material";
import React from "react";

const dollars = "$";

export const ItemStore = ({
  storeName,
  isActive,
  images,
  price,
  retailPrice,
  savings,
}) => {
  return (
   <>
   <Card className="card-store">
      <CardActionArea>
        <CardMedia
          className="class-img"
          component="img"
         height="150" 
          image={`${import.meta.env.VITE_API_IMG_URL + images.logo}`}
          alt="green iguana"
        />



        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {storeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: {dollars}{price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Retail Price:{dollars}{retailPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Savings:{dollars}{savings}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
   
   </>
  );
};
