import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🧠 ultraGpt</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  nav: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
};

export default Header;
