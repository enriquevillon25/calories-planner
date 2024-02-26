import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Container,
  Button,
} from "@mui/material";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Person3 from "@mui/icons-material/Person3";
import { usePlanner } from "../../hooks/usePlanner";
import { FormModal } from "../../components/FormModal/FormModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { format } from "@formkit/tempo";

export const HomePage = () => {
  const style = {
    // width: "60%",
    margin: 0,
  };
  const {
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
    totalCaloriesByDay,
    handleModalAddFood,
    redirectProfile,
  } = usePlanner();

  console.log("entrity food", entrityFoods);
  const date = new Date();
  return (
    <Fragment>
      <HeaderComponent
        onAdd={handleModalAddFood}
        title={format(date, "full")}
        onCLick={redirectProfile}
        icon={<Person3 />}
      >
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleModalAddFood}
        >
          Add
        </Button>
      </HeaderComponent>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center">
          {totalCaloriesByDay()}
        </Typography>
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
              key={food.id}
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
