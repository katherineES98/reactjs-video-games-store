import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hook";
import { reset, setPage, setSearchGames } from "../../store/game";

export const SearchGames = ({ getDataGame }) => {
  const textSearch = useSelector((state) => state.games.searchGames);
  const dispatch = useDispatch();
  const { searchText, onInputChange } = useForm({
    searchText: textSearch,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //console.log({ searchText });
    // dispatch(setPage({page: 10}));
    dispatch(reset());
    dispatch(setSearchGames({ searchGames: searchText }));
    // getDataGame();
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <Grid container>
        <Grid item>
          <TextField
            margin="normal"
            label="Search input"
            variant="outlined"
            type="text"
            name="searchText"
            placeholder="Buscar"
            fullWidth
            value={searchText}
            onChange={onInputChange}
          />
        </Grid>

        <Button sx={{ height: 35, mt: 4 }} variant="contained" color="primary">
          Search
        </Button>
      </Grid>
    </form>
  );
};
