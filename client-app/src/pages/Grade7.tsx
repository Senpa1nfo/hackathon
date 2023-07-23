import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade7.sass';

const Grade7 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="7" admin={false}></SubjectList>           
                </div>     
            </div>
        </main>
    )
}

export default Grade7;