import { useState } from "react";
import Paragraph from "./Paragraph"

const Chapter = () => {

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
    }

    return (
        <div id='chapter' className='admin__form__chapter'>
            <div className="admin__form__btns">
                <i onClick={() => addParagraph(paragraphs.length + 1)} className="fa-solid fa-plus"></i>
                <i onClick={deleteParagraph} className="fa-solid fa-minus"></i>
            <input className='admin__form__chapter__input' type="text" placeholder='Назва розділу'/>
            </div>
            {paragraphs.map((element) => (
                <Paragraph key={element.pID} pID={element.pID} aID={element.aID} tID={element.tID}></Paragraph>
            ))}
        </div>  
    )
}

export default Chapter;