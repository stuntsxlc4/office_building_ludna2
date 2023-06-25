import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Home = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        const logoElement = logoRef.current;

        if (logoElement) {
            setTimeout(() => {
                logoElement.classList.remove('full-screen');
            }, 2000);
        }
    }, []);

    return (
        <section className="home">
            <div className="home__col home__col--left"></div>
            <div className="home__col home__col--middle">
                <Link to="/office" className="link-menu">
                    <img src={Logo} width={200} alt="Logo Ludna 2" className="logo" />
                </Link>
            </div>
            <div className="home__col home__col--right"></div>
            <div ref={logoRef} className="logoBg full-screen">
                <img src={Logo} alt="Logo" />
            </div>
        </section>
    );
};

export default Home;
