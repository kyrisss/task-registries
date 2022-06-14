import './headerSection.scss';
import img from '../../../../assets/office.png'
import sprite from '../../../../assets/sprite.svg'

const HeaderSection = () => {
    return (
        <section className="main__header section">
            <div className="wrapper">
                <div className='header__container'>
                    <div className="header__info">
                        <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                        <p className="header__description">Единый реестр программ для электронных вычислительных машин и баз данных</p>
                        <p className="header__description">Включено ПО в реестр: <span>13 438</span> <br />Правообладателей: <span>4 272</span></p>
                        <div className="header__search search">
                            <svg className="search__img">
                                <use xlinkHref={`${sprite}#search`} />
                            </svg>
                            <input type="text" className='search__input' placeholder='Искать реестр...' />
                            <button className="search__button primary-button">Искать</button>
                        </div>
                    </div>
                    <img className='header__img' src={img} />
                </div>

            </div>
        </section>
    )
}

export default HeaderSection;