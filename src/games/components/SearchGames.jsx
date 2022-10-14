import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hook";
import { reset, setSearchGames } from "../../store/game";

export const SearchGames = () => {
  const textSearch = useSelector((state) => state.games.searchGames);
  //console.log({textSearch})
  // const navigate = useNavigate();

  // // const navigate=useNavigate();
  // const location = useLocation();
  // console.log({ location });
  // const { q = textSearch } = queryString.parse(location.search);
  // console.log({ q });

  const dispatch = useDispatch();
  const { searchText, onInputChange } = useForm({
    searchText: textSearch,
  });

  // console.log({ searchText });

  

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (searchText !== textSearch) {
      dispatch(reset());
    }
    // navigate(`?q=${searchText}`);
    dispatch(setSearchGames({ searchGames: searchText }));
  };
  
  


  return (
    <form onSubmit={onSearchSubmit}>
      <Grid container>
        <Grid item className="input-games">
          <TextField
            label="Game search"
            variant="outlined"
            type="text"
            name="searchText"
            placeholder="Buscar"
            value={searchText}
            onChange={onInputChange}
          />
          <Button
            disabled={searchText === "" ? true : false}
            type="submit"
            className="ov-btn-slide-left"
            sx={{ height: 42, marginLeft: 1 }}
            variant="outlined"
            color="primary"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
