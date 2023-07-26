import '../styles/pages/Main.sass';

const Main = () => {
    return (
        <main className='main'>
            <div className="main__wrapper">
                <div className="main__titles">
                    <h1 className="main__title">Вітаємо на нашому сайті,<br /> присвяченому вивченню історії!</h1>
                    <div className="main__subtitle">З нами ти зможеш:</div>
                </div>                
                <div className="main__block">
                    <div className="main__timeline">
                        <div className="main__arrow"></div>
                        <div className="main__arrow"></div>
                        <div className="main__arrow"></div>
                        <div className="main__arrow"></div>
                    </div>
                    <div className="main__item">
                        <div className="main__text main__text_1">Вивчати історію за різним рівнем підготовки</div>
                        <div className="main__wrapper__card">
                            <div className="main__card main__card_1">
                                <div className="main__card__text"><span>Давня історія</span>Тут ви знайдете інформацію про стародавні цивілізації, культуру, історичні події та досягнення.</div>
                                <a href="/" className="main__link">Перейти</a>
                            </div>
                        </div>                    
                    </div>
                    <div className="main__item">                  
                        <div className="main__wrapper__card">
                            <div className="main__card main__card_2">
                                <div className="main__card__text"><span>Середньовічна історія</span>Вивчайте період середньовіччя, його правителів, релігію, культуру та важливі події.</div>
                                <a href="/" className="main__link">Перейти</a>
                            </div>
                        </div>
                        <div className="main__text main__text_2">Перевіряти свої уміння та навички проходячи тести</div>
                    </div>
                    <div className="main__item">
                        <div className="main__text main__text_3">Переглядати об'ємну бібліотеку у якій ти знайдеш потрібну тобі інформацію</div>
                        <div className="main__wrapper__card">
                            <div className="main__card main__card_3">
                                <div className="main__card__text"><span>Сучасна історія</span>Ознайомтеся із сучасними історичними подіями, політикою, технологіями та суспільством.</div>
                                <a href="/" className="main__link">Перейти</a>
                            </div>
                        </div>                       
                    </div>
                    <div className="main__item">
                        <div className="main__wrapper__card">   
                            <div className="main__card main__card_4">
                                <div className="main__card__text"><span>Історичні особистості</span>Дізнайтеся про великих особистостей минулого, їх внесок в історію та вплив на світ.</div>
                                <a href="/" className="main__link">Перейти</a>
                            </div>                    
                        </div>                       
                        <div className="main__text main__text_4">Вивчати події, які мали вплив на культуру, мову та традиції сучасної України</div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Main;