import {
  Button, FormControl, FormGroup, TextField,
} from '@material-ui/core';
import {
  ChangeEvent, useState, FC,
} from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const AddExerciseForm: FC = () => {
  const [formValues, setFormValues] = useState({ description: '', sets: '', reps: '' });

  const [localStorageExercise, setLocalStorageExercise] = useLocalStorage('monday', []);

  const { description, sets, reps } = formValues;

  const handleFormSubmit = () => {
    const exercise = {
      description,
      sets,
      reps,
    };
    setLocalStorageExercise(localStorageExercise.concat(exercise));
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <FormControl fullWidth>
      <FormGroup>
        <TextField
          margin="dense"
          id="standard-basic"
          label="Description"
          name="description"
          value={formValues.description}
          onChange={onInputChange}
        />
        <TextField
          margin="dense"
          id="standard-basic"
          label="Sets"
          name="sets"
          value={formValues.sets}
          onChange={onInputChange}
        />
        <TextField
          margin="dense"
          id="standard-basic"
          label="Reps"
          name="reps"
          value={formValues.reps}
          onChange={onInputChange}
        />
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          type="submit"
          color="primary"
        >
          ADD
        </Button>
      </FormGroup>
    </FormControl>
  );
};

export default AddExerciseForm;
