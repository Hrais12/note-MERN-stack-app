import Note from "../components/Note";

export default function NotesPage({ notes, setNotes, setUpdateForm }) {
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            notes={notes}
            note={note}
            setUpdateForm={setUpdateForm}
            setNotes={setNotes}
          />
        );
      })}
    </div>
  );
}
