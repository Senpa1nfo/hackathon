import '../styles/components/Header.sass';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header> 
            <Link to='/' className="logo">LOGO</Link>
            <div className="container">
                <nav className='navbar'>
                    <div className='navbar__wrapper'>
                        <div className='navbar__item'>Матеріальна спадщина</div>
                        <div className='navbar__list'>
                            <Link to="/architecture">Архітектура</Link>
                            <Link to="/archeology">Археологія</Link>
                            <Link to="/historical-monuments">Історичні пам'ятки</Link>
                            <Link to="/attractions">Визначні місця</Link>
                            <Link to="/works-of-art">Витвори мистецтва</Link>
                            <Link to="/historical-artifacts">Історичні артефакти</Link>
                            <Link to="/materials">Друковані та рукописні матеріали</Link>
                        </div>
                    </div>
                    <div className='navbar__wrapper'>
                        <div className='navbar__item'>Нематеріальна спадщина</div>
                        <div className='navbar__list'>
                            <Link to="/performing-arts">Виконавські мистецтва</Link>
                            <Link to="/manners">Звичаї</Link>
                            <Link to="/ceremonies">Обряди</Link>
                            <Link to="/holidays">Свята</Link>
                            <Link to="/knowledge-and-skills">Знання і навички</Link>
                            <Link to="/oral-traditions">Усні традиції</Link>
                            <Link to="/forms-of-expression">Форми вираження</Link>
                        </div>
                    </div>
                </nav>
            </div>           
        </header>
    )
}

export default Header;