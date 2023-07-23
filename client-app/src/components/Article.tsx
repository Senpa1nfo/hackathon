interface ArticleProps {
    pID: string, 
    aID: string, 
    tID: string
}

const Article = ({pID, aID, tID}: ArticleProps) => {

    return (
        <div id={pID + '_' + aID} className='admin__form__article'>
            <div className="admin__form__btns">
                <div>{pID + '_' + aID + ')'}</div>
                <input className='admin__form__article__input' type="text" placeholder='Назва пункту'/>
            </div>
            <textarea key={pID + '_' + aID  + '_' + tID} id={pID  + '_' + aID  + '_' + tID} placeholder="Текст пунтку"></textarea>
        </div>
    )
}

export default Article;