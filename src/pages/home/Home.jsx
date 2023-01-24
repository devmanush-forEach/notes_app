import React from "react";
import NoteCard from "../../components/noteCard/NoteCard";
import "./Home.css";

const Home = () => {
  // const [noteList, setNoteList] = useState([]);

  const noteList = JSON.parse(localStorage.getItem("noteList"));
  return (
    <div className="home_main_container">
      <h2>All Notes</h2>
      <div className="note_main_container">
        {noteList?.map((note, i, arr) => {
          if (note?.bookmarked) return "";
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

export default Home;
