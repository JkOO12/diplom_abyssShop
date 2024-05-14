import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';

const { REACT_APP_API_URL } = process.env;

const SpecialProductItem = ({ specialProduct }) => {
    let navigate = useNavigate();

    return (
        <Col xs={6} md={4} className="special-block-cards mb-5">
            <Card className='cards-special-block' onClick={() => navigate(PRODUCT_ROUTE + '/' + specialProduct.id)}>
                <Image className='img-cards-special-block' src={REACT_APP_API_URL + specialProduct.img} />
                <div style={{ paddingLeft: "10px" }} className='d-flex justify-content-between aligin-items-center'>
                    <div className='cards-name'>{specialProduct.name}</div>
                </div>
                <div style={{ paddingLeft: "10px" }}>{specialProduct.price} rub</div>
            </Card>
        </Col>
    );
};

export default SpecialProductItem;
