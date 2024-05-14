import React, {useEffect } from 'react';
import { Container, Col, Row, Form, Button, FormGroup } from "react-bootstrap";
import { useState } from "react";
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { auth } from '../http/userAPI'
import { Context } from '../index'
import Custom_alert from '../components/Custom_alert';

const Auth = () => {

    const [validated, setValidated] = useState(false);
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [showAlert, setShowAlert] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false);

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            try {
                if (isLogin) {
                    await auth(login, password)
                }
                user.setUser(user);
                user.setIsAuth(true);
                setSuccessLogin(true);
               
            } catch (e) {
                setShowAlert(true);
                setSuccessLogin(false);
            }
        }

        setValidated(true);

    };

    let navigate = useNavigate();

    useEffect(() => {
        if (successLogin) {
            navigate(SHOP_ROUTE);
            window.location.reload()
        }
    }, [successLogin]);

    return (
        <div className="login-page">
            <Container>
                <Row>
                    <Col>
                        {showAlert && (
                            <Custom_alert
                                heading="Неправильный логин или пароль!"
                                message="Вы ввели не правильный логин или пароль, попробуйте снова"
                                variant="danger"
                            />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>

                    </Col>
                    <Col md={2}>
                        <div className="login-page-header">
                            Вход
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <FormGroup>
                                <Form.Control value={login} onChange={e => setLogin(e.target.value)} required placeholder="Логин" style={{ fontSize: "30pt" }} className="login-page-controls"></Form.Control>
                                <Form.Control.Feedback type="invalid" className="feedback-form">Введите логин</Form.Control.Feedback>
                            </FormGroup>
                            <FormGroup>
                                <Form.Control value={password} onChange={e => setPassword(e.target.value)} required placeholder="Пароль" style={{ fontSize: "30pt" }} className="login-page-controls"></Form.Control>
                                <Form.Control.Feedback type="invalid" className="feedback-form">Введите пароль</Form.Control.Feedback>
                            </FormGroup>

                            <Button
                                type="submit"
                                className="btn-enter-login mt-4"
                                style={{ fontSize: "40px" }}
                                variant="gray"
                                onClose={handleCloseAlert}>
                                Вход
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Auth;
