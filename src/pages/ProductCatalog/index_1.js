import React, { useState, useEffect } from "react";
import {
    Col,
    Row,
    Card,
    CardBody,
    CardText
} from 'reactstrap'

import {
    Link
} from 'react-router-dom'

const ProductCatalog = props => {

    //Creamos un estado
    const [ productCatalog, setProductCatalog ] = useState({})

    useEffect( ()=>{
        fetch("https://react-7d0ce-default-rtdb.firebaseio.com/blog-12g-default-rtdb/products/.json").then( response => {
            response.json().then( json => {
                console.log( json  )
                setProductCatalog( json )
            })
        })
    },[]) 

    const { data } = props
    return (
    <Row>
        <h1>Catalogo de productos</h1>
        {
            data.map(product => {
                const { name, id } = product
                return (
                    <Link to={`product-detail/${id}`}>
                        <Col xs="12" md="4">
                            <Card key={id} >
                                <CardBody>
                                    <CardText>{ name }</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Link>
                )
            })
        }
    </Row>
    )
}

export default ProductCatalog