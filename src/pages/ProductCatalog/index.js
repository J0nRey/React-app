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

import api from '../../Assets/lib/api'

import './styles.scss'

import {
    Link
} from 'react-router-dom'

const ProductCatalog = props => {

    //Creamos un estado
    const [ productCatalog, setProductCatalog ] = useState(null)

    const [ collapsed, setCollapsed ] = useState(true)

    useEffect( async ()=>{

            const data = await api.getAllProducts()
            const singleProduct = await api.getProductById('producto1')
            // const newKey = await api.createProduct({ name:'Producto nuevo', 
            // description:'Producto creado desde la app' })

            // api.deleteProductById("-N3qZYVg10tskfvCzA2I")

            // api.patchProductById({description: "Producto parchado desde la app"},"-N3r5qG5OcuGg4DaWzT2")

            setProductCatalog(data)

            console.log(data)
            console.log(singleProduct)

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