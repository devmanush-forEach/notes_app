import React from "react";
import NoteCard from "../../components/noteCard/NoteCard";
import "./Bookmarked.css";

const Bookmarked = () => {
  const noteList = JSON.parse(localStorage.getItem("noteList"));

  return (
    <div className="bookmarked_note_page">
      <h2>Bookmarked Notes</h2>
      <div className="note_main_container">
        {noteList?.map((note, i, arr) => {
          if (!note?.bookmarked) return "";
          return (
            <>
              <NoteCard note={note} index={i} list={arr} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarked;
