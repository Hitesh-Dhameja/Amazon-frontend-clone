import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()
    const handleSubmit = (e) => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
        history.push('/')
    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button>Buy Now</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
