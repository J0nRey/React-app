import React from "react"
import {
    CardLink,
    ListGroup,
    ListGroupItem
} from 'reactstrap'

const productCart = props => {
    const { cartList } = props
    return(
        <ListGroup>
        {
            cartList.map(( product, index ) => {
                 const { name, price } = product
                return <ListGroupItem className="d-flex justify-content-between" color="dark"> {name}<span class="text-primary">${price}.00</span>
                </ListGroupItem>
            }) 
        }
        <ListGroupItem className="d-flex justify-content-end" color="dark"> total: <span class="text-success"> ${
            cartList.reduce( ( accum, current ) => accum +current.price, 0 )
        }.00</span>
                </ListGroupItem>

    </ListGroup>
    )
}

export default productCart