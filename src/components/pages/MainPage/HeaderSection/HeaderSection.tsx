import './headerSection.scss';
import img from '@assets/office.png'
import sprite from '@assets/sprite.svg'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { setSearch } from '@redux/registrySlice';

const HeaderSection = () => {

    const dispatch = useDispatch<AppDispatch>()

    const inputHandler = (e:any) =>{
        dispatch(setSearch(e.target.value))
    }

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
                            <input type="text" className='search__input' placeholder='Искать реестр...' onChange={inputHandler}/>
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