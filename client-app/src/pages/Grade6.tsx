import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade6.sass';

const Grade6 = () => {
    return (
        <main>
            <div className="container">
                <div className="grade__list">
                    <SubjectList grade="6" admin={false}></SubjectList>           
                </div>           
            </div>
        </main>
    )
}

export default Grade6;