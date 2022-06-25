import { Link } from 'react-router-dom';
import sprite from '@assets/sprite.svg';


const HeaderLogout = () => {

    return (
        <div className='header__profile profile'>
            <div className="profile__line line"></div>
            <Link to='/login'>
            <div className="profile__icon icon">
                <svg className="icon__img">
                    <use xlinkHref={`${sprite}#user-round`} />
                </svg>
            </div>
            </Link>
            <Link to='/login' className="profile__name">
                Вход в аккаунт
            </Link>
            <div className="profile__property property">
            </div>

        </div>
    )
}

export default HeaderLogout;