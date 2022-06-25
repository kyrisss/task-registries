
import { Link } from 'react-router-dom';
import ErrorPage from '@components/ErrorPage/ErrorPage';
import './page404.scss'


const Page404 = () => {
    return (
        <div className="wrapper">
            <div className='page404'>
                <ErrorPage></ErrorPage>
                <p>Page does not exist</p>
                <Link to="/">Back to main page</Link>
            </div>
        </div>
    )
}


export default Page404