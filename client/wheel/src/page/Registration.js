import React, { useState } from "react";
import { Container, Col, Row, Form, Button, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";
import SetGenderRadio from "../components/SetGenderRadio";
import '../App.css';

const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronomic, setPatronomic] = useState('');
    const [email, setEmail] = useState('');
    const [selectedGender, setSelectedGender] = useState('');



    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            try {
                const response = await registration(login, password, name, surname, patronomic, email, selectedGender);
            } catch (error) {
                console.error('Ошибка при регистрации:', error);
            }
        }

        setValidated(true);
    };

    const handleGenderChange = (selectedGender) => {
        setSelectedGender(selectedGender);
    };

    const navigate = useNavigate();

    return (
        <div className="back-ground-auth-page">
            <div className="auth-page">
                <Container>
                    <Row>
                        <Col md={5}></Col>
                        <Col md={2}>
                            <div className="auth-page-header">
                                Регистрация
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4} className="auth-page-controls">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={name} onChange={e => setName(e.target.value)} required placeholder="Имя" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите ваше имя</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={surname} onChange={e => setSurname(e.target.value)} required placeholder="Фамилия" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите вашу фамилию</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={patronomic} onChange={e => setPatronomic(e.target.value)} required placeholder="Отчество" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите ваше отчество</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={login} onChange={e => setLogin(e.target.value)} required placeholder="Логин" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите ваш логин</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder="Пароль" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите пароль</Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control className="custom-form-control mt-2" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" style={{ fontSize: "30pt" }} />
                                    <Form.Control.Feedback type="invalid" className="feedback-form">Введите вашу почту</Form.Control.Feedback>
                                </FormGroup>
                                <SetGenderRadio selectedGender={selectedGender} onGenderChange={handleGenderChange} />
                                <Button type="submit" className="btn-register mt-4" style={{ fontSize: "40px" }} variant="black">Регистрация</Button>
                                <Button variant="link" className="mt-4" style={{ fontSize: "25px" }} onClick={() => navigate(LOGIN_ROUTE)}>У вас уже есть аккаунт</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>

    );
};

export default Registration;