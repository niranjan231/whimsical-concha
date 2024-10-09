import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";








const Navbar = () => {
    const navigate = useNavigate();
    const handleReturnHomePage=()=>{
        navigate("/")
    }
    return (
        <div>
            <div className="nav-1">
                <div className="nav-img">
                    <img onClick={handleReturnHomePage} src="https://whimsical-concha-223dbc.netlify.app/static/media/newlogo2.913a6896d5b7d39d8bf6.png"></img>
                </div>
                <ul className="nav-3">
                    <li>
                    <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                    <Link to="/productpage">Productpage</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;