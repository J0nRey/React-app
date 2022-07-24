import React, { useState, useEffect } from "react";
import {
    Col,
    Row,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Button
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
        <div className="spinner">
            <div className="dot"></div>
        </div>
        <h1>Catalogo de productos</h1>

        {/*

            "producto1":
                {
                    "description": "some description", 
                    "name": "My awesome product"
                },
            "producto2":
                {
                    "description": "Other description", 
                    "name": "Producto numero 2"
                }

        */}

        {
            Object.keys(productCatalog).map( product => {
                console.log( productCatalog[product])
                const { name, description } = productCatalog[product]
                return (
                    <Card ket={product}>
                        <CardBody>
                            <CardTitle>{name}</CardTitle>
                            <CardText>{description}</CardText>
                            <Button color="dark" type="button" data-product-key={product}>Ver detalles</Button>
                        </CardBody>
                    </Card>
                )
                /*{
                    "producto1",
                    "producto2"
                }*/
            })
        }
    </Row>
    )
}

export default ProductCatalog