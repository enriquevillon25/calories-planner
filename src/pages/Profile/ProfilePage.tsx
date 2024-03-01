import { Fragment, useEffect } from "react";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { usePlanner } from "../../hooks/usePlanner";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProfilePage = () => {
  const { handleModalAddFood, redirectHome, entrityFoods } =
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

  return (
    <Fragment>
      <HeaderComponent
        onAdd={handleModalAddFood}
        title={"Enrique Villón"}
        onCLick={redirectHome}
        icon={<ArrowBackIcon />}
      />
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 4, mt: 4 }}>
          Calories planner
        </Typography>
        <Box maxWidth="lg" component={"form"}>
          <Grid
            container
            justifyContent={"start"}
            flexDirection={"column"}
            gap={2}
          >
            <TextField label="Email" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <Grid container justifyContent="flex-end">
              <Button onClick={() => console.log("value")} variant="contained">
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};

{
  /* <Grid container spacing={2}>
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
<ModalBasicComponent title={"Lista de comidas"} /> */
}
