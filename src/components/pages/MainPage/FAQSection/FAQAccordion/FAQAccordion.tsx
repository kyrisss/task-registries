
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './faqAccordion.scss';
import plus from '@assets/plus.svg';


function FAQAccordion() {

    const bodyCard = <ol>
        <li>Данные для авторизации в личном кабинете</li>
        <li>Квалифицированный сертификат ключа проверки электронной подписи.</li>
        <li>Сведения, документы и материалы в соответствии с Методическими рекомендациями.</li>
        <li>Данные для авторизации в личном кабинете</li>
    </ol>

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Для подачи заявления необходимо подготовить</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Связь с оператором реестра</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Как подать заявление на включение программного обеспечения в реестр</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Где можно подать заявление</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Как узнать мне причину отказа</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Что делать, если Вам отказали</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Изменение реестревой записи</Accordion.Header>
                <Accordion.Body>
                    {bodyCard}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FAQAccordion;