import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll(event) {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={scrolled ? "nav navScrolled" : "nav"}>
      <section>
        <Link to="/">Dashboard</Link>
        <Link to="/posts">Posts</Link>
      </section>
    </nav>
  );
};

export default Navbar;
