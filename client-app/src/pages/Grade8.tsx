import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade8.sass';

const Grade8 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="8"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade8;