import '../styles/components/AuthError.sass';

const AuthError = () => {

    const closeModal = (event: any) => {
        const sign = document.querySelector('.auth-error');
        if (event.target === sign) {
            sign?.classList.remove('auth-error_active');
        }        
    }

    return (
        <div onClick={closeModal} className='auth-error error_active'>
            <div className="auth-error__wrapper">
                Вам потрібно зареєструватися!
            </div>
        </div>
    );
};

export default AuthError;