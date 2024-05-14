import { Button } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toggle from "../components/Toggle";
import ProductList from "../components/ProductList";
import SpecialBlockProduct from "../components/SpecialBlockProduct";
import { observer } from "mobx-react-lite";
import { fetchProduct, fetchSpecialProducts, fetchTypes } from "../http/productAPI";
import { Context } from "../index";
import Pages from "../components/Pages";


const Shop = observer(() => {


    const { product } = useContext(Context)
    const [startPrice, setStartPrice] = useState("");
    const [endPrice, setEndPrice] = useState("");

    const handleResetFilters = () => {
        window.location.reload();
    };

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchProduct(product.selectedType.id, product.page, 3).then(data => {
            product.setProduct(data.rows)
            product.setTotalCount(data.count)

        })
        fetchSpecialProducts().then(data => {
            product.setSpecialProduct(data)

        })
    }, [])

    useEffect(() => {
        if (product.selectedType) {
            fetchProduct(product.selectedType.id, product.page, 10).then((data) => {
                product.setProduct(data.rows);
                product.setTotalCount(data.count);
            });
        }
    }, [product.page, product.selectedType]);

    return (
        <>
            <div className="App">
                <div className='background-img'>
                    <Container>
                        <Row className='Shop-name-text'>
                            <Col lg = {12} md = {12} xs = {12}>Abyss Shop</Col>

                        </Row>

                    </Container>

                </div>

                <Container className="toggle">
                    <Row>
                        <Col xs={12} md={2}>
                            <Toggle />
                        </Col>
                        <Col xs={12} md={3} className="form-price-start-end">

                            <Button type="submit"
                                variant="gray"
                                onClick={handleResetFilters}
                                className="reset-filtres-btn">
                                Сбросить фильтры
                            </Button>

                        </Col>

                    </Row>

                </Container>

                <div className='special-block'>
                    <SpecialBlockProduct />

                </div>

                <Container>
                    <ProductList />
                    <Pages />
                </Container>
            </div>



        </>
    );
});

export default Shop;
