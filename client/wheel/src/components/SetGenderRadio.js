import React from 'react';
import { useState } from 'react';
import { Form } from "react-bootstrap";
import '../App.css';

const SetGenderRadio = ({ selectedGender, onGenderChange }) => {

    return (
        <Form style={{color:"black", paddingTop:"15px"}}>
            <Form.Check 
                style={{color:'white'}}
                className='set-gender'
                type="radio"
                label="М"
                name="gender"
                id="male"
                value="male"
                checked={selectedGender === 'male'}
                onChange={() => onGenderChange('male')}
            />
            <Form.Check
                style={{color:'white'}}
                className='set-gender'
                type="radio"
                label="Ж"
                name="gender"
                id="female"
                value="female"
                checked={selectedGender === 'female'}
                onChange={() => onGenderChange('female')}
            />
        </Form>
    );
};

export default SetGenderRadio;
