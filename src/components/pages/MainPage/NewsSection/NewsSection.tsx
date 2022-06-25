import './newsSection.scss';

import sprite from '@assets/sprite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/store';
import { addNews } from '@redux/newsSlice';


const NewsSection = () => {

    const news = useSelector((state: RootState) => state.news.news)
    const dispatch = useDispatch<AppDispatch>()

    const nextHandler = () => {
        dispatch(addNews())
    }

    const mapNews = news.map(n => {
        return (
            <div className="news" key={n.date}>
                <img className='news__img' src={n.img} alt={n.title} />
                <p className="news__title">{n.title}</p>
                <div className="news__date">
                    <svg className="news__date_img">
                        <use xlinkHref={`${sprite}#notes-calendar`} />
                    </svg>
                    {n.date}</div>
                <p className="news__description">{n.description}</p>
            </div>
        )
    })

    return (
        <section className="main__news section">
            <div className="wrapper">
                <h2>Новости реестра</h2>
                <div className='news__container'>
                    {mapNews}
                </div>
                <button className="primary-button" onClick={nextHandler}>Показать все</button>
            </div>
        </section>
    )
}

export default NewsSection;