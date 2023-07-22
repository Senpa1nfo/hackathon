import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade10.sass';

const Grade10 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="10"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade10;