import { FullscreenExit, Search } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hook";
import { reset, setPage, setSearchGames } from "../../store/game";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
//import '../pages/GamePage/styles.css'

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
    <form  onSubmit={onSearchSubmit}>
      <Grid container  >
        <Grid item   className="input-games">
          <TextField
          
         
           label="Game search"
            variant="outlined"
            type="text"
            name="searchText"
            placeholder="Buscar"  
            value={searchText}
            onChange={onInputChange}
            sx={{ width:500}}
          />
          <Button 
           type="submit"
          className="ov-btn-slide-left"
          sx={{height: 42, marginLeft:1}}
          variant="outlined" color="primary" >
          Search
 </Button>


        </Grid>
{/* 
        <Button sx={{ height: 35, mt: 2 }} variant="contained" color="primary">
          Search
        </Button> */}






        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              
              name="searchText"
           
              value={searchText}
              onChange={onInputChange}
            />
          </Search> */}
      </Grid>
    </form>
  );
};
