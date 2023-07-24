import { useContext, useEffect, useState } from "react";
import Paragraph from "./Paragraph"
import { Context } from "..";
import { SubjectItem } from "../models/SubjectItem";
import { observer } from "mobx-react-lite";

interface ChapterProps {
    path: string,
    grade: string
}

const Chapter = observer(({path, grade}: ChapterProps) => {

    const {storeSubject} = useContext(Context);
    const [input, setInput] = useState('');

    useEffect(() => {
        const chapter: SubjectItem = {
            path: path,
            grade: grade,
            title: input,
            progress: '0',
            paragraphs: storeSubject.paragraphs,
        }
        storeSubject.setChapter(chapter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, input, grade, storeSubject.paragraphs, storeSubject.isChangeParagraph])

    const [paragraphs, setParagraphs] = useState([{
        pID: '1',
        aID: '1',
        tID: '1'
    }]);

    const addParagraph = (id: number) => {
        const paragraph = {
            pID: `${id}`,
            aID: '1',
            tID: '1'
        }
        setParagraphs([...paragraphs, paragraph])
    }

    const deleteParagraph = () => {
        setParagraphs(paragraphs.filter((element, index) =>  index + 1 !== paragraphs.length))  
        storeSubject.setParagraphs(storeSubject.paragraphs.filter((element, index) => index + 1 !== paragraphs.length));     
        storeSubject.setArticles(storeSubject.articles.filter((element) => element.id.slice(0, 1) !== String(paragraphs.length)));
    }

    return (
        <div id='chapter' className='admin__form__chapter'>
            <div className="admin__form__btns">
                <i onClick={() => addParagraph(paragraphs.length + 1)} className="fa-solid fa-plus"></i>
                <i onClick={deleteParagraph} className="fa-solid fa-minus"></i>
            <input value={input} onChange={(event) => setInput(event.target.value)} className='admin__form__chapter__input' type="text" placeholder='Назва розділу'/>
            </div>
            {paragraphs.map((element) => (
                <Paragraph key={element.pID} pID={element.pID} aID={element.aID} tID={element.tID}></Paragraph>
            ))}
        </div>  
    )
})

export default Chapter;