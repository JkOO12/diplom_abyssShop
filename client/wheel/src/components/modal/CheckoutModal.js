import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Context } from '../../index';
import { checkout } from '../../http/basketAPI';

const CheckoutModal = () => {
    const { basket } = useContext(Context);
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [phone, setPhone] = useState('');
    const [index, setIndex] = useState('');
    const [city, setCity] = useState('');
    const [links, setLinks] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false || basket.items.length === 0) {
            setValidated(true);
            return;
        }

        try {
            const productIds = basket.items.map(item => item.id);
            await checkout(productIds, basket.TotalPrice, phone, index, city, links);
            basket.clearBasket();
            handleClose();
        } catch (error) {
            console.error('Ошибка при оформлении заказа:', error);
        }
    };

    return (
        <>
            <Button
                style={{ fontSize: '30px', color: 'white', backgroundColor: 'black', borderColor: 'black', width: '141px', marginLeft: '35px' }}
                className='btn-chekout'
                onClick={handleShow}
            >
                Оформить
            </Button>
            <Modal className='modal-chekout' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '45px' }}>Оформление заказа</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Control style={{ fontSize: '25px' }} placeholder='Телефон' className='mt-2' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <Form.Control style={{ fontSize: '25px' }} placeholder='Индекс' className='mt-2' value={index} onChange={(e) => setIndex(e.target.value)} required />
                        <Form.Control style={{ fontSize: '25px' }} placeholder='Город' className='mt-2' value={city} onChange={(e) => setCity(e.target.value)} required />
                        <Form.Control style={{ fontSize: '25px' }} placeholder='Ссылки на ваши соцсети' className='mt-2' value={links} onChange={(e) => setLinks(e.target.value)} required />
                        {basket.TotalPrice} руб
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='black' style={{ fontSize: '25px' }} onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant='black' style={{ fontSize: '25px' }} type='submit'>
                            Оформить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default CheckoutModal;
