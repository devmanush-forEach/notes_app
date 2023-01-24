import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../drawer/Drawer";
import NoteForm from "../noteForm/NoteForm";
import { MdAdd } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <header className="main_header">
        <nav className="main_navbar">
          <div className="left_main_nav">
            <Link className="link" to="/">
              Home
            </Link>
            <Link to="/bookmarked" className="link">
              Bookmarked
            </Link>
          </div>
          <div className="right_main_nav">
            <button
              onClick={() => {
                setShowDrawer(!showDrawer);
              }}
              className="add_note_btn"
            >
              <MdAdd /> Add Note
            </button>
          </div>
        </nav>
      </header>
      {showDrawer && (
        <Drawer hideDrawer={setShowDrawer}>
          <NoteForm />
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
