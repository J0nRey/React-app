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

import './styles.scss'

import {
    Link
} from 'react-router-dom'

const ProductCatalog = props => {

    //Creamos un estado
    const [ productCatalog, setProductCatalog ] = useState(null)

    const [ collapsed, setCollapsed ] = useState(true)

    useEffect( ()=>{
        setTimeout( function(){

            fetch("https://react-7d0ce-default-rtdb.firebaseio.com/blog-12g-default-rtdb/products/.json").then( response => {
                response.json().then( json => {
                    console.log( json  )
                    setProductCatalog( json )
                })
            })
        
        },3000)

    },[]) 

    const { data } = props
    return (
    <Row>
        {
            !productCatalog && 
            <div className="spinner">
                <div className="dot"></div>
            </div> 
        }
        {
            productCatalog && 
            <>
                    <h1>Catalogo de productos</h1>

            {
                Object.keys(productCatalog).map( product => {
                    console.log( productCatalog[product])
                        const { name, description } = productCatalog[product]
                            return (
                                    <Col xs="12" md="4" className="mb-3" key={product}>
                                        <Card ket={product}>
                                            <CardBody>
                                                <CardTitle>{name}</CardTitle>
                                                <CardText collapsed={collapsed} className={ !collapsed ? "open" : ''}>{
                                                collapsed ?
                                                   (
                                                    <>
                                                        ${description.slice(0,20)}...
                                                        <span 
                                                            className="text-primary"
                                                            onClick={ () => setCollapsed( !collapsed )}
                                                        >Ver mas</span> 
                                                    </>
                                                    ) :
                                                            (
                                                                <>
                                                                    {description}
                                                                    <span 
                                                                            className="text-primary"
                                                                            onClick={ () => setCollapsed( !collapsed )}
                                                                    >Ver menos</span> 
                                                                </>
                                                                )
                                                }
                                                </CardText>
                                                <Button color="dark" type="button" data-product-key={product}>Ver detalles</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    )

                    })
            }
        </>
        }
    </Row>
    )
}

export default ProductCatalog