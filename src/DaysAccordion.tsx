import React, { FC, useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Box, Button, Checkbox, List, ListItem, ListItemIcon, ListItemText, useTheme,
} from '@material-ui/core';
import { DayOfWeek, Exercise } from './model/exercise';
import ExercisesContext from './context/ExercisesContext';
import AddExerciseButton from './AddExerciseButton';
import DeleteDialog from './DeleteDialog';

const DAYS_OF_THE_WEEK: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const DAY_OF_THE_WEEK_BY_INDEX: Record<number, DayOfWeek> = {
  0: 'sunday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday',
};

const DaysAccordion: FC = () => {
  const { exercises, setExerciseDone, uncheckAllExercises } = useContext(ExercisesContext);

  const theme = useTheme();

  const handleExerciseDoneChanged = (day: DayOfWeek, exerciseID: string, done: boolean) => {
    setExerciseDone(day, exerciseID, done);
  };

  const handleDayFinished = (day: DayOfWeek) => {
    uncheckAllExercises(day);
  };

  const getExerciseTableRow = ((day: DayOfWeek, exercise: Exercise) => (
    <ListItem key={exercise.id} dense divider>
      <ListItemIcon>
        <Checkbox checked={exercise.done} onChange={(event) => handleExerciseDoneChanged(day, exercise.id, event.target.checked)} />
      </ListItemIcon>
      <ListItemText
        primary={(
          <Typography>
            {exercise.name}
          </Typography>
          )}
        secondary={(
          <Typography variant="body2">
            {`${exercise.sets} x ${exercise.reps}${exercise.weight === '' ? '' : ` x ${exercise.weight}`}`}
          </Typography>
          )}
      />
      <DeleteDialog selectedDay={day} id={exercise.id} />
    </ListItem>
  )
  );

  const getExerciseAccordion = ((day: DayOfWeek) => (
    <Accordion defaultExpanded={day === DAY_OF_THE_WEEK_BY_INDEX[new Date().getDay()]} key={day}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.primary.contrastText }} />}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <Typography variant="h5" style={{ textTransform: 'capitalize', color: theme.palette.primary.contrastText }}>{day}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {exercises[day].length === 0
            ? <Typography variant="h6" align="center">Add an exercise to get started!</Typography>
            : exercises[day].map((exercise) => getExerciseTableRow(day, exercise))}
        </List>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleDayFinished(day)}
          style={{
            visibility: `${exercises[day].some((exercise) => exercise.done) ? 'visible' : 'hidden'}`,
            float: 'left',
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(1),
          }}
        >
          Finish
        </Button>
        <AddExerciseButton selectedDay={day} />
      </AccordionDetails>
    </Accordion>
  )
  );

  return (
    <Box mt={2}>
      {DAYS_OF_THE_WEEK.map(getExerciseAccordion)}
    </Box>
  );
};

export default DaysAccordion;
