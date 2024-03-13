import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Fragment, useState } from "react";
import { usePlanner } from "../../hooks/usePlanner";
import { useAuth } from "../../hooks/useAuth";

export const AuthPage = () => {
  const { redirectHome } = usePlanner();
  const { validateEmail, user } = useAuth();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const sendLogin = async (e: any) => {
    e.preventDefault();
    try {
      await validateEmail(inputEmail, inputPassword);
    } catch (e) {
      throw e;
    } finally {
      redirectHome();
    }
  };
  return (
    <Fragment>
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
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Grid container justifyContent="flex-end">
              <Button variant="contained" onClick={sendLogin}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};
