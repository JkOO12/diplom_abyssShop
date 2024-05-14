import React, { useContext } from 'react';
import { Col, Card,Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';
import "../App.css"
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
const { REACT_APP_API_URL } = process.env;



const ItemBasket = observer(({ items }) => {
    const { basket } = useContext(Context);
    return (
      <div className='basket-content'>
        <Col xs={12} md={12} className='basket-product'>
          <Card className='card-basket-product'>
            <div className='card-basket-group'>
              <div className='image-card-basket'>
                <Image s src={REACT_APP_API_URL + items.img} className='img-cards' />
              </div>
              <div className='group-block-one ml-3'>
                <div className='card-name-basket'>{items.name}</div>
                <div className='card-price-basket'>{items.price} руб</div>
              </div>
              <div className='btns-basket'>
              <button className='trash-btn' onClick={() => basket.removeItem(items.id)}></button>
              <button className='minus' onClick={() => basket.decrement(items)}>-</button>
                <button className='card-quantity-basket'> {items.quantity}</button>
                <button className='plus' onClick={() => basket.increment(items)}>+</button>
              </div>
            </div>
          </Card>
        </Col>
      </div>
    );
  });
  
  export default ItemBasket;