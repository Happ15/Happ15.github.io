import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '..';
import ProductListBasket from '../components/ProductListBasket';
import { fetchBasketAll, fetchProduct, fetchTypes } from '../http/productAPI';

const Basket = () => {
    const history = useNavigate()
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const {id} = useParams()

    // useEffect(() => {
    //     fetchBasketAll(BasketId)
    // }, [])
    console.log(id)
    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <ProductListBasket />
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;