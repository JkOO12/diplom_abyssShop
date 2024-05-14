import React, { useContext } from 'react';
import { Container, Row} from 'react-bootstrap';
import {Context} from '../index';
import ProductStartItem from './ProductStartItem';

const ProductStartList = () => {
    const {product} = useContext(Context);
    return (
       <Container>
        <Row>
            {product.productStart.map(productStart =>
                <ProductStartItem key={productStart.id} productStart = {productStart}/>
                )}
        </Row>
       </Container>
    );
};

export default ProductStartList;