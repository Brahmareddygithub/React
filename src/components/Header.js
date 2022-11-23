import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="textCenter">
      <h1>Welcome to Demo</h1>
      <Link className='buttonLayout' to="/logIn">LogIn</Link>
      <Link className='buttonLayout' to="/signUp">SignUp</Link>
    </div>
  );
}

export default Header;