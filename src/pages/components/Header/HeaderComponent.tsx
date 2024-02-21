import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Person3 from "@mui/icons-material/Person3";
import AddIcon from "@mui/icons-material/Add";

export const HeaderComponent = ({ onAdd }: any) => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Person3 />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Date
        </Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => {
            onAdd();
          }}
        >
          Add
        </Button>
      </Toolbar>
    </AppBar>
  );
};
