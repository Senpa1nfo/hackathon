import { useParams } from 'react-router-dom';
import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade.sass';
import AuthError from '../components/AuthError';

const Grade = () => {

    const { grade } = useParams();

    return (
        <>
            <AuthError/>
            <main>
                <div className="container">
                    <div className="grade__list">
                        <SubjectList grade={grade} admin={false}></SubjectList>           
                    </div>
                </div>
            </main>
        </>     
    )
}

export default Grade;