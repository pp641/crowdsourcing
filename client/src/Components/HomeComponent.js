import React from "react";
import NavigationBarPrivate from "./NavigationBarPrivate";
import HomePageContentPublic from "./HomePageContentPublic";
import NavigatonBarPublic from "./NavigatonBarPublic";
import HomeContentPrivate from "./HomeContentPrivate";
import FooterComponent from "./FooterComponent";

const HomeComponent = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  return (
    <div>
      {token ? (
        <>
          <NavigationBarPrivate />
          <HomeContentPrivate />
        </>
      ) : (
        <>
          <NavigatonBarPublic />
          <HomePageContentPublic />
        </>
      )}
      <FooterComponent/>
    </div>
  );
};

export default HomeComponent;
