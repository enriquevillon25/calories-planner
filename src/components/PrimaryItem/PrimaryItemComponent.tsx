import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const PrimaryItemComponent = ({
  name,
  calories,
  onClickSecondary,
  onClick,
}: any) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onClickSecondary}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} sx={{ width: "50%" }} />
      <ListItemText primary={calories} />
      <ListItemIcon>
        <IconButton edge="end" onClick={onClick}>
          <EditIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};
