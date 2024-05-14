import React,{ useContext, useEffect } from 'react';
import "../App.css"
import { Container,Row,Col,Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import ItemBasket from './ItemBasket';
const ListBasket = observer(() => {
    const {basket} = useContext(Context)
    return (
        <Row >
             {basket.items.map(items =>
                <ItemBasket key={items.id} items = {items}/>
                )}
        </Row>
    );
});

export default ListBasket;