import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/row/sadlp/AVD-8688_SADLP_Intl_TheTick_SeriesLaunch_ROW_Image_Right_FT.jpg' />
                <div className='home_row'>
                    <Product
                        id="12321341"
                        title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living Paperback – 8 October 2018"
                        price={999}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Lifelong Power - Pro 500 Watt 3 Jar Mixer Grinder with 3 Speed Control and 1100 Watt Dry Non-Stick soleplate Iron Super Combo (White and Grey, 1 Year Warranty)"
                        price={1699}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41q7gsgB+gL._SY300_SX300_.jpg"
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id="4903850"
                        title="Redmi 10 Prime (Phantom Black 4GB RAM 64GB | Helio G88 with extendable RAM Upto 2GB | FHD+ 90Hz Adaptive Sync Display)"
                        price={12499}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41NNWAx-XQL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title='Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Blue)'
                        price={7499}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61NIsUGl+FL._SX425_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Amazon Brand - Solimo Revolving Plastic Spice Rack set (16 pieces,Silver)"
                        price={569}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51hFntmRocL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id="90829332"
                        title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
                        price={17490}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71fEd9glTIL._SX425_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
