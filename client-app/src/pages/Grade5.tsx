import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade5.sass';

const Grade5 = () => {

    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="5" admin={false}></SubjectList>           
                </div>
            </div>
        </main>
    )
}

export default Grade5;