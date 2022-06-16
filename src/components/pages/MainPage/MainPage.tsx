import HeaderSection from "./HeaderSection/HeaderSection";
import NewsSection from "./NewsSection/NewsSection";
import RegistrySection from "./RegistrySection/RegistrySection";
import DocumentsSection from './DocumentsSection/DocumentsSection';
import FAQSection from './FAQSection/FAQSection';


const MainPage = () => {
    return (
        <main className="main">
            <HeaderSection />
            <RegistrySection />
            <NewsSection></NewsSection>
            <DocumentsSection></DocumentsSection>
            <FAQSection></FAQSection>
        </main>
    )
}

export default MainPage;