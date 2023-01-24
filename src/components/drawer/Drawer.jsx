import React, { useEffect } from "react";
import "./Drawer.css";
import { RxCross2 } from "react-icons/rx";

const Drawer = ({ children, hideDrawer }) => {
  useEffect(() => {
    window.addEventListener("mousedown", ({ target }) => {
      if (!document.getElementById("right_drawer").contains(target)) {
        hideDrawer(false);
      }
    });
  }, []);

  return (
    <>
      <div id="right_drawer" className="drawer_main_box">
        <span
          className="cross_icon"
          onClick={() => {
            hideDrawer(false);
          }}
        >
          <RxCross2 />
        </span>
        {children}
      </div>
    </>
  );
};

export default Drawer;
