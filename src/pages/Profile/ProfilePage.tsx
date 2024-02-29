import React, { Fragment, useEffect } from "react";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { usePlanner } from "../../hooks/usePlanner";
import { Container, Grid, Typography } from "@mui/material";
import { CardBasicComponent } from "../../components/CardBasic/CardBasicComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ModalBasicComponent } from "../../components/ModalBasic/ModalBasicComponent";

export const ProfilePage = () => {
  const { handleModalAddFood, redirectHome, totalCaloriesByDay, entrityFoods } =
    usePlanner();

  const date = new Date();

  console.log(date.getMonth(), entrityFoods[0]?.createDate.getMonth());
  useEffect(() => {
    console.log(
      entrityFoods[0]?.createDate.getDate() === date.getDate() &&
        Number(entrityFoods[0]?.createDate.getMonth()) ===
          Number(date.getMonth())
    );
    const filterFood = entrityFoods.filter(
      (value) =>
        value.createDate.getDate() === date.getDate() &&
        value.createDate.getMonth() === date.getMonth()
    );
    console.log("filter food", filterFood);
  }, []);

  const objProfile = {
    id: "1",
    // listFood: entrityFoods.filter,
    totalCalories: 1000,
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  console.log(objProfile);
  const foodsPerDay = [
    {
      id: 1,
      name: "Lunes 07",
      listFoods: [{ id: "1" }],
      totalCalories: totalCaloriesByDay(),
    },
    { id: 2, name: "Martes 08", listFoods: [], totalCalories: 1600 },
    { id: 3, name: "Miercoles 09", listFoods: [], totalCalories: 1600 },
    { id: 4, name: "Jueves 10", listFoods: [], totalCalories: 1600 },
    { id: 5, name: "Viernes 11", listFoods: [], totalCalories: 1600 },
    { id: 6, name: "Sabado 12", listFoods: [], totalCalories: 1600 },
  ];

  return (
    <Fragment>
      <HeaderComponent
        onAdd={handleModalAddFood}
        title={"Enrique Villón"}
        onCLick={redirectHome}
        icon={<ArrowBackIcon />}
      />
      {/* <Container maxWidth="lg"> */}
        <Typography variant="h4" align="center" sx={{ mb: 4, mt: 4 }}>
          The last seven days
        </Typography>
        <Grid container spacing={2}>
          {foodsPerDay.map((value: any) => {
            return (
              <Grid item xs={6}>
                <CardBasicComponent
                  title={value.name}
                  calories={value.totalCalories}
                />
              </Grid>
            );
          })}
        </Grid>
        <ModalBasicComponent title={"Lista de comidas"} />
      {/* </Container> */}

      <Container maxWidth="lg"></Container>
    </Fragment>
  );
};
