import {Link} from "react-router-dom";

const Home = () => {
    return <section className="home">
        <div className="home__col home__col--left">

        </div>
        <div className="home__col home__col--middle">
            <Link to="/office" className="link-menu">MENU</Link>
        </div>
        <div className="home__col home__col--right"></div>
    </section>
}

export default Home