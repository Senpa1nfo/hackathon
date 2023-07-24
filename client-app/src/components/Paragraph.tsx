import { useContext, useEffect, useState } from "react";
import Article from "./Article";
import { ParagraphItem } from "../models/SubjectItem";
import { Context } from "..";
import { observer } from "mobx-react-lite";

interface ParagraphProps {
    pID: string, 
    aID: string, 
    tID: string
}

const Paragraph = observer(({pID, aID, tID}: ParagraphProps) => {

    const {storeSubject} = useContext(Context);
    const [input, setInput] = useState('');

    useEffect(() => {
        const paragraph: ParagraphItem = {
            title: input,
            articles: storeSubject.articles.filter(element => element.id.slice(0, 1) === pID),
            id: `${pID}`
        }
        
        let isExist = false;
        storeSubject.paragraphs.forEach(element => {
            if (element.id === pID) {
                element.title = input;
                element.articles = storeSubject.articles.filter(element => element.id.slice(0, 1) === pID);
                isExist = true;
            }
        })
        if (!isExist) {
            storeSubject.setParagraphs([...storeSubject.paragraphs, paragraph]);
        }        
        storeSubject.setIsChangeParagraph();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [aID, input, pID, storeSubject.articles.length, storeSubject.isChangeArticle])

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
        const filetered = storeSubject.articles.filter((element, index) => element.id.slice(0, 1) === pID);  
        storeSubject.setArticles([...storeSubject.articles.filter((element, index) => element.id.slice(0, 1) !== pID), ...filetered.filter((element, index) =>  index + 1 !== articles.length)]);   
    }

    return (
        <div id={pID} className='admin__form__paragraph'>
            <div className="admin__form__btns">
                <i onClick={() => addArticle(+pID, articles.length + 1)} className="fa-solid fa-plus"></i>
                <i onClick={deleteArticle} className="fa-solid fa-minus"></i>
                <div>{pID + ')'}</div>
                <input value={input} onChange={(event) => setInput(event.target.value)} className='admin__form__paragraph__input' type="text" placeholder='Назва параграфу'/>
            </div>
            {articles.map((element) => (
                <Article key={element.pID + '_' + element.aID} pID={pID} aID={element.aID} tID={element.tID}></Article>
            ))}
        </div> 
    )
})

export default Paragraph;