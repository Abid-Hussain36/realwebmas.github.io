import {Link} from "react-router-dom";

const NavBar= () => {
  return (
    <nav className="navbar">
      <div className="navStyle">
        <Link to="/" className="navMainButton"><div><h3>Culture Fair</h3></div></Link>
      </div>
      <div className="navLinks">
          <Link to="/tr"><button className="navTButton">Trivia</button></Link>
          <Link to="/cuis"><button className="navGButton">Cuisines</button></Link>
          <Link to="/ex"><button className="navEButton">Exhibition Hall</button></Link>
          <Link to="/"><button className="navHButton">Home</button></Link>
      </div>
    </nav>
  );
}
 
export default NavBar