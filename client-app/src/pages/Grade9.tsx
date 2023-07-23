import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade9.sass';

const Grade9 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="9" admin={false}></SubjectList>           
                </div>            
            </div>
        </main>
    )
}

export default Grade9;