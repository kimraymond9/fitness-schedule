import React from 'react';
import {
  Exercises, DEFAULT_EXERCISES, DayOfWeek, Exercise,
} from '../model/exercise';

interface ExercisesContextType {
  exercises: Exercises;
  setExercisesForDay: (day: DayOfWeek, exercisesForDay: Exercise[]) => void;
  setExerciseDone: (day: DayOfWeek, exerciseID: string, newDone: boolean) => void;
  deleteExercise: (day: DayOfWeek, exerciseID: string) => void;
}

const ExercisesContext = React.createContext<ExercisesContextType>({
  exercises: DEFAULT_EXERCISES,
  setExercisesForDay: () => {},
  setExerciseDone: () => {},
  deleteExercise: () => {},
});

export default ExercisesContext;
