import {Link} from "react-router-dom";

const NavBar= () => {
  return (
    <nav className="navbar">
      <div className="navStyle">
        <Link to="/" className="navMainButton"><div><p className="navMainButtonText">International Festival</p></div></Link>
      </div>
      <div className="navLinks">
          <Link to="/tr"><button className="navGButton">Trivia</button></Link>
          <Link to="/ex"><button className="navEButton">Exhibition Hall</button></Link>
          <Link to="/"><button className="navHButton">Home</button></Link>
      </div>
    </nav>
  );
}
 
export default NavBar