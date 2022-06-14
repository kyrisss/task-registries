import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';
import sprite from '../../assets/sprite.svg';
import HeaderProfile from './HeaderProfile';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="wrapper">
                <div className="header">
                    <div className="header__logo logo">
                        <Link to='/'>
                            <svg className="logo__img">
                                <use xlinkHref={`${sprite}#logo`} />
                            </svg>
                        </Link>
                    </div>
                    <div className="header__search search">
                        <svg className="search__img">
                            <use xlinkHref={`${sprite}#search`} />
                        </svg>
                        <input type="text" className='search__input' placeholder='Поиск' />
                    </div>
                    <HeaderProfile />
                </div>
            </div>
        </header>
    )
}

export default AppHeader;