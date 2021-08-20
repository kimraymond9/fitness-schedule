import React, { FC, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExercisesContext from './context/ExercisesContext';
import { DayOfWeek, DeleteDialogProps } from './model/exercise';

const DeleteDialog: FC<DeleteDialogProps> = ({ selectedDay, id }: DeleteDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const { deleteExercise } = useContext(ExercisesContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteExercise(selectedDay as DayOfWeek, id);
  };

  return (
    <div>
      <ListItemSecondaryAction>
        <IconButton onClick={handleClickOpen} edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this exercise?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDelete}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
