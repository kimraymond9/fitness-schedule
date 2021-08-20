import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core';
import AddExerciseForm from './AddExerciseForm';
import { AddExerciseDialogProps } from './model/exercise';

const AddExerciseDialog: FC<AddExerciseDialogProps> = ({ selectedDay }: AddExerciseDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        color="primary"
        style={{ float: 'right', marginBottom: theme.spacing(1), marginTop: theme.spacing(1) }}
      >
        add exercise
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of your exercise.
          </DialogContentText>
          <AddExerciseForm selectedDay={selectedDay} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddExerciseDialog;
