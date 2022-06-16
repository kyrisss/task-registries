import LoginForm from './LoginForm/LoginForm';
import './loginPage.scss';
import sprite from '../../../assets/sprite.svg'
import { Link } from 'react-router-dom';


const LoginPage = () => {
    return (
        <main className="main">
            <section className="main__login section">
                <div className="wrapper">
                    <Link className="go-home" to="/">
                        <svg className="icon">
                            <use xlinkHref={`${sprite}#arrow-left`} />
                        </svg>
                        <span>Главная</span>
                    </Link>
                    <div className="login-container login">
                        <h2>Авторизация</h2>
                        <LoginForm></LoginForm>
                        <div className="login__ways">
                            <a className="login-way" href='#'>Авторизация с использованием ЕС ИФЮЛ</a>
                            <a className="login-way" href='#'>Авторизация с использованием МСИ</a>
                        </div>
                        <div className="login__registr">
                            У вас нет аккаунта? <br />
                            <a href="#" className='login__registr_link'>Нажмите сюда чтобы создать</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage;