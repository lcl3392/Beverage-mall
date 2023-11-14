import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { carts } = useSelector( state => state.cart )
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">HOME</Link> </li>
                {/* <li><Link to="/product">제품</Link> </li> */}
                <li><Link to="/customer">CUSTOMER</Link> </li>
                <li><Link to="/cart">
                        CART / { carts.length}개 
                    </Link> </li>                
            </ul>
        </nav>
    );
};

export default Navbar;