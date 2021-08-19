export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  done: boolean;
}

export type Exercises = {
  [D in DayOfWeek]: Exercise[];
};

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export const DEFAULT_EXERCISES: Exercises = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

export type AddExerciseDialogProps = {
  selectedDay: string;
};

export type AddExerciseFormProps = {
  selectedDay: string;
  handleClose: () => void;
};
