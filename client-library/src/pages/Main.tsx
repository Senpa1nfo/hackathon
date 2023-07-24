import '../styles/pages/Main.sass';
import { Link } from "react-router-dom";


const Main = () => {
    return (
        <>
            <div className="container">
                <div className="card">

                    <div className="card__info">
                        <div className="card__text">
                            <span>Архітектура</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/architecture" className='more'>Детальніше</Link>
                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Археолгія</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/archeology" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Історичні пам'ятки</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/historical-monuments" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Визначні місця</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/attractions" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Витвори мистецтва</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/works-of-art" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Історичні артефакти</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/historical-artifacts" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Письмові матеріали</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/materials" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Виконавські мистецтва</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/performing-arts" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Звичаї</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/manners" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Обряди</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/ceremonies" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Свята</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/holidays" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Знання і навички</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/knowledge-and-skills" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Усні традиції</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/oral-traditions" className='more'>Детальніше</Link>

                    </div>
                    <div className="card__info">
                        <div className="card__text">
                            <span>Форми вираження</span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nemo quis similique!
                        </div>
                        <Link to="/forms-of-expression" className='more'>Детальніше</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;