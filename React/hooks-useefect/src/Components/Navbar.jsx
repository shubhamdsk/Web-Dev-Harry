import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  //Case 1 : Run on Every Render
  useEffect(() => {
    alert("Hey ! I will run on every render");
  });

  // case 2 : Run  on First Render
  useEffect(() => {
    alert("Hey Welcome to my page, This is the first Render");
  }, []);

  //case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey i am running because color value was changed");
  }, [color]);

  //case 4: when component will change dynamically or during conditional rendering
  useEffect(() => {
    alert("Hey Welcome to my page, This is the first Render of app.jsx");
    return () => {
      alert("component was unmounted");
    };
  }, []);

  return <div>I am navbar of {color} color .😁</div>;
};

export default Navbar;
