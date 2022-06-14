import { Link, NavLink } from 'react-router-dom';
import './appFooter.scss';
import sprite from '../../assets/sprite.svg';


const AppHeader = () => {
    return (
        <footer className="app__footer footer">
            <div className="wrapper">
                <div className="footer__info">
                    <div className="info__about about info__section">
                        <Link to='/'>
                            <svg className="logo__img">
                                <use xlinkHref={`${sprite}#logo`} />
                            </svg>
                        </Link>
                        <p className="about__description description">Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г</p>
                        <p className='about__title'>Разработчик</p>
                        <p className='about__name'>ОАО «Агентство сервисизации и реинжиниринга»</p>
                        <p className='about__address'>Минск, улица Клары Цеткин, 24</p>
                    </div>
                    <div className="info__navigation navigation info__section">
                        <h3>Информация</h3>
                        <ul className='nav'>
                            <li className='nav__item'>
                                <Link to='/'>Реестры</Link>
                            </li>
                            <li className='nav__item'>
                                <Link to='/'>Новости</Link>
                            </li>
                            <li className='nav__item'>
                                <Link to='/'>Документы</Link>
                            </li>
                            <li className='nav__item'>
                                <Link to='/'>Вопросы</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info__support support info__section">
                        <h3>Техническая поддержка</h3>
                        <p className="support__description description">Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
                        <a className="support__contact" href='tel:+375251112233'>+375 25 111 22 33 </a>
                        <a className="support__contact" href='tel:+375292224455'>+375 29 222 44 55</a>
                        <a className="support__contact" href='mailto:ReestrPOsupport@mail.ru'>ReestrPOsupport@mail.ru</a>
                    </div>
                    <div className="info__contacts contacts info__section">
                        <h3>Контакты</h3>
                        <a className="contacts__contact" href='tel:+375331122245'>+375 33 112 22 45</a>
                        <a className="contacts__contact" href='tel:+375292224488'>+375 29 222 44 88</a>
                        <a className="contacts__contact" href='mailto:ReesrtPO@mail.ru'>ReesrtPO@mail.ru</a>
                        <p className="contacts__contact">220004 г. Минск, ул. Карла Маркса, 38</p>
                        <a href="#" className='contacts__link'>Связаться с поддержкой</a>
                    </div>
                </div>
                <div className="footer__copyright">
                    © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
                </div>
            </div>
        </footer>
    )
}

export default AppHeader;