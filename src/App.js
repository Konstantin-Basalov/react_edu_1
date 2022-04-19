import React, {useEffect, useState} from "react";
import './styles/app.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyBtn from "./components/UI/button/MyBtn";


function App() {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/3')
            .then(response => response.json())
            .then(json => setPosts([json]))
    }
    useEffect(() => {
        getPosts()}, []);

    const [post, setPost] = useState({title: '', body: ''});


    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})

    }




  return (
    <div className="App">
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder={"Заголовок"}
                type={"text"}/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder={"Текст поста"}/>
            <MyBtn onClick={addNewPost}>Добавить пост</MyBtn>
        </form>
        <PostList post={posts}/>
    </div>
  );
}

export default App;
