import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const defaultImage =
  "https://i.pcmag.com/imagery/roundups/38133..v1594409362.jpg";

export const CardGames = ({ internalName, thumb, cheapest }) => {
  const [image, setImage] = useState(thumb || defaultImage);

  const setDefaultImage = () => {
    setImage(defaultImage);
  };

  return (
    <>
      <Card
        className="style-card"
        style={{
          boxShadow: "0px 1px 10px rgba(1,2,2,2.2)",
          cursor: "default",
          transition: "all 400ms ease-out",
        }}
        sx={{ margin: 1 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={image}
            title="Contemplative Reptile"
            onError={setDefaultImage}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              {internalName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              cheapest: {cheapest}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Save
          </Button>
          <Button size="small" color="primary">
            See more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
