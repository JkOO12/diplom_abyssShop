import { React, useEffect, useContext } from "react";
import '../App.css';
import { Row, Col } from "react-bootstrap";
import CreateProduct from "../components/modal/CreateProduct";
import CreateType from "../components/modal/CreateType";
import OrderTable from "../components/OrderTable";
import { fetchTypes } from "../http/productAPI";
import { Context } from "../index";
import { fetchOrders } from "../http/orderAPI";

const Admin = () => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchOrders()
    }, [])

    return (
        <div className="admin-panel" style={{ marginTop: '150px' }}>
            <div className="admin-panel-header">
                Админ панель
            </div>
            <div className="body-admin-panel">
                <Row className="btns-admin-panel">
                    <Col md={12}>
                        <CreateProduct />
                    </Col>
                    <Col md={12}>
                        <CreateType />
                    </Col>
                </Row>

                <OrderTable />


            </div>
        </div>
    );
};

export default Admin;