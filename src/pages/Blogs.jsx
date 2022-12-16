import React, { useState, useEffect } from 'react'
import Post from '../components/Post';
import {publicRequest} from '../requestMethods';

function Blogs() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await publicRequest.get('/posts')
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [])
  return (
    <div class="blogs">
        <div className="wrapper">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}
export default Blogs;
