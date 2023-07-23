import { useState } from "react";
import Article from "./Article";

interface ParagraphProps {
    pID: string, 
    aID: string, 
    tID: string
}

const Paragraph = ({pID, aID, tID}: ParagraphProps) => {

    const [articles, setArticles] = useState([{
        pID: `${pID}`,
        aID: `${aID}`,
        tID: `${tID}`
    }]);

    const addArticle = (pId: number, aId:number) => {
        const article = {
            pID: `${pId}`,
            aID: `${aId}`,
            tID: `${tID}`
        }
        setArticles([...articles, article])
    }

    const deleteArticle = () => {
        setArticles(articles.filter((element, index) =>  index + 1 !== articles.length))      
    }

    return (
        <div id={pID} className='admin__form__paragraph'>
            <div className="admin__form__btns">
                <i onClick={() => addArticle(+pID, articles.length + 1)} className="fa-solid fa-plus"></i>
                <i onClick={deleteArticle} className="fa-solid fa-minus"></i>
                <div>{pID + ')'}</div>
                <input className='admin__form__paragraph__input' type="text" placeholder='Назва параграфу'/>
            </div>
            {articles.map((element) => (
                <Article key={element.pID + '_' + element.aID} pID={pID} aID={element.aID} tID={element.tID}></Article>
            ))}
        </div> 
    )
}

export default Paragraph;