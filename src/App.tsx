import { useState } from 'react';
import Container from '@material-ui/core/Container';
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

  const editExercise = (day: DayOfWeek, exerciseID: string, newExercise: Exercise) => {
    const exercisesForDay: Exercise[] = [...exercises[day]].map((exercise) => {
      if (exercise.id === exerciseID) {
        return {
          id: newExercise.id,
          name: newExercise.name,
          sets: newExercise.sets,
          reps: newExercise.reps,
          weight: newExercise.weight,
          done: newExercise.done,
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

  const uncheckAllExercises = (day: DayOfWeek) => {
    const exercisesForDay: Exercise[] = [...exercises[day]].map((exercise) => {
      if (exercise.done === true) {
        return {
          ...exercise,
          done: false,
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

  const deleteExercise = (day: DayOfWeek, exerciseID: string) => {
    const exercisesForDay: Exercise[] = [...exercises[day]].filter((exercise) => exercise.id !== exerciseID);

    const newExercises: Exercises = {
      ...exercises,
      [day]: exercisesForDay,
    };
    window.localStorage.setItem('exercises', JSON.stringify(newExercises));
    setExercises(newExercises);
  };

  return (
    <ExercisesContext.Provider value={{
      exercises, setExercisesForDay, setExerciseDone, uncheckAllExercises, deleteExercise, editExercise,
    }}
    >
      <Container>

        <DaysAccordion />
      </Container>
    </ExercisesContext.Provider>
  );
};

export default App;
