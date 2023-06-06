import {Link} from "react-router-dom";

const InfoPage = ({children}) => {
    return <div className="infoPage">
        <div className="infoPage__content">
            <Link to="/">Ludna 2</Link>
            {children}
        </div>
        <div className="infoPage__navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="/office">Office</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
}

export default InfoPage