import React, { Fragment } from "react";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { usePlanner } from "../hooks/usePlanner";
import { format } from "@formkit/tempo";
import { Container, Grid, List, Typography } from "@mui/material";
import { CardBasicComponent } from "../../components/CardBasic/CardBasicComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ModalBasicComponent } from "../../components/ModalBasic/ModalBasicComponent";
export const ProfilePage = () => {
  const { handleModalAddFood, redirectHome } = usePlanner();
  const foodsPerDay = [
    { id: 1, name: "Lunes 07", listFoods: [], totalCalories: 1600 },
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
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 9 }}>
          The last seven days
        </Typography>
        <Grid container spacing={2}>
          {foodsPerDay.map((value: any) => {
            return (
              <Grid item xs={6}>
                <CardBasicComponent
                  title={value.name}
                  calories={value.totalCalories}
                ></CardBasicComponent>
              </Grid>
            );
          })}
        </Grid>
        <ModalBasicComponent title={"Lista de comidas"} />
      </Container>
    </Fragment>
  );
};
