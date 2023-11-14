 
import './Header.css' 
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header">
            <div className="inner">
                 <h1><Link to="/">
                    <img src="https://www.selecto.co.kr/assets/images/main/logo.png" alt="" />
                    </Link></h1>
                    <Navbar />
            </div>
        </header>
    );
};

export default Header;