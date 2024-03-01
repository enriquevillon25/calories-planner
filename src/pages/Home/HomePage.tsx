import { Fragment } from "react";
import { List, Container, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Person3 from "@mui/icons-material/Person3";
import { usePlanner } from "../../hooks/usePlanner";
import { FormModal } from "../../components/FormModal/FormModal";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { format } from "@formkit/tempo";
import { PrimaryItemComponent } from "../../components/PrimaryItem/PrimaryItemComponent";
import { PrimaryItemSkaleton } from "../../components/PrimaryItem/PrimaryItemSkaleton";
import { useAuth } from "../../hooks/useAuth";

export const HomePage = () => {
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
    isLoading,
  } = usePlanner();
  const { singOutSession } = useAuth();
  console.log("entrity food", entrityFoods);
  const date = new Date();
  const validateSingOunt = async () => {
    try {
      await singOutSession();
      redirectProfile();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <HeaderComponent
        onAdd={handleModalAddFood}
        title={format(date, "full")}
        onCLick={validateSingOunt}
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
        {isLoading ? (
          <PrimaryItemSkaleton />
        ) : (
          <Box>
            <Typography variant="h1" align="center">
              {entrityFoods.length > 0 ? totalCaloriesByDay() : "Empty Foods"}
            </Typography>
            <List>
              {entrityFoods.map((food: any) => (
                <PrimaryItemComponent
                  name={food.name}
                  calories={food.calories}
                  key={food.id}
                  onClickSecondary={() => deleteFood(food.id)}
                  onClick={() => handleModalEditFood(food.id)}
                />
              ))}
            </List>
          </Box>
        )}
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
