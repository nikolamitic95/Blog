import React from 'react';

import { Post } from './Post'; 
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
    return (
        posts.map(post =>
            <Link to={`/posts/singlepost/${post.id}`}>
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            </Link>
        )
    )
}

export { Posts }