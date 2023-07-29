import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../styles/pages/Test.sass';
import { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { TestItem } from '../models/TestItem';
import Loader from '../components/Loader';

const Test = () => {

    const {storeAuth} = useContext(Context);
    const {storeTest} = useContext(Context);
    const { grade, path, part } = useParams();
    const navigate = useNavigate()
    const moveToGrade = () => {
        navigate(`/grade/${grade}`);
    };
    const location = useLocation();
    const partid = location.state?.partid;
    const [transform, setTransform] = useState({transform: 'translateX(0)'});
    const [listIndex, setListIndex] = useState(0);
    const [result, setResult] = useState<any>({});
    const [list, setList] = useState<TestItem>()

    useEffect(() => {
        async function fetchData() {
            const res = await storeTest.getOne(String(path), String(part));
            res?.questions.forEach(element => {
                element.answers.sort(() => {
                    return Math.random() - 0.5;
                  });
            })
            res?.questions.sort(() => {
                return Math.random() - 0.5;
            });
            setList(res);
            storeTest.setLoading(false);
        } 
        fetchData();
    }, [])


    const showNext = () => {
        if (listIndex !== Number(list?.questions.length) - 1) {
            setListIndex(listIndex + 1);
            setTransform({transform: `translateX(calc(-${(listIndex + 1) * 100}% - ${(listIndex + 1) * 316}px))`})          
        }
    }

    const showPrev = () => {
        if (listIndex !== 0) {
            setListIndex(listIndex - 1);
            setTransform({transform: `translateX(calc(-${(listIndex - 1) * 100}% - ${(listIndex - 1) * 316}px))`}) 
        }
    }

    const chooseAnswer = (event: any, index: number) => {
        const options = document.querySelectorAll(`.test__option_${String(index)}`);
        const skip = document.querySelectorAll('.test__option_fifth');
        options.forEach(element => {
            element.classList.remove('test__option_active');
        })
        skip[index - 1].classList.remove('test__option_fifth_active');
        event.target.classList.add('test__option_active');
        if (event.target.textContent === list?.questions[index - 1].correct) {
            result[index] = 1;
        } else {
            result[index] = 0;
        }
        setTimeout(showNext, 600);
    }

    const skipAnswer = (index: number) => {
        const options = document.querySelectorAll(`.test__option_${String(index)}`);
        const skip = document.querySelectorAll('.test__option_fifth');
        options.forEach(element => {
            element.classList.remove('test__option_active');
        })
        skip[index - 1].classList.add('test__option_fifth_active');
        result[index] = 0;
        setTimeout(showNext, 600);
    }

    const showResults = () => {
        if (listIndex !== Number(list?.questions.length)) {
            setListIndex(listIndex + 1);
            setTransform({transform: `translateX(calc(-${(listIndex + 1) * 100}% - ${(listIndex + 1) * 316}px))`})
        }
        storeAuth.updatePartProgress(storeAuth.user.id, String(path), String(part), String(Math.floor((Object.values(result).filter(element => Number(element) > 0).length / Number(list?.questions.length)) * 100)));
    }

    return (
        <main className='test'>
            <div className="container">               
                <div className="test__wrapper">
                    {storeTest.isLoading ? (
                        <div className="test__item">
                            <div className="test__answers">
                                <Loader/>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="test__items">
                                {list?.questions.map((element, index) => (
                                    <div key={String(element._id)} style={transform} className="test__item">
                                        <div className="test__question">{index + 1}/{list.questions.length}. {list.questions[index].title}</div>
                                        <div className="test__answers">
                                            <div onClick={(event) => chooseAnswer(event, index + 1)} className={`test__option test__option_${String(index + 1)}`}>{element.answers[0]}</div>
                                            <div onClick={(event) => chooseAnswer(event, index + 1)} className={`test__option test__option_${String(index + 1)}`}>{element.answers[1]}</div>
                                            <div onClick={(event) => chooseAnswer(event, index + 1)} className={`test__option test__option_${String(index + 1)}`}>{element.answers[2]}</div>
                                            <div onClick={(event) => chooseAnswer(event, index + 1)} className={`test__option test__option_${String(index + 1)}`}>{element.answers[3]}</div>
                                            <span onClick={() => skipAnswer(index + 1)}>Не знаю</span>
                                            <div className="test__option_fifth">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>  
                                ))}
                                <div style={transform} className="test__item test__item_result">
                                    <div className="test__question">Ваші результати:</div>
                                    <div className="test__answers">
                                        <div>Кількість правильних відоповідей: <span>{Object.values(result).filter(element => Number(element) > 0).length}</span> / {list?.questions.length}</div>
                                        <div>Нарахованно відсотків до результату параграфа: <span>{Math.floor((Object.values(result).filter(element => Number(element) > 0).length / Number(list?.questions.length)) * 100)}%</span></div> 
                                        <div>Нарахованно відсотків до результату розділу: <span>{Math.floor(((Object.values(result).filter(element => Number(element) > 0).length / Number(list?.questions.length)) * 100) / 4)}%</span></div>
                                    </div>
                                </div>
                            </div>                                  
                            <div className="test__btns test__btns_mobile">
                                {listIndex !== 0 && listIndex !== list?.questions.length? <button onClick={showPrev}>Попереднє</button> : <div></div>}
                                {listIndex === list?.questions.length && <button onClick={moveToGrade}>До класу</button>}
                                {listIndex <= Number(list?.questions.length) - 2? <button onClick={showNext}>Наступне</button> 
                                    : listIndex !== list?.questions.length? <button onClick={() => showResults()}>Завершити</button> : <div></div>
                                }                      
                            </div>
                        </>
                    )}                   
                </div>
            </div>
        </main>
    );
};

export default Test;