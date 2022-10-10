import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
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
  //  console.log(import.meta.env.VITE_API_IMG_URL + images.logo )
  console.log(images);
  return (
    <ImageListItem className="border-img">
      <img
        src={`${
          import.meta.env.VITE_API_IMG_URL + images.logo
        }?w=248&fit=crop&auto=format`}
        srcSet={`${
          import.meta.env.VITE_API_IMG_URL + images.logo
        }?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={storeName}
        loading="lazy"
        className="img-store"
      />

      <ImageListItemBar
        //

        title={
          <ul>
            <li>
              {
                <span>
                  Price: {dollars}
                  {price}{" "}
                </span>
              }
            </li>
            <li>
              {
                <span>
                  Retail Price:{dollars}
                  {retailPrice}{" "}
                </span>
              }
            </li>
            <li>
              {
                <span>
                  Savings:{dollars}
                  {savings}
                </span>
              }
            </li>
          </ul>
        }
        position="below"
      />

      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            borderRadius:2
        }}
        title={<span><b>{storeName}</b></span>}
        position="top"
        actionIcon={
          <IconButton sx={{ color: "white" }} aria-label={`star ${storeName}`}>
            {/* <StarBorderIcon /> */}
          </IconButton>
        }
        actionPosition="left"
      />
    </ImageListItem>
  );
};
