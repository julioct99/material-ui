import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { Note } from '../types/Note';

export interface NoteCardProps {
  note: Note;
  handleDelete: (id: number) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, handleDelete }) => {
  return (
    <Card>
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
