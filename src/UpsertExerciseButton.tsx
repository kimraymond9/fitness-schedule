import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddExerciseForm from './AddExerciseForm';
import { UpsertExerciseButtonProps } from './model/exercise';

const UpsertExerciseButton: FC<UpsertExerciseButtonProps> = ({ selectedDay, exerciseToEdit }: UpsertExerciseButtonProps) => {
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
      {exerciseToEdit
        ? <EditIcon onClick={handleClickOpen} />
        : (
          <Button
            variant="contained"
            onClick={handleClickOpen}
            color="primary"
            style={{ float: 'right', marginBottom: theme.spacing(1), marginTop: theme.spacing(1) }}
          >
            add exercise
          </Button>
        )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{exerciseToEdit ? 'Edit an Exercise' : 'Add an Exercise'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {exerciseToEdit ? 'Edit the details of your exercise.' : 'Enter the details of your exercise.'}
          </DialogContentText>
          {exerciseToEdit
            ? <AddExerciseForm selectedDay={selectedDay} handleClose={handleClose} exerciseToEdit={exerciseToEdit} />
            : <AddExerciseForm selectedDay={selectedDay} handleClose={handleClose} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpsertExerciseButton;
