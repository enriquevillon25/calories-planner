import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Person3 from "@mui/icons-material/Person3";
import AddIcon from "@mui/icons-material/Add";

export const HeaderComponent = ({ title, onCLick, icon, children }: any) => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onCLick}
        >
          {icon}
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          align="left"
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};
