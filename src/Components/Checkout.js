import React from 'react'
import "../Style/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className='checkout_ad' />
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                <CheckoutProduct />
                <CheckoutProduct />
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
