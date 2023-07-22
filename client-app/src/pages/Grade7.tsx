import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade7.sass';

const Grade7 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="7"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade7;