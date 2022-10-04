import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from '../../hook';

export const SearchGames = () => {

    const { searchText, onInputChange } = useForm({
        searchText: '',
  
      });


    const onSearchSubmit=(event)=>{
        event.preventDefault();
        console.log({searchText})
    }

  return (
    <form onSubmit={onSearchSubmit}>

    <Grid container >
    <Grid item  >
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

              <Button
              sx={{height:35, mt:4}}
               variant="contained" color="primary">
  Search
</Button>

    </Grid>
    
    
    </form>
  )
}
