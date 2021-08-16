import { Exercise } from '../model/exercise';

type ExerciseHook = [(day: string) => Exercise[], (day: string, exercises: Exercise[]) => void];

const useExercises = (): ExerciseHook => {
  const getExercisesForDay = (day: string): Exercise[] => JSON.parse(window.localStorage.getItem(day) || '[]');
  const setExercisesForDay = (day: string, exercises: Exercise[]) => {
    window.localStorage.setItem(day, JSON.stringify(exercises));
  };

  return [getExercisesForDay, setExercisesForDay];
};

export default useExercises;
