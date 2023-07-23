import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade10.sass';

const Grade10 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="10" admin={false}></SubjectList>           
                </div>           
            </div>
        </main>
    )
}

export default Grade10;