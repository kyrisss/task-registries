import './profileSettings.scss';
import avatar from '@assets/user.png';
import SettingsForm from './SettingsForm/SettingsForm';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';



const ProfileSettings = () => {

    const firstName  = useSelector((state: RootState) => state.profile.firstName)
    return (
        <>
        <div className="profile-container settings">
            <div className="settings__greeting greeting">
                <img className='greeting__img profile__avatar' src={avatar} alt="avatar" />
                <p className="greeting__text">{`Здравствуй, ${firstName}!`}</p>
            </div>
            <div className="settings__line"></div>
            <div className="settings__data">
                <p className="title">Основные данные</p>
                <SettingsForm></SettingsForm>
            </div>
        </div>
        </>
    )
}

export default ProfileSettings;