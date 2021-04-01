import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Note } from '../types/Note';
import Masonry from 'react-masonry-css';

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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}></NoteCard>
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
