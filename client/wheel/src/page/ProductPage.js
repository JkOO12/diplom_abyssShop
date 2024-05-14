import React, { cloneElement, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../App.css';
import Carouse from "../components/Carouse";
import ToggleSize from "../components/ToggleSize";
import SpecialBlockProduct from "../components/SpecialBlockProduct";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { addToBasket } from '../http/basketAPI'
import { Context } from "../index";
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import Custom_alert from "../components/Custom_alert";

const Product = () => {
    let navigate = useNavigate();
    const { basket } = useContext(Context)
    const { user } = useContext(Context)
    const [product, setProduct] = useState({ info: [], selectedSizes: null })
    const { id } = useParams();
    const [showAlert, setShowAlert] = useState(false);
    const [sizeSelected, setSizeSelected] = useState(false);

    const handleSizeSelect = (selectedSize) => {
        setProduct(prevProduct => ({ ...prevProduct, selectedSizes: selectedSize }));
        setSizeSelected(true);
        setShowAlert(false);
    };

    const addToCart = () => {
        if (!user.isAuth) {
            navigate(LOGIN_ROUTE)
        }
        else {
            if (!sizeSelected) {
                setShowAlert(true);
                return;
            }

            const existingItem = basket.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                const { id, name, price, selectedSizes } = product;
                const quantity = 1;
                const item = { productId: id, quantity, size: selectedSizes.name };
                addToBasket(item).then(data => {
                    const fullItem = { ...product, quantity };
                    basket.calculateTotalPrice();
                    basket.addItem(fullItem);
                    alert("Товар добавлен в корзину")

                });
            }
        }
    }

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    const selectedProduct = product.selectedProduct;
    const isSpecialProduct = selectedProduct && selectedProduct.name.includes('Special');
    return (
        <div className="product-page">
            <Container>
                {showAlert && (
                    <Custom_alert
                        heading="Ошибка!"
                        message="Пожалуйста, выберите размер"
                        variant="danger"
                        onClose={() => setShowAlert(false)}
                    />
                )}
                <Row>
                    <Col md={6} xs = {12} className="card-product">
                        <Card className="card-product-main">
                            <div>
                                <Carouse />
                            </div>
                        </Card>
                    </Col>
                    <Col md={2}></Col>
                    <Col className="product-buy">
                        <div style={{ lineHeight: '1' }}>
                            <div style={{ fontSize: '44pt' }}>{product.name}</div>
                            <div style={{ color: '#808080', fontSize: '30pt' }}>{product.price} Руб</div>
                            <div className="toggle-size-clothes">
                                <ToggleSize handleSizeSelect={handleSizeSelect} />
                            </div>
                            <Col md={3}>
                                <div className="btn-buy">
                                    <a className="fancy" onClick={addToCart}>
                                        <span className="top-key"></span>
                                        <span className="text">buy</span>
                                        <span className="bottom-key-1"></span>
                                        <span className="bottom-key-2"></span>
                                    </a>
                                </div>
                            </Col>
                            {/* фича */}
                            <div className="description-place">
                                <h2>
                                    {product.info && product.info.map((info, index) =>
                                        <Row key={info.id}>
                                            {info.title}: {info.description}
                                        </Row>
                                    )}
                                </h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="recomendent-prouducts">
                <Row style={{ marginLeft: '10px' }}>
                    {!isSpecialProduct && (
                        <>
                            мы так же рекомендуем
                            <SpecialBlockProduct />
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
};




export default Product;
