import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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

  const setExerciseDone = (day: DayOfWeek, exerciseID: string, newDone: boolean) => {
    const exercisesForDay: Exercise[] = [...exercises[day]].map((exercise) => {
      if (exercise.id === exerciseID) {
        return {
          ...exercise,
          done: newDone,
        };
      }
      return exercise;
    });
    const newExercises: Exercises = {
      ...exercises,
      [day]: exercisesForDay,
    };
    window.localStorage.setItem('exercises', JSON.stringify(newExercises));
    setExercises(newExercises);
  };

  return (
    <ExercisesContext.Provider value={{ exercises, setExercisesForDay, setExerciseDone }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Fitness Schedule
        </Typography>
        <DaysAccordion />
      </Container>
    </ExercisesContext.Provider>
  );
};

export default App;
