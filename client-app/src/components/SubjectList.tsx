import { useContext } from 'react';
import { Context } from '..';
import '../styles/components/SubjectList.sass';
import { observer } from 'mobx-react-lite';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

interface SubjectProps {
    grade: string,
    admin: boolean
}

const SubjectList = observer(({grade, admin}: SubjectProps) => {

    const {storeSubject} = useContext(Context);

    const navigate = useNavigate();

    const handleSelect = (path: string, id: number) => {
        navigate(`/grade/${grade}/${path}/${id}`, {
        });
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
                                    <div className="subject__header subject__header_admin">
                                        <div className="subject__title_admin">
                                            {index + 1}. {element.title}</div>
                                        <div className="subject__btns">
                                            <i  className="fa-solid fa-pen-to-square subject__btns_edit"></i>
                                            <i onClick={() => {closeModals(); showDeleteModal(element.path)}} className="fa-solid fa-trash subject__btns_delete"></i>
                                        </div>
                                    </div>                   
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {storeSubject.subjects.filter(element => element.grade === grade).map((element, index) => (
                                <div key={element.path} className="subject">
                                    <div onClick={() => handleToggleLessons(element.path)} className="subject__header">
                                        <div className="subject__drop-menu">
                                            <i id={element.path + '-down'} className="fa-solid fa-caret-down subject__drop subject__drop_active"></i>
                                            <i id={element.path + '-up'} className="fa-solid fa-caret-up subject__drop"></i>
                                        </div>
                                        <div className="subject__title">{element.title}</div>
                                        <div className="subject__progress">
                                            <span>Прогрес <strong>{element.progress}</strong>%</span>
                                        </div>
                                    </div>
                                    <div id={element.path} className="subject__lessons">
                                        {element.paragraphs.map((item, index) => (
                                            <div key={item._id} className="subject__lesson">
                                                <div className="subject__title" onClick={() => handleSelect(element.path, index + 1)}>{item.title}</div>
                                                <button className="subject__test-btn">Почати тест</button>
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