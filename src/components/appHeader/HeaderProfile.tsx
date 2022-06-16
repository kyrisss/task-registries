import { Link, NavLink } from 'react-router-dom';
import './headerProfile.scss';
import sprite from '../../assets/sprite.svg';
import avatar from '../../assets/user.png';


const HeaderProfile = () => {
    return (
        <div className='header__profile profile'>
            <div className="profile__icon icon">
                <svg className="icon__img">
                    <use xlinkHref={`${sprite}#notes-calendar`} />
                </svg>
            </div>
            <div className="profile__icon icon">
                <svg className="icon__img">
                    <use xlinkHref={`${sprite}#bell`} />
                </svg>
                <div className="icon__notifications">4</div>
            </div>
            <div className="profile__line line"></div>
            <div className="profile__avatar icon">
                <img src={avatar} alt="avatar" />
            </div>
            <p className="profile__name">Захар Палазник</p>
            <div className="profile__property property">
            </div>

        </div>
    )
}

export default HeaderProfile;