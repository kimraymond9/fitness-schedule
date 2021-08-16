import {
  Button, TextField,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {
  ChangeEvent, useState, FC, FormEvent,
} from 'react';
import Box from '@material-ui/core/Box';
import useExercises from './hooks/useExercises';
import { Exercise } from './model/exercise';

const AddExerciseForm: FC = () => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const [getExercisesForDay, setExercisesForDay] = useExercises();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const exercise: Exercise = {
      name,
      sets,
      reps,
      weight,
    };
    setExercisesForDay('monday', [...getExercisesForDay('monday'), exercise]);
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
      <Box>
        <TextField
          margin="normal"
          fullWidth
          required
          label="Name"
          name="name"
          value={name}
          onChange={onNameChange}
        />
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <TextField
          style={{ flexGrow: 1 }}
          label="Sets"
          name="sets"
          type="number"
          value={sets}
          onChange={onSetsChange}
        />
        <ClearIcon />
        <TextField
          style={{ flexGrow: 1 }}
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
        fullWidth
        variant="contained"
        type="submit"
        color="primary"
      >
        add
      </Button>
    </form>
  );
};

export default AddExerciseForm;
