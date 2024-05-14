import { observer } from 'mobx-react-lite';
import { Dropdown } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Context } from "../index";

const Toggle = observer(() => {
    const { product } = useContext(Context);

    const handleTypeSelect = (selectedType) => {
        product.setSelectedType(selectedType);
        console.log(product.selectedType.id)
    };

    return (
        <>       
            <Dropdown >
                <Dropdown.Toggle variant="black" style={{ fontSize: "35px" }}>
                    Вся одежда
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: "25px", top: "100%", marginTop: "0" }} className="drop-down-menu">
                    {product.types && product.types.map(type =>
                        <Dropdown.Item
                            active={product.selectedType && type.id === product.selectedType.id}
                            onClick={() => handleTypeSelect(type)}
                            key={type.id}
                        >
                            {type.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>  
        </>
    );
});

export default Toggle;
