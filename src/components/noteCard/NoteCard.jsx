import React from "react";
import "./NoteCard.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";

const NoteCard = ({ note, index, list }) => {
  const handleDelete = () => {
    const updatedList = list.filter((ele, i) => {
      if (i !== index) return ele;
      return null;
    });

    if (window.confirm("Are you sure?")) {
      localStorage.setItem("noteList", JSON.stringify(updatedList));
      window.location.reload();
    }
  };
  const handleBookMark = () => {
    const updatedList = list.map((ele, i) => {
      if (i !== index) return ele;
      if (ele.bookmarked) return { ...ele, bookmarked: false };
      return { ...ele, bookmarked: true };
    });
    if (window.confirm("Are you sure?")) {
      localStorage.setItem("noteList", JSON.stringify(updatedList));
      window.location.reload();
    }
  };
  return (
    <div className="note_card">
      <span className="delete_icon" onClick={handleDelete}>
        <RiDeleteBin5Fill />
      </span>
      <span
        style={{ color: note?.bookmarked && "teal" }}
        className="note_bookmark"
        onClick={handleBookMark}
      >
        <BsBookmarkFill />
      </span>
      <h2 className="note_title">{note?.title}</h2>
      <p className="note_description">
        <span className="heading">Description:-</span> {note.description}
      </p>
      <p className="note_date">
        <span className="heading">Date:-</span> {note?.date}
      </p>
    </div>
  );
};

export default NoteCard;
