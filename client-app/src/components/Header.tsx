import '../styles/components/Header.sass';
import { Link } from "react-router-dom";
import Signin from './Signin';
import { Context } from '..';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {

    const {storeAuth} = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem('token')) {
                await storeAuth.checkAuth();
            }     
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleNavbar = () => { 
       const hamburger = document.querySelector('.header__hamburger');
       const login = document.querySelector('.header__login');
       const navbar = document.querySelector('.header__navbar');

       hamburger?.classList.toggle('header__hamburger_active');
       login?.classList.toggle('header__login_active');
       navbar?.classList.toggle('header__navbar_active');
    }

    const toggleModal = () => {
        const signin = document.querySelector('.signin');
        signin?.classList.toggle('signin_active');
    }

    return (
        <>
            <header className='header'> 
                <div className="header__hamburger" onClick={toggleNavbar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="header__wrapper">
                        <Link to='/' className="header__logo">
                            <svg className="header__logo__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
                            </svg>
                            <div className="header__logo__text">History Of Ukraine</div>
                        </Link>
                        <nav className='header__navbar'>
                            <div className='header__navbar__list'>
                                <Link onClick={toggleNavbar} to="/grade-5">5 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-6">6 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-7">7 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-8">8 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-9">9 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-10">10 клас</Link>
                                <Link onClick={toggleNavbar} to="/grade-11">11 клас</Link>
                            </div>
                        </nav>
                        <div className="header__login">
                            {storeAuth.isAuth ? (
                                <>
                                    <div className="header__user">Єгор</div>
                                    {storeAuth.user.admin ? (
                                        <div className="header__user__list header__user__list_admin">
                                            <Link onClick={toggleNavbar} to="/profile">Профіль</Link>
                                            <a href="/">Бібліотека</a>
                                            <Link onClick={toggleNavbar} to="/admin-panel">Адмінка</Link>
                                        </div>
                                    ) : (
                                        <div className="header__user__list">
                                            <Link onClick={toggleNavbar} to="/profile">Профіль</Link>
                                            <a href="/">Бібліотека</a>
                                        </div>
                                    )}
                                    
                                    <i onClick={() => storeAuth.logout()} className="fa-solid fa-right-from-bracket header__logout"></i>
                                </>                                
                            ) : (
                                <button onClick={() => {toggleModal(); toggleNavbar()}} className="btn">Увійти</button>
                            )}
                        </div>
                    </div> 
                </div>           
            </header>
            <Signin></Signin>
        </>
    )
})

export default Header;