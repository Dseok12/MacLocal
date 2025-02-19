import { Link } from "react-router-dom";
import "../css/components/Header.css";

const Header = () => {
  return (
    <>
    <div className="HeaderAll">
      <div className="AllInner">
        <div className="AllConWrap">
          <div className="conWrap">
            <h1 className="logo"><Link to="/">Home</Link></h1>
            <nav className="headerNav">
              <ul className="headerNav_box">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/introduce">Introduce</Link>
                </li>
                <li>
                  <Link to="/package">Package</Link>
                </li>
                <li>
                  <Link to="/">menu4</Link>
                </li>
                <li>
                  <Link to="/">menu5</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header