import { Pagination } from "@mui/material";
import React from "react";
import { dataForPage } from "../../store/game";


export const PaginacionGame = ({numberOfPages,eventPage}) => {
  return (
    <div className="pagination">
      <Pagination
        count={numberOfPages/dataForPage}
        variant="outlined"
        color="secondary"
        onChange={(value,index)=>{eventPage(index)}}
      />
    </div>
  );
};

// display: flex!important;
//     align-items: center!important;
//     justify-content: center!important;
