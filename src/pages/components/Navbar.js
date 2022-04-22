import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home </Link>|<Link to="/discover"> Discover </Link>|
      <Link to="/about"> About </Link>
    </div>
  );
}

export default NavBar;
