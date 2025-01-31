import { useState } from "react";

export default function CreateForm({ setNotes, notes }) {
  const [createForm, setCreateForm] = useState({ title: "", body: "" });

  function handleChange(event) {
    setCreateForm({
      ...createForm,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createForm),
      });
      const data = await response.json();
      console.log(data.note);
      setNotes(() => [...notes, data.note]);
      setCreateForm({ title: "", body: "" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="formAdmin">
      <h1>Create Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={createForm.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="body"
          cols="20"
          rows="5"
          placeholder="Note Body"
          value={createForm.body}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
