import React from 'react';
import { Col, Card,Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';
const { REACT_APP_API_URL } = process.env;

const ProductItem = ({product}) => {
    let navigate = useNavigate();
 
    return (

        <Col xs={12} md = {2} lg ={3} className='cards-group mt-5' onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}> 
            <Card className='cards'>
                <Image style={{width:"248px", height: "190px", paddingTop:"20px", paddingLeft:"5px"}} src={ REACT_APP_API_URL + product.img} className='img-cards'/>
                <div style={{paddingLeft:"10px"}} className='d-flex justify-content-between aligin-items-center'>
                    <div>{product.name} </div>
                </div>
                <div style={{paddingLeft:"10px"}}>{product.price} rub</div>
            </Card>
        </Col>
      
        
    );
};

export default ProductItem;