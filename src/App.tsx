import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddExerciseForm from './AddExerciseForm';

const App = () => (
  <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fitness Schedule
      </Typography>
      <AddExerciseForm />
    </Box>
  </Container>
);

export default App;
