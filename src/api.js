import React, {useEffect} from 'react';

const Api = () => {

        useEffect(() => {
            getPosts()}, []
        )

    const getPosts = () =>
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(result => result.json())



};

export default Api;