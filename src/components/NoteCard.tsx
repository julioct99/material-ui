import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { Note } from '../types/Note';

const useStyles = makeStyles({
  test: {
    border: (note: Note) => {
      if (note.category === 'work') return '1px solid red';
    },
  },
});

export interface NoteCardProps {
  note: Note;
  handleDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
