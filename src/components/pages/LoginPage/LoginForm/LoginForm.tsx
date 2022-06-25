import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/store';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './loginForm.scss';
import { setLogin } from '@redux/loginSlice';


const LoginForm = () => {

    const {firstName, password} = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            remember: false
        },
        validationSchema: Yup.object().shape({
            login: Yup.string()
                .min(2, 'Минимум 2 символа')
                .required('Обязательное поле'),
            password: Yup.string()
                .required('Обязательное поле')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Должен состоять из не менее 8 символов, заглавных, строчных, цифр и одного специального символа(!,@,#,$,%,^,&,*)"
                ),
            remember: Yup.boolean()
                .required('Необходимо согласие')
                .oneOf([true], 'Необходимо согласие')
        }),
        onSubmit: (values) => {
            if(firstName === values.login && password === values.password){
                dispatch(setLogin(true))
                navigate('/')
            }
         }
    })

    return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="form__item">
                <label htmlFor="login" className={formik.errors.login && formik.touched.login ? 'error' : ''}>Имя</label>
                <input className={formik.errors.login && formik.touched.login ? 'error' : ''}
                    id="login"
                    name="login"
                    type="text"
                    placeholder='Введите имя'
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.login && formik.touched.login ? <div className="error">{formik.errors.login}</div> : null}
            </div>
            <div className="form__item">
                <label htmlFor="password" className={formik.errors.password && formik.touched.password ? 'error' : ''}>Новый пароль</label>
                <input className={formik.errors.password && formik.touched.password ? 'error' : ''}
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    placeholder='Введите пароль'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}
            </div>
            <div className="form__item" >
                <input className={formik.errors.remember && formik.touched.remember ? 'error custom-checkbox' : 'custom-checkbox'}
                    id="remember"
                    name="remember"
                    type="checkbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="remember" className={formik.errors.remember && formik.touched.remember ? 'error' : ''}>Запомнить меня на этом компьютере</label>
                {formik.errors.remember && formik.touched.remember ? <div className="error">{formik.errors.remember}</div> : null}
            </div>
            <button type="submit" className='primary-button'>Отправить</button>
        </form>
    )
}

export default LoginForm;