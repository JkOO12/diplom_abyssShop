import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import telegram from '../source/telegram.png'
import vk from '../source/vk.png'
import { useNavigate } from 'react-router-dom';
import { ABOUT_ROUTE } from '../utils/consts';

const Footer = () => {
    let navigate = useNavigate();
    return (
        <footer className='footer  py-3'>
            <Container>
                <div className='logo-footer mt-5'>
                    Logo
                </div>
                <Row>
                    <Col md = {2} xs = {4}  className='footer-about'>
                        <div>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate(ABOUT_ROUTE); }} style={{ textDecoration: 'none', color: 'inherit' }}>О нас</a>
                        </div>
                    </Col>
                    <Col md = {2} xs = {2}>
                        <div className='footer-contact'>
                            Контакты
                        </div>
                        <div className='footer-phone'>+7966666</div>
                        <div className='footer-mail'>devil@mail.ru</div>
                    </Col>
                    <Col>
                    </Col>
                    <Col md = {3} xs = {6}>
                        <a className='telegram-link' href="https://t.me/onlysoloply" target="_blank">
                            <Image src={telegram}/>
                        </a>
                    </Col>
                    <Col md = {3}  xs = {6}>
                        <a className='vk-link' href="https://vk.com/d.peshkovj" target="_blank">
                            <Image src={vk}/>
                        </a>
                    </Col>

                </Row>

            </Container>
        </footer>
    );
};

export default Footer;