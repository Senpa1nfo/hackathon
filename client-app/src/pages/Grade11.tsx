import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade11.sass';

const Grade11 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="11"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade11;