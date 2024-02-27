import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export const PrimaryItemSkaleton = () => {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      spacing={4}
      container
    >
      <Grid item>
        <Skeleton variant="circular" width={200} height={150} />
      </Grid>
      <Grid item>
        <Skeleton variant="rectangular" width={300} height={150} />
      </Grid>
      <Grid item>
        <Skeleton variant="rectangular" width={300} height={150} />
      </Grid>
      {/* <Skeleton variant="rectangular" width={210} height={100} />
      <Skeleton variant="rounded" width={210} height={100} /> */}
    </Grid>
  );
};
