import React, {useState} from 'react';
import MyBtn from "./UI/button/MyBtn";
import MyInput from "./UI/input/MyInput";

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        console.log(newPost)

    };


    return (
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder={"Заголовок"}
                    type={"text"}/>
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder={"Текст поста"}/>
                <MyBtn onClick={addNewPost}>Добавить пост</MyBtn>
            </form>
        </div>
    );
};

export default AddPost;