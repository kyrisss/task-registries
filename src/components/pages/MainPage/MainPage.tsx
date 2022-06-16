import HeaderSection from "./HeaderSection/HeaderSection";
import RegistrySection from "./RegistrySection/RegistrySection";


const MainPage = () => {
    return (
        <main className="main">

            <HeaderSection />
            <RegistrySection />
            <section className="reestrs section"></section>
            <section className="news section"></section>
            <section className="documents section"></section>
            <section className="faq section"></section>

        </main>
    )
}

export default MainPage;