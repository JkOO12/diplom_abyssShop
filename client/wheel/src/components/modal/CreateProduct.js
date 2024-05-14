import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import '../../App.css';
import { Context } from '../../index'
import Toggle from '../Toggle';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createProduct } from '../../http/productAPI';


const CreateProduct = observer(() => {
    const { product } = useContext(Context)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [type, setType] = useState()
    const [info, setInfo] = useState([])
    const [collection, setCollection] = useState()

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', product.selectedType.id)
        formData.append('collection',collection)
        createProduct(formData).then(data => handleClose())
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    return (
        <div>
            <Button variant="black" style={{width:'253px', height:'90px', fontSize:'30px', marginTop:'64px'}} onClick={handleShow}>Добавить товар</Button>
            <Modal className='modal-add-product' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '45px' }}>Добавть продукт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control style={{ fontSize: '25px', marginTop: '15px' }} value={name} onChange={e => setName(e.target.value)} placeholder='Название'></Form.Control>
                        <Form.Control style={{ fontSize: '25px', marginTop: '15px' }} value={price} onChange={e => setPrice(Number(e.target.value))} placeholder='Цена'></Form.Control>
                        <Form.Label style={{ fontSize: '25px' }}>Фото продукта</Form.Label>
                        <Form.Control type='file' onChange={selectFile} style={{ fontSize: '25px' }} placeholder='img'></Form.Control>
                        <Form.Control style={{ fontSize: '25px', marginTop: '15px', marginBottom: '15px' }} value={collection} onChange={e => setCollection(e.target.value)} placeholder='Коллекция'></Form.Control>
                        <Toggle />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='black' style={{ fontSize: '25px' }} onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant='black' style={{ fontSize: '25px' }} onClick={addDevice}>
                        Добавить продукт
                    </Button>
                    <Button variant='black' style={{ fontSize: '25px' }} onClick={addInfo}>
                        Информация
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control 
                                    style={{fontSize:'15px'}}
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="enter header"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    style={{fontSize:'15px'}}
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="enter description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Modal.Footer>
            </Modal>
        </div>


    );
});

export default CreateProduct;