import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardBasicComponent = ({ title, calories }: any) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography
          sx={{ mt: 3.5, fontSize: 30 }}
          color="text.secondary"
          align="center"
        >
          {calories}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => console.log("modal")}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
