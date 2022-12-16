import { Send } from '@mui/icons-material';
import React from 'react';

const Newsletter = () => {
    return (
        <div className='newsletter theme'>
            <h3>
                Subscribe
            </h3>
            <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            <form>
                <input type='email' placeholder='Email Address'/>
                <button>
                    <Send />
                </button>
            </form>
        </div>
    );
}

export default Newsletter;