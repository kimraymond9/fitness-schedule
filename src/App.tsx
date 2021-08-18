import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AddExerciseForm from './AddExerciseForm';
import DaysAccordion from './DaysAccordion';
import ExercisesContext from './context/ExercisesContext';
import {
  DayOfWeek, DEFAULT_EXERCISES, Exercise, Exercises,
} from './model/exercise';

const App = () => {
  const [exercises, setExercises] = useState<Exercises>(JSON.parse(window.localStorage.getItem('exercises') || JSON.stringify(DEFAULT_EXERCISES)));
  const setExercisesForDay = (day: DayOfWeek, exercisesForDay: Exercise[]) => {
    const newExercises: Exercises = {
      ...exercises,
      [day]: exercisesForDay,
    };
    window.localStorage.setItem('exercises', JSON.stringify(newExercises));
    setExercises(newExercises);
  };
  return (
    <ExercisesContext.Provider value={{ exercises, setExercisesForDay }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Fitness Schedule
        </Typography>
        <AddExerciseForm />
        <DaysAccordion />
      </Container>
    </ExercisesContext.Provider>
  );
};

export default App;
