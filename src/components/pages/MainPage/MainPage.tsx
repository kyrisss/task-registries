import HeaderSection from "./HeaderSection/HeaderSection";
import NewsSection from "./NewsSection/NewsSection";
import RegistrySection from "./RegistrySection/RegistrySection";
import DocumentsSection from './DocumentsSection/DocumentsSection';


const MainPage = () => {
    return (
        <main className="main">

            <HeaderSection />
            <RegistrySection />
            <NewsSection></NewsSection>
            <DocumentsSection></DocumentsSection>
            <section className="faq section"></section>

        </main>
    )
}

export default MainPage;