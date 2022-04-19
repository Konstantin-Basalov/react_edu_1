import React from 'react';
import PostItem from "./PostItem";

const PostList = ({post}) => {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Список постов</h1>
                {post.map((post, index) =>
                    <PostItem number={index + 1} post={post} key={post.id}/>
                )}
            </div>
        );

};

export default PostList;