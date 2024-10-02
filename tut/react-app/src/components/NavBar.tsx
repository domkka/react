function NavBar() {
  return (
    <div className="navbar">
      <h1>NavBar</h1>
      <div className="button-group">
        <button className="nav-button" onClick={() => console.log("Hallo")}>
          Klick mich
        </button>
        <button className="nav-button">Klick mich</button>
      </div>
    </div>
  );
}

export default NavBar;
