import React, { FC, useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Checkbox } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Exercise } from './model/exercise';
import ExercisesContext from './context/ExercisesContext';
import AddExerciseFormDialog from './AddExerciseFormDialog';

const DaysAccordion: FC = () => {
  const { exercises } = useContext(ExercisesContext);

  const getExerciseTableRow = ((exercise: Exercise) => (
    <TableRow key={exercise.id}>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>{exercise.name}</TableCell>
      <TableCell align="right">{exercise.sets}</TableCell>
      <TableCell align="right">{exercise.reps}</TableCell>
      <TableCell align="right">{exercise.weight}</TableCell>
    </TableRow>
  )
  );

  return (
    <Box mt={2}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Monday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.monday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="monday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Tuesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.tuesday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="tuesday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Wednesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.wednesday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="wednesday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Thursday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.thursday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="thursday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Friday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.friday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="friday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Saturday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.saturday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="saturday" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}
        >
          <Typography>Sunday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.sunday.map(getExerciseTableRow)}
            </TableBody>
          </Table>
          <AddExerciseFormDialog selectedDay="sunday" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DaysAccordion;
