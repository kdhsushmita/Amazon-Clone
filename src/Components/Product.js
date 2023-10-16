import React from 'react'
import "../Style/Product.css"

const Product = ({ id, title, price, rating, image }) => {
    return (
        <div>
            <div className="product">
                <div className="product_info">
                    <p className="title">{title}</p>
                    <p className="product_price">{price}</p>
                    <div className="product_rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                </div>
                <img src={image} alt="Not found" />
                <button>Add To Cart</button>
            </div>
        </div>

    )
}

export default Product
