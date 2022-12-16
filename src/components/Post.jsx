import { TimelapseOutlined } from '@mui/icons-material';
import React from 'react';
import Image from '../assets/product1.png';

const Post = () => {
    return (
        <div className='post'>
            <div className="image-container">
                <img src={Image} alt="" />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
            <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quia, porro fuga molestiae suscipit maxime, amet placeat 
                    cupiditate sed voluptas quisquam architecto hic officiis 
                    eos exercitationem, explicabo accusantium? Iste, ut possimus!
            </div>
            <div className="info">
                <span>By: <span>Kibet</span> </span>
                <span><TimelapseOutlined /> 12th May 2022</span>
            </div>
        </div>
    );
}

export default Post;