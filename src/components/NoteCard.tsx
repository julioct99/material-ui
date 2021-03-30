import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import { Note } from '../types/Note';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note: Note) => {
      if (note.category === 'work') return yellow[700];
      if (note.category === 'money') return green[500];
      if (note.category === 'todos') return pink[500];
      return blue[500];
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
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
        }
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
