import SubjectList from '../components/SubjectList';
import '../styles/pages/Grade6.sass';

const Grade6 = () => {
    return (
        <main>
            <div className="container">
                <SubjectList grade="6"></SubjectList>           
            </div>
        </main>
    )
}

export default Grade6;