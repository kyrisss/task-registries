import './tabContainer.scss'
import sprite from '../../../../assets/sprite.svg'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProfileSettings from './../ProfileSettings/ProfileSettings';



const TabContainer = () => {
    return (
        <div className="tab-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> 
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#user-round`} />
                                </svg>
                                    Мои данные</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#bell`} />
                                </svg>
                                    Уведомления</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#note-bookmark`} />
                                </svg>
                                Реестры</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#paper`} />
                                </svg>
                                Метаданные</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#lock-closed-II`} />
                                </svg>
                                Безопасность</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#download`} />
                                </svg>
                                Мои загрузки</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seventh">
                                <svg className='profile-icon'>
                                    <use xlinkHref={`${sprite}#logout`} />
                                </svg>
                                Выход</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <ProfileSettings></ProfileSettings>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {"Hello"}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                {"Hello"}
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                {"Hello"}
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                {"Hello"}
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                {"Hello"}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default TabContainer;
