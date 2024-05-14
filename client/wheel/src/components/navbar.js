import React from "react";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from 'axios';
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE, PRODUCT_ROUTE, BASKET_ROUTE, ABOUT_ROUTE, GOODS_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import Footer from "./Footer";
import Registration from "../page/Registration";
import { Context } from '../index'
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  let navigate = useNavigate();

  const { user } = useContext(Context)
  const { basket } = useContext(Context)

  

  const handleLogout = () => {

    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token');
    navigate(LOGIN_ROUTE);
    window.location.reload()
  };
  return (
    <>
      <Navbar className="navBar" collapseOnSelect expand="lg" bg="black" data-bs-theme="dark" fixed="top">
        <Navbar.Brand style={{ paddingLeft: "20px",paddingTop:"20px", fontSize: "40px" }}>Abyss Shop</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link className="me-5" onClick={() => navigate(SHOP_ROUTE)}>Главная</Nav.Link>
              <Nav.Link className="me-5" onClick={() => navigate(BASKET_ROUTE)}>Корзина</Nav.Link>
              <Nav.Link className="me-5" onClick={() => navigate(ABOUT_ROUTE)}>О нас</Nav.Link>
            </Nav>

            {user.isAuth ?
              <Button className="logout-btn" variant='white' onClick={handleLogout}>Выйти</Button>
              :
              <button className="enter-btn" onClick={() => navigate(REGISTRATION_ROUTE)}></button>
            }
          </Navbar.Collapse>
        </Container>

      </Navbar>
     

    </>
  )

})

export default NavBar;
