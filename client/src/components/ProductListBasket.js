import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import ProductItemBasket from './ProductItemBasket';

const ProductListBasket = observer(() => {
    const {product} = useContext(Context)
    
    console.log(product)
    return (
        <Row className="d-flex">
            {product.products.map(product =>
                <ProductItemBasket key={product.id} product={product} />     
            )}
        </Row>
    );
});

export default ProductListBasket;