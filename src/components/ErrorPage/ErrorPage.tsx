import error from './connection.png'
import './errorPage.scss'

const ErrorPage = () =>{
    return(
        <div className='error-img'>
            <img src={error} alt="error" />
        </div>
    )
} 

export default ErrorPage