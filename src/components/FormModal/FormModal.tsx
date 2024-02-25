import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { usePlanner } from "../../pages/hooks/usePlanner";

export const FormModal = ({
  open,
  onClose,
  inputCaloriesAdd,
  setInputCaloriesAdd,
  inputNameAdd,
  setInputNameAdd,
  send,
}: any) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          Add Food
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={inputNameAdd}
            onChange={(event: any) => setInputNameAdd(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Calories"
            variant="standard"
            value={inputCaloriesAdd}
            onChange={(event: any) => setInputCaloriesAdd(event.target.value)}
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" onClick={() => send()}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
