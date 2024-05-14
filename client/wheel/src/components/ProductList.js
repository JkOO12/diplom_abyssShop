import { observable } from 'mobx';
import React,{ useContext, useEffect } from 'react';
import ProductItem from './productItem';
import { Row } from 'react-bootstrap';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import { fetchProduct } from '../http/productAPI';


const ProductList = observer(() => {
    const { product } = useContext(Context);

    useEffect(() => {
        if (product.selectedType && product.selectedType.id) {
            fetchProduct(product.selectedType.id).then(data => product.setProduct(data));
            
        } else {
            fetchProduct().then(data => product.setProduct(data));
        }
    }, [product.selectedType]);

    return (
        <Row>
            {Array.isArray(product.product) && product.product.map(product =>
                <ProductItem key={product.id} product={product} />
            )}
        </Row>
    );
});

export default ProductList;