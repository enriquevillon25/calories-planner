import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";

export const FormModal: React.FC<any> = ({
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
    width: 300,
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
      <Box sx={style} component={"form"}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          Add Food
        </Typography>
        <Grid
          container
          justifyContent={"start"}
          flexDirection={"column"}
          gap={2}
        >
          <TextField
            label="Name"
            variant="standard"
            value={inputNameAdd}
            onChange={(event: any) => setInputNameAdd(event.target.value)}
          />
          <TextField
            label="Calories"
            variant="standard"
            value={inputCaloriesAdd !== undefined ? inputCaloriesAdd : ""}
            onChange={(event: any) => {
              setInputCaloriesAdd(event.target.value);
            }}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                onClick={send}
                variant="contained"
                disabled={
                  inputNameAdd === "" ||
                  inputCaloriesAdd === "" ||
                  inputCaloriesAdd === undefined
                }
                type="submit"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
