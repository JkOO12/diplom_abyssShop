import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
const { REACT_APP_API_URL } = process.env;
const ProductStartItem = ({productStart}) => {
    return (
        <Col md = {3} className='cards-group'>
            <Card className='cards'>
                <Image style={{width:"258px", height: "190px"}} src={REACT_APP_API_URL + productStart.img} className='img-cards'/>
                <div className='d-flex justify-content-between aligin-items-center'>
                    <div className='cards-name'>{productStart.name}</div>
                </div>
                <div>{productStart.price} rub</div> 
            </Card>
        </Col>
    );
};

export default ProductStartItem;