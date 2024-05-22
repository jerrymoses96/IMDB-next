import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      
    </div>
  );
};

export default Navbar;
