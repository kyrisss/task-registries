
import TabContainer from './TabContainer/TabContainer';


const ProfilePage = () => {
    return (
        <main className="main">
            <section className="main__profile section">
                <div className="wrapper">
                    <h2>Личный кабинет</h2>
                    <TabContainer></TabContainer>
                </div>


            </section>
        </main>
    )
}

export default ProfilePage;