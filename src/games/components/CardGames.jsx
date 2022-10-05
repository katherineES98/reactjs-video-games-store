import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
//import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha, makeStyles } from "@mui/material/styles";

export const CardGames = ({ game }) => {
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
            image={game.thumb}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              {game.internalName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              cheapest: {game.cheapest}
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

// <Card
//    sx={ {maxWidth: 300, margin:1 }}
//    >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="200"
//           image="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>

//     {/* otra */}

//     <Card
//    sx={ {maxWidth: 300, margin:1 }}
//    >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="200"
//           image="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>

//      {/* otra */}

//      <Card
//    sx={ {maxWidth: 300, margin:1 }}
//    >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="200"
//           image="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//  {/* otra */}

//  <Card
//    sx={ {maxWidth: 300, margin:1 }}
//    >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="200"
//           image="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>

{
  /* <Grid container sx={{ marginTop: 2 }}>
{games.map((game) => (
  <Card key={game.gameID}
  sx={ {minWidth: 350, margin:1 }}
  >
     <CardActionArea
      
     >
       <CardMedia
         component="img"
         alt="Contemplative Reptile"
         height='150'
        //  sx={{
        //   height: 233,
        //   width: 350,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        //   }}
    
         image={game.thumb}
         title="Contemplative Reptile"
        
       />
       <CardContent>
         <Typography 
         sx={{fontSize: 10}}
         gutterBottom variant="p" component="h4">
         {game.internalName}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         cheapest: {game.cheapest}
          
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
         Share
       </Button>
       <Button size="small" color="primary">
         Learn More
       </Button>
     </CardActions>
   </Card>
      
      // <li key={game.gameID}>{game.internalName}</li>
    ))}



</Grid> */
}
