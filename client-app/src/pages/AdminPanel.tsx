import { observer } from 'mobx-react-lite';
import '../styles/pages/AdminPanel.sass';
import SubjectList from '../components/SubjectList';
import { useContext, useEffect, useState } from 'react';
import Chapter from '../components/Chapter';
import { Context } from '..';
import TestAdding from '../components/TestAdding';

const AdminPanel = observer(() => {

    const {storeSubject} = useContext(Context);
    const {storeTest} = useContext(Context);

    const [grade, setGrade] = useState('5');
    const [chapterPath, setChapterPath] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('editing')) {
            setIsEditing(true);
        }
        if (localStorage.getItem('addtest')) {
            storeTest.setAdding(true);
        }
        if (localStorage.getItem('grade')) {
            setGrade(String(localStorage.getItem('grade')));
            document.querySelector(`#grade_${String(localStorage.getItem('grade'))}`)?.classList.add('admin__list__item_active');
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

    const addSubject = (event: any) => {
        event.preventDefault();
        storeSubject.create(storeSubject.chapter);
    }

    return (
        <main>
            <div className="container">
                <div className="admin">
                    <div className="admin__menu">
                        <div className="admin__list">
                            <div onClick={(event) => chooseTab(event, '5')} id='grade_5' className="admin__list__item">5 клас</div>
                            <div onClick={(event) => chooseTab(event, '6')} id='grade_6' className="admin__list__item">6 клас</div>
                            <div onClick={(event) => chooseTab(event, '7')} id='grade_7' className="admin__list__item">7 клас</div>
                            <div onClick={(event) => chooseTab(event, '8')} id='grade_8' className="admin__list__item">8 клас</div>
                            <div onClick={(event) => chooseTab(event, '9')} id='grade_9' className="admin__list__item">9 клас</div>
                            <div onClick={(event) => chooseTab(event, '10')} id='grade_10' className="admin__list__item">10 клас</div>
                            <div onClick={(event) => chooseTab(event, '11')} id='grade_11' className="admin__list__item">11 клас</div>
                        </div>
                    </div>
                    <div className="admin__workspace">
                        {isEditing ? (
                            <>
                                <form className="admin__form">
                                    <div className="admin__form__exit">
                                        <i onClick={() => {setIsEditing(false); localStorage.removeItem('editing')}} className="fa-solid fa-arrow-left-long"></i>
                                        <input value={chapterPath} onChange={(event) => setChapterPath(event.target.value)} type="text" placeholder='url-адреса'/>
                                        <button onClick={addSubject}>Додати</button>
                                    </div>
                                    <Chapter path={chapterPath} grade={grade}></Chapter>                                                      
                                </form>
                            </>
                        ) : (
                            <>
                                {storeTest.isAdding ? (
                                    <>
                                        <form className="admin__form">
                                            <div className="admin__form__exit">
                                                <i onClick={() => storeTest.setAdding(false)} className="fa-solid fa-arrow-left-long"></i>
                                                <button>Додати питання</button>
                                                <button>Видалити питання</button>
                                            </div>  
                                            <TestAdding path={chapterPath}></TestAdding>                                                  
                                        </form>
                                    </>
                                ) : (
                                    <>
                                        <div className="admin__left-menu">
                                            <button onClick={() => {setIsEditing(true); localStorage.setItem('editing', 'true')}}>Додати розділ</button>
                                        </div>
                                        <div className="admin__right-menu">
                                            <SubjectList grade={grade} admin={true}></SubjectList>
                                        </div>
                                    </>
                                )}
                            </>                        
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
})

export default AdminPanel;