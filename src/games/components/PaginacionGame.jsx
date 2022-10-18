import { Pagination } from "@mui/material";
import React from "react";
import { dataForPage } from "../../store/game";


export const PaginacionGame = ({numberOfPages,eventPage}) => {
  
  return (
    <div className="pagination">
      <Pagination
      //cantidad debotones que me moestrara ,
        count={numberOfPages/dataForPage} 
        variant="outlined"
        color="secondary"
        onChange={(value,index)=>{eventPage(index)}}
      />
    </div>
  );
};
