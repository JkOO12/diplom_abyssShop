import { observer } from 'mobx-react-lite';
import { Dropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../index';

const ToggleSize = observer(({ handleSizeSelect }) => { 
    const { product } = useContext(Context);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="black" style={{ fontSize: '35px' }}>
               Размер 
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ fontSize: '25px', top: '100%', marginTop: '0' }} className="drop-down-menu">
                {product.sizes.map(size =>
                    <Dropdown.Item
                        style={{ cursor: 'pointer' }}
                        active={product.selectedSizes && size.id === product.selectedSizes.id}
                        onClick={() => handleSizeSelect(size)} 
                        key={size.id}
                    >
                        {size.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default ToggleSize;
