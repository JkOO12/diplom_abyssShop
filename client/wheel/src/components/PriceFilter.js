import React, { useContext } from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import { Context } from "../index";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import "../App.css"
import ProductItem from "./productItem";


const PriceFilter = ({startPrice, endPrice, setStartPrice, setEndPrice}) => {
    const {product} = useContext(Context)
    const handleFilter = () => {
        
       
    };


    
    return(
        <>  
          <Container >
            <Accordion >
            <Accordion.Item  eventKey="0">
                <Accordion.Header >Price</Accordion.Header>
                 <Accordion.Body >
                    <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Start "
                            value={startPrice}
                            onChange={(e) => setStartPrice(e.target.value)}
                        />
                    </Col>
                        <Col>
                        <Form.Control
                            type="text"
                            placeholder="End "
                            value={endPrice}
                            onChange={(e) => setEndPrice(e.target.value)}
                        />
                    </Col>
                    </Row>
                    <Row className="btn-ok-accordion">
                        <Col md = {4}>
                        <Button style={{ fontSize: "30px" }} variant="black" onClick={handleFilter}>OK</Button>
                        </Col>
                    </Row>
                 </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Container>
            
            
        </>
    )
}

export default PriceFilter;