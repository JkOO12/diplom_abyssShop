import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';

const Custom_alert = ({heading,message,variant,onClose }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        if (onClose) {
            onClose();
            
            
           
        }
        window.location.reload()
    };

    return (
        <>
        {show && (
                <Alert show={show} variant={variant} className='alert'>
                    <Alert.Heading className='alert-heading'>{heading}</Alert.Heading>
                    <p>{message}</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleClose} variant={variant === 'success' ? 'outline-success' : 'outline-danger'} className='btn-alert'>
                            OK
                        </Button>
                    </div>
                </Alert>
            )}
      </>
    );
};

export default Custom_alert;