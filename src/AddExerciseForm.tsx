import {
  Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {
  ChangeEvent, useState, FC, FormEvent, useContext,
} from 'react';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';
import { Exercise, DayOfWeek } from './model/exercise';
import theme from './theme';
import ExercisesContext from './context/ExercisesContext';

const AddExerciseForm: FC = () => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [day, setDay] = useState<DayOfWeek>('monday');

  const { exercises, setExercisesForDay } = useContext(ExercisesContext);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const exercise: Exercise = {
      id: uuidv4(),
      name,
      sets,
      reps,
      weight,
    };
    setExercisesForDay(day, [...exercises[day], exercise]);

    setName('');
    setSets('');
    setReps('');
    setWeight('');
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

  const onDayChange = (event: SelectChangeEvent<string>) => {
    setDay(event.target.value as DayOfWeek);
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
        <FormControl style={{
          flexGrow: 1, minWidth: 120, marginLeft: theme.spacing(1), marginTop: theme.spacing(1),
        }}
        >
          <InputLabel>Day</InputLabel>
          <Select
            value={day}
            label="Day"
            required
            onChange={onDayChange}
          >
            <MenuItem value="monday">Monday</MenuItem>
            <MenuItem value="tuesday">Tuesday</MenuItem>
            <MenuItem value="wednesday">Wednesday</MenuItem>
            <MenuItem value="thursday">Thursday</MenuItem>
            <MenuItem value="friday">Friday</MenuItem>
            <MenuItem value="saturday">Saturday</MenuItem>
            <MenuItem value="sunday">Sunday</MenuItem>
          </Select>
        </FormControl>
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
