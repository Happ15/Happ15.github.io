import { observer } from 'mobx-react-lite';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import point from '../assets/pointOne.png'

const Footer = observer(() => {
    return (
        
        <Container className='text-center text-md-start mt-5 pt-2 bg-secondary text-secondary bg-opacity-10 '>
            <Row className='mt-3'>
                <Col className='md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        <i className='fas fa-gem me-3'>Rich Taste</i>
                    </h6>
                    <div>
                    Мы - сеть доставки еды! Радуем клиентов вкусными роллами и пиццей с 2018 года.
                    Позиция компании заключается в постоянном улучшении качества блюд по максимально доступным ценам!
                    </div>
                </Col>
                <Nav className='d-flex md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <Image width={600} height={200} src={point}/>
                </Nav>
                <Col className='md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                        <i className='fas fa-gem me-3'>КОНТАКТЫ</i>
                    </h6>
                    <div className='mb-2'>
                    Казань, улица Карбышева, дом 64 
                    </div>
                    <div className='mb-2'>
                    dostavka@mail.com
                    </div>
                    <div className='mb-2'>
                    + 7 (987) 654-32-10
                    </div>
                    <div className='mb-2'> 
                    + 7 (987) 654-44-33
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default Footer;