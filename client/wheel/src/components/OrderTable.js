import React, { useEffect, useState } from 'react';
import { Container, Table,Col } from 'react-bootstrap';
import { fetchOrders } from '../http/orderAPI';
import '../App.css';
const OrderTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getAllOrders = async () => {
            try {
                const response = await fetchOrders();
                setOrders(response);
            } catch (error) {
                console.error("Ошибка при получении заказов:", error);
            }
        };

        getAllOrders();
    }, []);

    return (
        <Container>
           <Col className='header-table-orders'>
           Все заказы
           </Col>
            <Table striped bordered hover>
                <thead>
                    <tr className='table-headers'>
                        <th>#</th>
                        <th>id</th>
                        <th>Итого</th>
                        <th>Номер корзины</th>
                        <th>Номер продуктов</th>
                        <th>Заказ</th>
                        <th>Телефон</th>
                        <th>Индекс</th>
                        <th>Город</th>
                        <th>Ссылки</th>
                    </tr>
                </thead>
                <tbody className='table-text'>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.id}</td>
                            <td>{order.coast}</td>
                            <td>{order.basketId}</td>
                            <td>{order.goods}</td>
                            <td>{order.checkout}</td>
                            <td>{order.phone}</td>
                            <td>{order.index}</td>
                            <td>{order.city}</td>
                            <td>{order.links}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );
};

export default OrderTable;
