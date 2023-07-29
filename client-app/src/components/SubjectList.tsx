import { useContext, useEffect } from 'react';
import { Context } from '..';
import '../styles/components/SubjectList.sass';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';
import { Link, useNavigate } from 'react-router-dom';

interface SubjectProps {
    grade: string | undefined,
    admin: boolean
}

const SubjectList = observer(({grade, admin}: SubjectProps) => {

    const {storeAuth} = useContext(Context);
    const {storeSubject} = useContext(Context);
    const {storeTest} = useContext(Context);

    const navigate = useNavigate();

    const handleSelectTest = (event: any, path: string, paragraph: number, partid: string) => {
        if (storeAuth.user.id) {
            navigate(`/grade/${grade}/${path}/part_${paragraph}/test`, {state: {partid: partid}});
        } else {  
            document.querySelector('.auth-error')?.classList.add('auth-error_active');
            setTimeout(() => {
                document.querySelector('.auth-error')?.classList.remove('auth-error_active');
            }, 2500);
        }
    };    

    const handleToggleLessons = (path: string) => {
        document.querySelector(`#${path}`)?.classList.toggle('subject__lessons_active');
        document.querySelector(`#${path}-down`)?.classList.toggle('subject__drop_active');
        document.querySelector(`#${path}-up`)?.classList.toggle('subject__drop_active');
    }

    const showDeleteModal = (path: string) => {
        document.querySelector(`#${path}-delete`)?.classList.add('subject__delete_active');
    }

    const closeModals = () => {
        const modals = document.querySelectorAll('.subject__delete');
        modals.forEach(element => {
            element?.classList.remove('subject__delete_active')    
        })
    }

    const deleteSubject = async (path: string) => {
        await storeSubject.delete(path);
    }
    
    return (
        <>
            {storeSubject.isLoading ? (
                <Loader/>
            ) : (
                <>
                    {admin ? (
                        <>
                            {storeSubject.subjects.filter(element => element.grade === grade).map((element, index) => (
                                <div key={element.path} className="subject">
                                    <div id={element.path + '-delete'} onClick={closeModals} className="subject__delete">
                                        <i onClick={closeModals} className="fa-solid fa-xmark"></i>
                                        <div>Ви впевнені, що хочете видалити данну тему?</div>
                                        <div className="subject__btns">
                                            <button onClick={() => deleteSubject(element.path)}>Так</button>
                                        </div>
                                    </div>
                                    <div onClick={() => handleToggleLessons(element.path)} className="subject__header subject__header_admin">
                                        <div className="subject__title_admin">
                                            {index + 1}. {element.title}</div>
                                        <div className="subject__btns">
                                            <i  className="fa-solid fa-pen-to-square subject__btns_edit"></i>
                                            <i onClick={() => {closeModals(); showDeleteModal(element.path)}} className="fa-solid fa-trash subject__btns_delete"></i>
                                        </div>
                                    </div> 
                                    <div id={element.path} className="subject__lessons">
                                        {element.paragraphs.map((item, index) => (
                                            <div key={item._id} className="subject__lesson subject__lesson_admin">
                                                <Link to={`/grade/${grade}/${element.path}/part_${index + 1}`} className="subject__title">{item.title}</Link>
                                                <div className="subject__lesson_wrapper subject__lesson_wrapper_admin">
                                                    <i className="fa-solid fa-pen-to-square subject__btns_edit"></i>
                                                    <i onClick={() => storeTest.setAdding(true)} className="fa-solid fa-plus"></i>
                                                </div>                                           
                                            </div>
                                        ))}                           
                                    </div>                  
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {storeSubject.subjects.filter(element => element.grade === grade).map((element) => (
                                <div key={element.path} className="subject">
                                    <div onClick={() => handleToggleLessons(element.path)} className="subject__header">
                                        <div className="subject__drop-menu">
                                            <i id={element.path + '-down'} className="fa-solid fa-caret-down subject__drop subject__drop_active"></i>
                                            <i id={element.path + '-up'} className="fa-solid fa-caret-up subject__drop"></i>
                                        </div>
                                        <div className="subject__title">{element.title}</div>
                                        <div className="subject__progress">
                                            {storeAuth.isAuth ? (
                                                <>
                                                    {storeAuth.user.progress ? (
                                                        <>  

                                                            <span>Прогрес <strong>{storeAuth.user.progress.filter(chapter => chapter.chapterPath === element.path).length !== 0 
                                                            ? storeAuth.user.progress.filter(chapter => chapter.chapterPath === element.path)[0].chapterProgress 
                                                            : '0'}</strong>%</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Прогрес <strong>0</strong>%</span>
                                                        </>
                                                    )}
                                                    
                                                </>
                                            ) : (
                                                <>
                                                    <span>Прогрес <strong>0</strong>%</span>
                                                </>
                                            )}                                      
                                        </div>
                                    </div>
                                    <div id={element.path} className="subject__lessons">
                                        {element.paragraphs.map((item, index) => (
                                            <div key={item._id} className="subject__lesson">
                                                <Link to={`/grade/${grade}/${element.path}/part_${index + 1}`} className="subject__title">{item.title}</Link>
                                                <div className="subject__lesson_wrapper">
                                                    {storeAuth.isAuth ? (
                                                        <>
                                                            {storeAuth.user.progress ? (
                                                                <>
                                                                    <span>Прогрес <strong>{storeAuth.user.progress.filter(chapter => chapter.chapterPath === element.path).length !== 0 
                                                                    ? (storeAuth.user.progress.filter(chapter => chapter.chapterPath === element.path)[0].parts.filter(part => part.partPath === `part_${index + 1}`).length !== 0 ? storeAuth.user.progress.filter(chapter => chapter.chapterPath === element.path)[0].parts.filter(part => part.partPath === `part_${index + 1}`)[0].partProgress : '0' )
                                                                    : ('0')}</strong>%</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span>Прогрес <strong>0</strong>%</span>
                                                                </>
                                                            )}
                                                            
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Прогрес <strong>0</strong>%</span>
                                                        </>
                                                    )}
                                                    <button className="subject__test-btn" onClick={(event) => handleSelectTest(event, element.path, index + 1, item._id)}>Почати тест</button>
                                                </div>                                           
                                            </div>
                                        ))}                           
                                    </div>                     
                                </div>
                            ))}
                        </>
                    )} 
                </>
            )}             
        </>
    )
})

export default SubjectList;