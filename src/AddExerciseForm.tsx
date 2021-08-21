import {
  Button, TextField, useTheme,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {
  ChangeEvent, useState, FC, FormEvent, useContext,
} from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { Exercise, AddExerciseFormProps, DayOfWeek } from './model/exercise';
import ExercisesContext from './context/ExercisesContext';

const AddExerciseForm: FC<AddExerciseFormProps> = ({ selectedDay, handleClose, exerciseToEdit }: AddExerciseFormProps) => {
  const [name, setName] = useState(exerciseToEdit ? exerciseToEdit.name : '');
  const [sets, setSets] = useState(exerciseToEdit ? exerciseToEdit.sets : '');
  const [reps, setReps] = useState(exerciseToEdit ? exerciseToEdit.reps : '');
  const [weight, setWeight] = useState(exerciseToEdit ? exerciseToEdit.weight : '');
  const { exercises, setExercisesForDay, editExercise } = useContext(ExercisesContext);

  const theme = useTheme();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedDayOfWeek = selectedDay as DayOfWeek;
    const exercise: Exercise = {
      id: uuidv4(),
      name,
      sets,
      reps,
      weight,
      done: false,
    };
    if (event.currentTarget.checkValidity()) {
      handleClose();
      if (!exerciseToEdit) {
        setExercisesForDay(selectedDayOfWeek, [...exercises[selectedDayOfWeek], exercise]);
      } else {
        editExercise(selectedDayOfWeek, exerciseToEdit.id, exercise);
      }
    }
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSetsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSets(event.target.value);
  };

  const onRepsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReps(event.target.value);
  };

  const onWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box display="flex" alignItems="center" mb={1}>
        <TextField
          style={{ flexGrow: 3 }}
          margin="normal"
          required
          label="Name"
          name="name"
          value={name}
          onChange={onNameChange}
        />
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          style={{ flexGrow: 1 }}
          required
          label="Sets"
          name="sets"
          type="number"
          value={sets}
          onChange={onSetsChange}
        />
        <ClearIcon />
        <TextField
          style={{ flexGrow: 1 }}
          required
          label="Reps"
          name="reps"
          type="number"
          value={reps}
          onChange={onRepsChange}
        />
        <ClearIcon />
        <TextField
          style={{ flexGrow: 1 }}
          label="Weight"
          name="weight"
          type="number"
          value={weight}
          onChange={onWeightChange}
        />
      </Box>
      <Button
        style={{ float: 'right', marginLeft: theme.spacing(0.5) }}
        variant="contained"
        type="submit"
      >
        add
      </Button>
      <Button
        style={{ float: 'right' }}
        color="primary"
        onClick={handleClose}
      >
        cancel
      </Button>
    </form>
  );
};

export default AddExerciseForm;
