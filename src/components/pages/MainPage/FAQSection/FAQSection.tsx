import FAQAccordion from './FAQAccordion/FAQAccordion';
import './faqSection.scss';

const FAQSection = () => {

    return (
        <section className="main__faq section">
            <div className="wrapper">
                <div className="faq-container">
                <h2>Вопрос-ответ</h2>
                <div className="faq">
                    <FAQAccordion></FAQAccordion>
                </div>
                </div>

            </div>
        </section>
    )
}

export default FAQSection;