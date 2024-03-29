import React from 'react'
import "../Style/Subtotal.css"
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
    return (
        <div className="SubTotal">
            <div className="SubTotal_category">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal (0 items): <strong>$0</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type='checkbox' />This order contains a gift.
                            </small>
                        </>
                    )}

                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                />
            </div>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
