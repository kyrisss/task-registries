import { Link, NavLink } from 'react-router-dom';
import './headerProfile.scss';
import sprite from '@assets/sprite.svg';
import avatar from '@assets/user.png';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';


const HeaderProfile = () => {

    const {firstName, lastName}  = useSelector((state: RootState) => state.profile)

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
            <Link to='/profile'>
                <div className="profile__avatar icon">
                    <img src={avatar} alt="avatar" />
                </div>
            </Link>
            <Link to='/profile' className="profile__name">
                {`${firstName} ${lastName}`}
            </Link>
            <div className="profile__property property">
            </div>

        </div>
    )
}

export default HeaderProfile;