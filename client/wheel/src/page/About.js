import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';

const About = () => {

    return (
        <div className='about-page'>
            <Container>
                <Row>
                    <Col md={12} xs = {12} className='about-page-main-block'>
                        <div className='about-page-main-block-text'>
                            <div className='about-page-main-block-header'>
                                О нас
                            </div>
                            <div className='about-page-main-block-body-text-one'>
                                Добро пожаловать в Abyss Shop - ваш источник стильной и качественной одежды.
                                Мы стремимся предложить вам не просто одежду, а настоящий образ жизни, который отражает вашу уникальность и индивидуальность.
                            </div>
                            <div className='about-page-main-block-body-text-two'>
                                Наша миссия - вдохновлять и покорять сердца наших клиентов, предлагая им стильные и качественные товары.
                                Наша команда состоит из энтузиастов, которые разделяют вашу страсть к моде и стилю. Мы постоянно ищем новые идеи и вдохновение, чтобы помочь вам создать неповторимый образ, отражающий ваш характер и самобытность.
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
