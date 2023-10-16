import React from 'react'
import "../Style/CheckoutProduct.css"

const CheckoutProduct = () => {
    return (
        <div>
            <div className="checkoutProduct">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg  " alt="" className='checkoutProduct_image' />
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                    <p className="checkoutProduct_price">$100</p>
                    <div className="checkoutProduct_rating">5</div>
                    <button>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
