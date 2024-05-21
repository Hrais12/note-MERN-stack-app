import { useState, useEffect } from "react";
import { getNotes } from "./util/notes-api";
import NotesPage from "./pages/NotesPage";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  useEffect(() => {
    getNotes(setNotes);
  }, [notes]);

  return (
    <div className="App">
      <CreateForm setNotes={setNotes} notes={notes} />
      <UpdateForm updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <NotesPage
        notes={notes}
        setNotes={setNotes}
        setUpdateForm={setUpdateForm}
      />
    </div>
  );
}
