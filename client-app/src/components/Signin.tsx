import { useContext, useEffect, useState } from 'react';
import '../styles/components/Signin.sass';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Signin = observer(() => {

    const {storeAuth} = useContext(Context);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState<boolean>(false);

    const [nameError, setNameError] = useState<string>("Некоректнк ім'я");
    const [emailError, setEmailError] = useState<string>("Некоректний email");
    const [passwordError, setPasswordError] = useState<string>("Мінімум 8 символів");
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>("Паролі не співпадають");

    const [validRegistraion, setValidRegistraion] = useState<boolean>(false);
    const [validLogin, setValidLogin] = useState<boolean>(false);
    const [validRestore, setValidRestore] = useState<boolean>(false);

    useEffect(() => {
        if (nameError || emailError || passwordError || repeatPasswordError) {
            setValidRegistraion(false);
        } else {
            setValidRegistraion(true);
        }
        if (emailError || passwordError) {
            setValidLogin(false);
        } else {
            setValidLogin(true);
        }
        if (emailError) {
            setValidRestore(false);
        } else {
            setValidRestore(true);
        }
    }, [emailError, nameError, passwordError, repeatPasswordError])

    useEffect(() => {
        if (!storeAuth.logError) {
            document.querySelector('.signin__error_login')?.classList.remove('signin__error_login_active');
        } else {
            document.querySelector('.signin__error_login')?.classList.add('signin__error_login_active');
            setTimeout(() => {
                storeAuth.setLogError('');
            }, 5000)
        }
        if (!storeAuth.regError) {
            document.querySelector('.signin__error_reg')?.classList.remove('signin__error_reg_active');
        } else {
            document.querySelector('.signin__error_reg')?.classList.add('signin__error_reg_active');
            setTimeout(() => {
                storeAuth.setRegError('');
            }, 5000)
        }
        if (!storeAuth.resError) {
            document.querySelector('.signin__error_restore')?.classList.remove('signin__error_restore_active');
        } else {
            document.querySelector('.signin__error_restore')?.classList.add('signin__error_restore_active');
            setTimeout(() => {
                storeAuth.setResError('');
            }, 5000)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeAuth.logError, storeAuth.regError, storeAuth.resError])

    useEffect(() => {
        if (storeAuth.isAuth) {
            const sign = document.querySelector('.signin');
            sign?.classList.remove('signin_active');
        }
    }, [storeAuth.isAuth])

    const toggleForm = () => {
        const signin = document.querySelector('#signin');
        const signup = document.querySelector('#signup');

        signin?.classList.toggle('signin__form_active');
        signup?.classList.toggle('signin__form_active');
    }

    const forgotPassword = () => {
        const signin = document.querySelector('#signin');
        const restore = document.querySelector('#restore');
        signin?.classList.toggle('signin__form_active');
        restore?.classList.toggle('signin__form_active');
    }

    const closeModal = (event: any) => {
        const sign = document.querySelector('.signin');
        if (event.target === sign) {
            sign?.classList.toggle('signin_active');
        }        
    }

    const handleBlur = (event: any) => {
        switch (event.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'repeatPassword':
                setRepeatPasswordDirty(true);
                break;
        }
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          return false;
        }
        return true;
      }      

    const validateName = (name:string) => {
        if (name.length < 2 || name.length > 30) {
            return false;
        }
        const nameRegex = /^[А-ЩЬЮЯЇЄҐґІіЇїЄєҐґa-щьюяїієґ]+$/;
        if (!name.match(nameRegex)) {
            return false;
        }
        if (name.trim() !== name) {
            return false;
        }
        return true;
    }
   
    const handleName = (event: any) => {
        setName(event.target.value);
        if (!validateName(event.target.value)) {
            setNameError("Некоректне ім'я");
        } else {
            setNameError("");
        }
    }

    const handleEmail = (event: any) => {
        setEmail(event.target.value);
        if (!validateEmail(event.target.value)) {
            setEmailError('Некоректний email');
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (event: any) => {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
            setPasswordError('Мінімум 8 символів');
        } else {
            setPasswordError('');
        }
    }

    const handleRepeatPassword = (event: any) => {
        setRepeatPassword(event.target.value);
        if (event.target.value === password) {
            setRepeatPasswordError('');
        } else { 
            setRepeatPasswordError('Паролі не співпадають');
        }
    }

    const login = (event: any) => {
        event.preventDefault();
        storeAuth.login(email, password);
    }

    const registration = (event: any) => {
        event.preventDefault();
        storeAuth.registration(name, email, password)
        .catch(res => console.log(res))
    }

    const sendMail = (event: any) => {
        event.preventDefault();
    }

    return (
        <div onClick={closeModal} className='signin'>
            <div className="signin__wrapper">
                <form id='signin' className='signin__form signin__form_active' action="">
                    <div className="signin__text">Увійти до облікового запису</div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="email">Email</label>
                            {(emailDirty && emailError) && <span>{emailError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handleEmail}
                            value={email}
                            className="signin__input" 
                            type="text" 
                            name='email'
                            id='email'
                            placeholder='Введіть пошту'
                        />
                    </div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="password">Пароль</label>
                            {(passwordDirty && passwordError) && <span>{passwordError}</span>}
                        </div>
                        <input
                            onBlur={handleBlur}
                            onChange={handlePassword}
                            value={password}
                            className="signin__input" 
                            type="password" 
                            name='password'
                            id='password'
                            placeholder='Введіть пароль'
                        />
                    </div>
                    <div className="signin__error signin__error_login">
                        <span className="signin__error__span">{storeAuth.logError}</span>
                    </div>
                    <div className="signin__btns">
                        <button onClick={login} disabled={!validLogin}>Увійти</button>   
                        <span onClick={forgotPassword}>Забули пароль?</span>    
                    </div>
                    <div className="signin__to-reg">
                        <div>Немає облікового запису?</div>
                        <span onClick={toggleForm}>Зареєструватися</span>
                    </div>
                </form>
                
                <form id='restore' className='signin__form' action="">
                    <div className="signin__text">Відновлення паролю</div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="restore-email">Email</label>
                            {(emailDirty && emailError) && <span>{emailError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handleEmail}
                            value={email}
                            className="signin__input" 
                            type="text" 
                            name='email'
                            id='restore-email'
                            placeholder='Введіть пошту'
                        />
                    </div>
                    <div className="signin__error signin__error_restore">
                        <span className="signin__error__span">{storeAuth.resError}</span>
                    </div>
                    <div className="signin__btns_reg">
                        <button onClick={sendMail} disabled={!validRestore}>Надіслати лист</button>     
                    </div>
                    <div className="signin__to-reg">
                        <div>Пам'ятаєте пароль?</div>
                        <span onClick={forgotPassword}>Повернутися</span>
                    </div>
                </form>

                <form id='signup' className='signin__form' action="">
                    <div className="signin__text">Зареєструвати обліковий запис</div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="name">Ім'я</label>
                            {(nameDirty && nameError) && <span>{nameError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handleName}
                            value={name}
                            className="signin__input" 
                            type="text" 
                            name='name'
                            id='name'
                            placeholder="Введіть ім'я"
                        />
                    </div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="email">Email</label>
                            {(emailDirty && emailError) && <span>{emailError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handleEmail}
                            value={email}
                            className="signin__input" 
                            type="text" 
                            name='email'
                            id='signup-email'
                            placeholder='Введіть пошту'
                        />
                    </div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="signup-password">Пароль</label>                           
                            {(passwordDirty && passwordError) && <span>{passwordError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handlePassword}
                            value={password}
                            className="signin__input" 
                            type="password" 
                            name='password'
                            id='signup-password'
                            placeholder='Введіть пароль'
                        />
                    </div>
                    <div className="signin__item">
                        <div className="signin__error">
                            <label htmlFor="repeatPassword">Повторити пароль</label>
                            {(repeatPasswordDirty && repeatPasswordError) && <span>{repeatPasswordError}</span>}
                        </div>
                        <input 
                            onBlur={handleBlur}
                            onChange={handleRepeatPassword}
                            value={repeatPassword}
                            className="signin__input" 
                            type="password"
                            name='repeatPassword' 
                            id='repeatPassword'
                            placeholder='Введіть пароль ще раз'
                        />
                    </div>
                    <div className="signin__error signin__error_reg">
                        <span className="signin__error__span">{storeAuth.regError}</span>
                    </div>
                    <div className="signin__btns_reg">
                        <button onClick={registration} disabled={!validRegistraion}>Зареєструватися</button>      
                    </div>
                    <div className="signin__to-reg">
                        <div>Вже є обліковий запис?</div>
                        <span onClick={toggleForm}>Увійти</span>
                    </div>
                </form>
            </div>
        </div>
    )
})

export default Signin;