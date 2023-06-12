import {Link} from "react-router-dom";
import Logo from "../assets/logo.png";

const InfoPage = ({children, styles}) => {
    return <div className="infoPage">
        <div className={`infoPage__content ${styles}`}>
            <Link to="/" className="link-menu">
                <img src={Logo} width={80} alt="Logo Ludna 2" className="logo"/>
            </Link>
            <div className="infoPage__text">{children}</div>
        </div>
        <nav className="infoPage__navigation">
            <ul className="infoPage__list">
                <li className="infoPage__list-item">
                    <Link to="/office">Office</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/info">Investment information</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/location">Location</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/amenities">Amenities</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/discover">Galery</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default InfoPage