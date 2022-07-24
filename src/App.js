import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container,
    Row,
    Col, 
    NavItem
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Routes, // ya no se llama Switch
    Route,
    Link
  } from "react-router-dom";

//Pages
import CreateProducts from './pages/CreateProducts';
import ProductCatalog from './pages/ProductCatalog';
import ShoppingCart from './pages/ShoppingCart';

//Components
import CustomLink from './Components/CustomLink';
import ProductDetail from './pages/ProductDetail';



const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ selectedPage, setSelectedPage] = useState("createProducts")


    const productData = [{
        name: 'producto 1',
        description: 'Esta es la descripcion del producto 1 con name and id',
        id: 1
    },{
        name: 'producto 2',
        description: 'Esta es la descripcion del producto 2 con name and id',
        id: 2
    },{
        name: 'producto 3',
        description: 'Esta es la descripcion del producto 3 con name and id',
        id: 3
    }]

    const toggle = () => setIsOpen(!isOpen);

    const links = [
        {
            path:"/create-products",
            text:"Crear Productos"
        },{
            path:"/product-catalog",
            text:"Catalogo de productos"
        },{
            path:"/shopping-cart",
            text:"Carrito de compras"
        }
    ]

        return(
            <Router>
            <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {
                        links.map( ( link, index ) => {
                            const { path, text } = link
                            return(
                                <NavItem key={index}><Link to={path} className='nav-item'>{ text }</Link></NavItem>
                            )
                        })
                    }
                </Nav>
            </Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col xs="12">
                        <Routes>
                            <Route path="/create-products" element={<CreateProducts/>} />
                                <Route path="/product-catalog" element={<ProductCatalog data = {productData}/>} />
                                <Route path="/shopping-cart" element={<ShoppingCart/>} />
                                <Route path="/product-catalog/product-detail/:id" element={<ProductDetail/>} />
                            </Routes>
                    </Col>
                </Row>
            </Container>
            </Router>
            )
    }

export default App
