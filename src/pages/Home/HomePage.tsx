import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Container,
} from "@mui/material";
import { usePlanner } from "../hooks/usePlanner";
import { FormModal } from "../components/FormModal/FormModal";
import { HeaderComponent } from "../components/Header/HeaderComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const HomePage = () => {
  const style = {
    // width: "60%",
    margin: 0,
  };
  const {
    handleModalAddFood,
    modalAddFood,
    closeModalAddFood,
    entrityFoods,
    handleModalEditFood,
    inputCaloriesAdd,
    inputNameAdd,
    setInputCaloriesAdd,
    setInputNameAdd,
    deleteFood,
    sendModalFood,
  } = usePlanner();

  return (
    <Fragment>
      <HeaderComponent onAdd={handleModalAddFood} />
      <Container maxWidth="lg">
        <List sx={style}>
          {entrityFoods.map((food: any) => (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteFood(food.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={food.name} sx={{ width: "50%" }} />
              <ListItemText primary={food.calories} />
              <ListItemIcon>
                <IconButton
                  edge="end"
                  onClick={() => handleModalEditFood(food.id)}
                >
                  <EditIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Container>
      <FormModal
        open={modalAddFood}
        onClose={closeModalAddFood}
        inputCaloriesAdd={inputCaloriesAdd}
        setInputCaloriesAdd={setInputCaloriesAdd}
        inputNameAdd={inputNameAdd}
        setInputNameAdd={setInputNameAdd}
        send={sendModalFood}
      />
    </Fragment>
  );
};
