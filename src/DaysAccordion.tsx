import React, { FC, useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Checkbox, useTheme } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DayOfWeek, Exercise } from './model/exercise';
import ExercisesContext from './context/ExercisesContext';
import AddExerciseDialog from './AddExerciseDialog';
import DeleteDialog from './DeleteDialog';

const DAYS_OF_THE_WEEK: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const DAY_OF_THE_WEEK_BY_INDEX: Record<number, DayOfWeek> = {
  0: 'sunday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday',
};

const DaysAccordion: FC = () => {
  const { exercises, setExerciseDone } = useContext(ExercisesContext);

  const theme = useTheme();

  const handleExerciseDoneChanged = (day: DayOfWeek, exerciseID: string, done: boolean) => {
    setExerciseDone(day, exerciseID, done);
  };

  const getExerciseTableRow = ((day: DayOfWeek, exercise: Exercise) => (
    <TableRow key={exercise.id}>
      <TableCell>{exercise.name}</TableCell>
      <TableCell align="right">{exercise.sets}</TableCell>
      <TableCell align="right">{exercise.reps}</TableCell>
      <TableCell align="right">{exercise.weight}</TableCell>
      <TableCell align="right">
        <Checkbox checked={exercise.done} onChange={(event) => handleExerciseDoneChanged(day, exercise.id, event.target.checked)} />
      </TableCell>
    </TableRow>
      <DeleteDialog selectedDay={day} id={exercise.id} />
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Sets</TableCell>
              <TableCell align="right">Reps</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Done?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises[day].map((exercise) => getExerciseTableRow(day, exercise))}
          </TableBody>
        </Table>
        <AddExerciseDialog selectedDay={day} />
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
