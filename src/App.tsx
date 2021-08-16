import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AddExerciseForm from './AddExerciseForm';

const App = () => (
  <Container>
    <Typography variant="h2" gutterBottom>
      Fitness Schedule
    </Typography>
    <AddExerciseForm />
  </Container>
);

export default App;
