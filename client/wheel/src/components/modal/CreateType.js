import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import '../../App.css';
import { Context } from '../../index'
import { createType } from '../../http/productAPI';

const CreateType = () => {
    const { product } = useContext(Context)
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addType = () =>{
        createType({name:value}).then(data => 
            setValue(''),
            handleClose()
        )
    }

    return (
        <div>
           <Button variant="black" style={{width:'253px', height:'90px', fontSize:'30px', marginTop:'64px'}} onClick={handleShow}>Добавить тип</Button>
            <Modal className='modal-add-type' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '45px' }}>Добавить тип одежды</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control value={value} onChange={e => setValue(e.target.value)} style={{ fontSize: '25px', marginTop: '15px' }} placeholder='Название'></Form.Control>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='black' style={{ fontSize: '25px' }} onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant='black' style={{ fontSize: '25px' }} onClick={addType}>
                        Доьбавить тип
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateType;