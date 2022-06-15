import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import Pages from '../components/Pages';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';
import { fetchProduct, fetchTypes } from '../http/productAPI';

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchProduct(null, 1, 1).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProduct(product.selectedType.id, product.page, 8).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ProductList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
