import { observer } from 'mobx-react-lite';
import '../styles/pages/AdminPanel.sass';
import SubjectList from '../components/SubjectList';
import { useEffect, useState } from 'react';
import Chapter from '../components/Chapter';

const AdminPanel = observer(() => {

    const [grade, setGrade] = useState('5');
    const [isEditing, setIsEditin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('editing')) {
            setIsEditin(true);
        }
        if (localStorage.getItem('grade')) {
            setGrade(String(localStorage.getItem('grade')));
            document.querySelector(`#grader_${String(localStorage.getItem('grade'))}`)?.classList.add('admin__list__item_active');
        }
    }, [])

    const chooseTab = (event: any, grade: string) => {
        const tabs = document.querySelectorAll('.admin__list__item');
        tabs.forEach(element => {
            element.classList.remove('admin__list__item_active');
        })
        event.target.classList.add('admin__list__item_active'); 
        setGrade(grade);
        localStorage.setItem('grade', grade);
    }

    return (
        <main>
            <div className="container">
                <div className="admin">
                    <div className="admin__menu">
                        <div className="admin__list">
                            <div onClick={(event) => chooseTab(event, '5')} id='grader_5' className="admin__list__item">5 клас</div>
                            <div onClick={(event) => chooseTab(event, '6')} id='grader_6' className="admin__list__item">6 клас</div>
                            <div onClick={(event) => chooseTab(event, '7')} id='grader_7' className="admin__list__item">7 клас</div>
                            <div onClick={(event) => chooseTab(event, '8')} id='grader_8' className="admin__list__item">8 клас</div>
                            <div onClick={(event) => chooseTab(event, '9')} id='grader_9' className="admin__list__item">9 клас</div>
                            <div onClick={(event) => chooseTab(event, '10')} id='grader_10' className="admin__list__item">10 клас</div>
                            <div onClick={(event) => chooseTab(event, '11')} id='grader_11' className="admin__list__item">11 клас</div>
                        </div>
                    </div>
                    <div className="admin__workspace">
                        {isEditing ? (
                            <>
                                <form action="" className="admin__form">
                                    <div className="admin__form__exit">
                                        <i onClick={() => {setIsEditin(false); localStorage.removeItem('editing')}} className="fa-solid fa-arrow-left-long"></i>
                                        <input type="text" placeholder='url-адреса'/>
                                    </div>
                                    <Chapter></Chapter>                                                      
                                </form>
                            </>
                        ) : (
                            <>
                                <div className="admin__left-menu">
                                    <button onClick={() => {setIsEditin(true); localStorage.setItem('editing', 'true')}}>Додати тему</button>
                                </div>
                                <div className="admin__right-menu">
                                    <SubjectList grade={grade} admin={true}></SubjectList>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
})

export default AdminPanel;