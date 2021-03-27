import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Note } from '../types/Note';

export interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} handleDelete={handleDelete}></NoteCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
