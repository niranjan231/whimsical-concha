import "./Card2.css";
import { useNavigate } from "react-router-dom";








const Card2=()=>{
    const navigate =useNavigate()
    const handleGoCategoriesFromShopnow=()=>{
        navigate("categories")
    }
    return (
        <div className="card2-1">
<img src="https://whimsical-concha-223dbc.netlify.app/static/media/banner2.03a2ebf8d998e53d1019.jpg"></img>
<div className="card2-2">
    <h2>Comfortable & Elegante Living</h2>
    <p>RAOUF Products are all made to standard</p>
    <p>sizes so that you can mix and match them freely.</p>
    <button onClick={handleGoCategoriesFromShopnow}>SHOP NOW</button>
</div>
        </div>
    )
}
export default Card2;