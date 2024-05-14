import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import testCl from '../source/test-clothe.jpg'
import '../App.css';
import {Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";

const Carouse = () => {
    const { REACT_APP_API_URL } = process.env;
    const [product, setProduct] = useState({info:[]})
    const params = useParams()
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    },[])
    return (
       <Carousel className="card-product-page"> 
       
            <Carousel.Item className = "img-carouse-product-page">
                
                <img style={{width:"680px", paddingRight:"5px", height:"630px", margin:"auto",paddingTop:"5px",paddingLeft:"5px", paddingBottom:"5px"}} className='product-card-img'
                    src={REACT_APP_API_URL + product.img}
                />
                <Carousel.Caption>
                 </Carousel.Caption>
            </Carousel.Item>
           
            
       </Carousel>
    );
};

export default Carouse;