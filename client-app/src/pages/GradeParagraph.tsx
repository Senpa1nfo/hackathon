import { useParams } from 'react-router-dom';
import '../styles/pages/GradeParagraph.sass';
import { Context } from '..';
import { useContext, useEffect, useState } from 'react';
import { SubjectItemGet } from '../models/SubjectItemGet';

const GradeParagraph = () => {

    const {storeSubject} = useContext(Context);
    const { path, id } = useParams();
    const [chapter, setChapter] = useState<SubjectItemGet>();

    useEffect(() => {
        async function fetchData() {
            if (path) {
                const response = await storeSubject.getOne(path);   
                setChapter(response?.data);          
            }
        }
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main>
            <div className="container">
                <div key={chapter?.path} className='chapter'>
                    <h1 className="chapter__title">{chapter?.paragraphs[Number(id) -1].title}</h1>
                    <div className="chapter__wrapper">
                        {chapter?.paragraphs[Number(id) -1].articles.map(element => (
                            <div key={element._id} className="chapter__article">
                                <div className='chapter__article__title'>{element.title}</div>
                                <div className='chapter__article__text'>{element.text.split('\n').map((element, index) => (
                                    <p key={index}>{element}</p>
                                ))}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GradeParagraph;