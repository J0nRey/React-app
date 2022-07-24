import React from "react";
import {
    useParams
} from 'react-router-dom'
import { CardBody, CardText, CardTitle, Card, Col, Row } from "reactstrap";

const ProductDetail = props => {
    const { id } = useParams()
    return(
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <CardTitle>Producto Seleccionado { id }</CardTitle>
                        <CardText>Descripción del Producto Seleccionado</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )

}

export default ProductDetail