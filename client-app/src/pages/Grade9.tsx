import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade9.sass';

const Grade9 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="9"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade9;