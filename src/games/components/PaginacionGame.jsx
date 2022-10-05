import { Pagination } from "@mui/material";
import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
//import Pagination from '@material-ui/lab/Pagination';
//import { makeStyles } from '@mui/material';

export const PaginacionGame = () => {
  return (
    <div className="pagination">
      <Pagination
        // sx={{ marginLeft: 50 }}
        count={10}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};

// display: flex!important;
//     align-items: center!important;
//     justify-content: center!important;
