import '../styles/pages/AdminPanel.sass';

const AdminPanel = () => {

    const chooseTab = (event: any) => {
        const tabs = document.querySelectorAll('.admin__list__item');
        tabs.forEach(element => {
            element.classList.remove('admin__list__item_active');
        })
        event.target.classList.add('admin__list__item_active'); 
    }

    return (
        <main>
            <div className="container">
                <div className="admin">
                    <div className="admin__menu">
                        <div className="admin__list">
                            <div onClick={chooseTab} className="admin__list__item">5 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">6 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">7 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">8 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">9 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">10 клас</div>
                            <div onClick={chooseTab} className="admin__list__item">11 клас</div>
                        </div>
                    </div>
                    <div className="admin__workspace">

                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminPanel;