import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import './settingsForm.scss'
import sprite from '@assets/sprite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/store'
import { setProfile } from '@redux/profileSlice'

const Form = () => {
    const [showPassword, setShowpassword] = useState<Boolean>(false)
    const { firstName, lastName, patronymic, country, city, phone, password} = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch<AppDispatch>()

    const toggleShowPassword = () => {
        if (showPassword === false) {
            setShowpassword(true)
        } else {
            setShowpassword(false)
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName,
            lastName,
            patronymic,
            country,
            city,
            phone,
            password,
            passwordConfirm: password,
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'Минимум 2 символа')
                .required('Обязательное поле'),
            lastName: Yup.string()
                .min(2, 'Минимум 2 символа')
                .required('Обязательное поле'),
            patronymic: Yup.string()
                .min(2, 'Минимум 2 символа')
                .required('Обязательное поле'),
            country: Yup.string()
                .required('Обязательное поле'),
            city: Yup.string()
                .required('Обязательное поле'),
            phone: Yup.string()
                .required('Обязательное поле')
                .min(10, 'Не менее 10 симоволов'),
            password: Yup.string()
                .required('Обязательное поле')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Должен состоять из не менее 8 символов, заглавных, строчных, цифр и одного специального символа(!,@,#,$,%,^,&,*)"
                ),
            passwordConfirm: Yup.string()
                .required('Обязательное поле')
                .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')

        }),
        onSubmit: (values) => {dispatch(setProfile(values))}
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form__item">
                <label htmlFor="firstName" className={formik.errors.firstName && formik.touched.firstName ? 'error' : ''}>Имя</label>
                <input className={formik.errors.firstName && formik.touched.firstName ? 'error' : ''}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder='Введите имя'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
            </div>
            <div className="form__item">
                <label htmlFor="lastName" className={formik.errors.lastName && formik.touched.lastName ? 'error' : ''}>Фамилия</label>
                <input
                    className={formik.errors.lastName && formik.touched.lastName ? 'error' : ''}
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder='Введите фамилию'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
             </div>
            <div className="form__item">
                <label htmlFor="patronymic" className={formik.errors.patronymic && formik.touched.patronymic ? 'error' : ''}>Отчество</label>
                <input className={formik.errors.patronymic && formik.touched.patronymic ? 'error' : ''}
                    id="patronymic"
                    name="patronymic"
                    type="text"
                    placeholder='Введите отчество'
                    value={formik.values.patronymic}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.patronymic && formik.touched.patronymic ? <div className="error">{formik.errors.patronymic}</div> : null}
            </div>
            <div className="form__item">
                <label htmlFor="country" className={formik.errors.country && formik.touched.country ? 'error' : ''}>Страна</label>
                <select className={formik.errors.country && formik.touched.country ? 'error' : ''}
                    id="country"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <option value="">Выберите страну</option>
                    <option value="BY">Беларусь</option>
                    <option value="UA">Украина</option>
                    <option value="GE">Грузия</option>
                    <option value="AD">Андорра</option>
                    <option value="DO">Доминикана</option>
                    <option value="CY">Кипр</option>
                </select>
                {formik.errors.country && formik.touched.country ? <div className="error">{formik.errors.country}</div> : null}
            </div>
            <div className="form__item">
                <label htmlFor="city" className={formik.errors.city && formik.touched.city ? 'error' : ''}>Город</label>
                <select className={formik.errors.city && formik.touched.city ? 'error' : ''}
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <option value="">Выберите город</option>
                    <option value="Minsk">Минск</option>
                    <option value="Kyiv">Киев</option>
                    <option value="Tbilisi">Тбилиси</option>
                    <option value="Canillo">Канилло</option>
                    <option value="Santiago">Сантьяго</option>
                    <option value="Limassol">Лимасол</option>
                </select>
                {formik.errors.city && formik.touched.city ? <div className="error">{formik.errors.city}</div> : null}
            </div>
            <div className="form__item" >
                <label htmlFor="phone" className={formik.errors.phone && formik.touched.phone ? 'error' : ''}>Мобильный телефон</label>
                <input className={formik.errors.phone && formik.touched.phone ? 'error' : ''}
                    id="phone"
                    name="phone"
                    autoComplete="username"
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? <div className="error">{formik.errors.phone}</div> : null}
            </div>
            <div className="settings__line line-margin"></div>
            <p className="title">Пароль</p>
            <div className="form__item">
                <label htmlFor="password" className={formik.errors.password && formik.touched.password ? 'error' : ''}>Новый пароль</label>
                <input className={formik.errors.password && formik.touched.password ? 'error' : ''}
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder='Введите новый пароль'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <svg className="hide-password" onClick={toggleShowPassword}>
                    <use xlinkHref={`${sprite}#eye-slash`} />
                </svg>
                {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}
            </div>
            <div className="form__item" >
                <label htmlFor="passwordConfirm" className={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? 'error' : ''}>Подтверждение пароля</label>
                <input className={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? 'error' : ''}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder='Подтвердите пароль'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <svg className="hide-password" onClick={toggleShowPassword}>
                    <use xlinkHref={`${sprite}#eye-slash`} />
                </svg>
                {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? <div className="error">{formik.errors.passwordConfirm}</div> : null}
            </div>
            <div className="settings__line line-margin"></div>
            <button type="submit" className='primary-button'>Отправить</button>
        </form>
    )
}

export default Form;