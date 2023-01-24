import React, { useState } from "react";
import "./NoteForm.css";

const NoteForm = () => {
  const [note, setNote] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    setNote((note) => ({ ...note, [name]: value }));
  };

  const handleAddNote = (e) => {
    e.preventDefault();

    const notes = JSON.parse(localStorage.getItem("noteList"));
    if (notes) {
      const newList = [...notes, note];
      localStorage.setItem("noteList", JSON.stringify(newList));
      window.location.reload();
    } else {
      localStorage.setItem("noteList", JSON.stringify([{ ...note }]));
      window.location.reload();
    }
    setNote({});
  };
  return (
    <div className="note_form_box">
      <form action="" onSubmit={handleAddNote} className="note_form">
        <input
          type="text"
          name="title"
          value={note?.title}
          onChange={handleChange}
          placeholder="Title"
          required="true"
        />
        <textarea
          type="text"
          name="description"
          value={note?.description}
          onChange={handleChange}
          placeholder="Description"
          required="true"
        />
        <input
          type="date"
          name="date"
          value={note?.date}
          onChange={handleChange}
          required="true"
        />
        <button className="form_submit_btn"> ADD NOTE</button>
      </form>
    </div>
  );
};

export default NoteForm;
