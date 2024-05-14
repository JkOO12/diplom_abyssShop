import React, { useContext, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../index';
import {Row} from 'react-bootstrap';
import SpecialProductItem from './SpecialBlockItem';
import { observer } from 'mobx-react-lite';
import { fetchProduct, fetchSpecialProducts } from '../http/productAPI';

const SpecialBlockProduct = observer(() => {
    const {product} = useContext(Context)
    useEffect(() => {
        fetchSpecialProducts().then(data =>product.setSpecialProduct(data))
    },[])
    return (
      <Container>
      <Row>
      {Array.isArray(product.specialProduct) && product.specialProduct.map(specialProduct =>
        <SpecialProductItem key = {specialProduct.id} specialProduct = {specialProduct}/>
      )}
      </Row>
      </Container>
    );
});

export default SpecialBlockProduct;