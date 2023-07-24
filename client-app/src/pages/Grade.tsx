import { useParams } from 'react-router-dom';
import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade.sass';
import { useEffect } from 'react';

const Grade = () => {

    const { grade } = useParams();

    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade={grade ? grade : '7'} admin={false}></SubjectList>           
                </div>
            </div>
        </main>
    )
}

export default Grade;