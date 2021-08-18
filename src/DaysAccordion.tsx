import React, { useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Exercise } from './model/exercise';
import ExercisesContext from './context/ExercisesContext';

const DaysAccordion = () => {
  const { exercises } = useContext(ExercisesContext);

  return (
    <Box mt={2}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Monday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.monday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Tuesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.tuesday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Wednesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.wednesday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Thursday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.thursday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Friday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.friday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Saturday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.saturday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Sunday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.sunday.map((exercise: Exercise) => (
                <TableRow key={exercise.id}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell align="right">{exercise.sets}</TableCell>
                  <TableCell align="right">{exercise.reps}</TableCell>
                  <TableCell align="right">{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DaysAccordion;
