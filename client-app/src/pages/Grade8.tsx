import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade8.sass';

const Grade8 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="8" admin={false}></SubjectList>           
                </div>            
            </div>
        </main>
    )
}

export default Grade8;