import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export interface CreateProps {}

const useStyles = makeStyles({});

const Create: React.FC<CreateProps> = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
        Create a new Note
      </Typography>

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log('You clicked me')}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
