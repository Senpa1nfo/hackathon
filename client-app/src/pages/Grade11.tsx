import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade11.sass';

const Grade11 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="11" admin={false}></SubjectList>           
                </div>           
            </div>
        </main>
    )
}

export default Grade11;