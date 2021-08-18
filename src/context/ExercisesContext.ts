import React from 'react';
import {
  Exercises, DEFAULT_EXERCISES, DayOfWeek, Exercise,
} from '../model/exercise';

interface ExercisesContextType {
  exercises: Exercises;
  setExercisesForDay: (day: DayOfWeek, exercisesForDay: Exercise[]) => void;
}

const ExercisesContext = React.createContext<ExercisesContextType>({
  exercises: DEFAULT_EXERCISES,
  setExercisesForDay: () => {},
});

export default ExercisesContext;
