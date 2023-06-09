import {Link} from "react-router-dom";

const InfoPage = ({children}) => {
    return <div className="infoPage">
        <div className="infoPage__content">
            <Link className="infoPage__logo" to="/">Ludna 2</Link>
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
                    <Link to="/discover">Discover Ludna 2</Link>
                </li>
                <li className="infoPage__list-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default InfoPage