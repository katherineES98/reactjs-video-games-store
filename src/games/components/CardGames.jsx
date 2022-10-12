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
import { Link } from "react-router-dom";

const defaultImage =
  "https://i.pcmag.com/imagery/roundups/38133..v1594409362.jpg";

const dollars = "$";

export const CardGames = ({
  thumb,
  cheapest,
  external,
  gameID,
  date,
  showButton = true,
}) => {
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
          <CardContent sx={{height:80}}>
            <div >
            <Typography gutterBottom variant="p" component="p" mr="5">
              {external}
            </Typography>
            </div>
         
            <Typography variant="body2" color="textSecondary" component="p">
              cheapest: {dollars}{cheapest}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {showButton && (
            <Link
              className="btn-detail"
              to={`/detail/${gameID}`}
              size="small"
              color="primary"
            >
              <Button size="small" color="primary">
                See more
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </>
  );
};
