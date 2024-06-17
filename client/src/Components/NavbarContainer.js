import React from "react";
import NavigationBarPrivate from "./NavigationBarPrivate";
import NavigatonBarPublic from "./NavigatonBarPublic";

const NavbarContainer = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <>
          <NavigationBarPrivate />
        </>
      ) : (
        <>
          <NavigatonBarPublic />
        </>
      )}
    </div>
  );
};

export default NavbarContainer;
