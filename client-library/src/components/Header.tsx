import '../styles/components/Header.sass';
import { Link } from "react-router-dom";

const Header = () => {

    const toggleNavbar = () => {
       const hamburger = document.querySelector('.header__hamburger');
       const navbar = document.querySelector('.header__navbar');

       hamburger?.classList.toggle('header__hamburger_active');
       navbar?.classList.toggle('header__navbar_active');
    }

    return (
        <header className='header'> 
            <Link to='/' className="header__logo">
                <svg className="header__logo__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
                </svg>
                <div className="header__logo__text">History Of Ukraine</div>
            </Link>
            <div className="header__hamburger" onClick={toggleNavbar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="container">
                <nav className='header__navbar'>
                    <div className='header__navbar__wrapper'>
                        <div className='header__navbar__item'>Матеріальна спадщина</div>
                        <div className='header__navbar__list'>
                            <Link onClick={toggleNavbar} to="/architecture">Архітектура</Link>
                            <Link onClick={toggleNavbar} to="/archeology">Археологія</Link>
                            <Link onClick={toggleNavbar} to="/historical-monuments">Історичні пам'ятки</Link>
                            <Link onClick={toggleNavbar} to="/attractions">Визначні місця</Link>
                            <Link onClick={toggleNavbar} to="/works-of-art">Витвори мистецтва</Link>
                            <Link onClick={toggleNavbar} to="/historical-artifacts">Історичні артефакти</Link>
                            <span><Link onClick={toggleNavbar} to="/materials">Письмові матеріали</Link></span>
                        </div>
                    </div>
                    <div className='header__navbar__wrapper'>
                        <div className='header__navbar__item'>Нематеріальна спадщина</div>
                        <div className='header__navbar__list'>
                            <Link onClick={toggleNavbar} to="/performing-arts">Виконавські мистецтва</Link>
                            <Link onClick={toggleNavbar} to="/manners">Звичаї</Link>
                            <Link onClick={toggleNavbar} to="/ceremonies">Обряди</Link>
                            <Link onClick={toggleNavbar} to="/holidays">Свята</Link>
                            <Link onClick={toggleNavbar} to="/knowledge-and-skills">Знання і навички</Link>
                            <Link onClick={toggleNavbar} to="/oral-traditions">Усні традиції</Link>
                            <span><Link onClick={toggleNavbar} to="/forms-of-expression">Форми вираження</Link></span>
                        </div>
                    </div>
                </nav>
            </div>           
        </header>
    )
}

export default Header;