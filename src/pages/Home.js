import {Link} from "react-router-dom";

import Logo from '../assets/logo.png'

const Home = () => {
    return <section className="home">
        <div className="home__col home__col--left"></div>
        <div className="home__col home__col--middle">
            <Link to="/office" className="link-menu">
                <img src={Logo} width={200} alt="Logo Ludna 2" className="logo"/>
            </Link>
        </div>
        <div className="home__col home__col--right"></div>
    </section>
}

export default Home