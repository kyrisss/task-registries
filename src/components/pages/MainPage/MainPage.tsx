import HeaderSection from "./HeaderSection/HeaderSection";
import NewsSection from "./NewsSection/NewsSection";
import RegistrySection from "./RegistrySection/RegistrySection";


const MainPage = () => {
    return (
        <main className="main">

            <HeaderSection />
            <RegistrySection />
            <NewsSection></NewsSection>
            <section className="documents section"></section>
            <section className="faq section"></section>

        </main>
    )
}

export default MainPage;