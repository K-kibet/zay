import { HistoryOutlined, LocalConvenienceStoreOutlined, LocalShippingOutlined, PercentOutlined } from '@mui/icons-material';
import React from 'react';

const Featured = () => {
    return (
        <section class="d-flex align-center flex-column py-2">
        <div class="row text-center pt-3 pb-1">
            <div class=" m-auto">
                <h1 class="h1">Our Services</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>
        <div class="row w-100">
            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center">
                        <LocalShippingOutlined style={{fontSize: '50px'}}/>
                    </div>
                    <h2 class="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center">
                        <HistoryOutlined style={{fontSize: '50px'}}/>
                    </div>
                    <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center">
                        <PercentOutlined style={{fontSize: '50px'}}/>
                    </div>
                    <h2 class="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-success text-center">
                        <LocalConvenienceStoreOutlined style={{fontSize: '50px'}}/>
                    </div>
                    <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Featured;
