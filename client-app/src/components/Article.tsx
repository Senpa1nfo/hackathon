import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { ArticleItem } from "../models/SubjectItem" ;
import { observer } from "mobx-react-lite";

interface ArticleProps {
    pID: string, 
    aID: string, 
    tID: string
}

const Article = observer(({pID, aID, tID}: ArticleProps) => {

    const {storeSubject} = useContext(Context);

    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');

    useEffect(() => {
        const article: ArticleItem = {
            title: input,
            text: textarea,
            id: `${pID + '_' + aID}`
        }

        let isExist = false;
        storeSubject.articles.forEach(element => {
            if (element.id === pID + '_' + aID) {
                element.title = input;
                element.text = textarea;
                isExist = true;
            }
        })
        if (!isExist) {
            storeSubject.setArticles([...storeSubject.articles, article]);
        }
        storeSubject.setIsChangeArticle();
    }, [aID, input, pID, storeSubject, textarea])

    return (
        <div id={pID + '_' + aID} className='admin__form__article'>
            <div className="admin__form__btns">
                <div>{pID + '_' + aID + ')'}</div>
                <input value={input} onChange={(event) => setInput(event.target.value)} className='admin__form__article__input' type="text" placeholder='Назва пункту'/>
            </div>
            <textarea value={textarea} onChange={(event) => setTextarea(event.target.value)} key={pID + '_' + aID  + '_' + tID} id={pID  + '_' + aID  + '_' + tID} placeholder="Текст пунтку"></textarea>
        </div>
    )
})

export default Article;