import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../../helpers";
import { getDataSaveGames } from "../../../store/game";
import { CardGames } from "../../components/CardGames";
import { NavBar, SearchGames } from "../../components";

export const SaveGamePage = () => {
  const dispatch = useDispatch();
  const { saveGames } = useSelector((state) => state.games);
  console.log("este es", { saveGames });

  useEffect(() => {
    dispatch(getDataSaveGames());
  }, []);

  return (
    <>
      {/* key={save.gameID} */}
      {/* <h1> Save Game </h1> */}

      <NavBar  />

      <Grid sx={{ marginTop: 10 }} container justifyContent="center">
        {saveGames.map((save) => (
          <Box key={save.id} className="card-pruea" width="300px">
            <CardGames
              thumb={save.game.info.thumb}
              external={save.game.info.title}
              cheapest={save.game.cheapestPriceEver.price}
              date={getDate(new Date(save.game.cheapestPriceEver.date))}
              showButton={false}
            />
          </Box>
        ))}
      </Grid>
    </>
  );
};

// <Box  className="card-pruea" width="300px">
{
  /* <CardGames  /> */
}

// <ul>
//   <li> {save.game.info.title}</li>
//   <li> {save.game.info.thumb}</li>
//   <li> {save.game.cheapestPriceEver.date}</li>
// </ul>  // thumb, cheapest, external,
//{save.game.cheapestPriceEver.price}

//   <Grid sx={{ marginTop: 10 }} container justifyContent="center">
//   {getDataForPage(games, currentPage).map((game) => (
//     <Box key={game.gameID} className="card-pruea" width="300px">
//       <CardGames {...game} />
//     </Box>
//   ))}
//   {games.length > 0 && (
//     <Grid container>
//       <PaginacionGame eventPage={setCurrentPage} numberOfPages={page} />
//     </Grid>
//   )}
// </Grid>
