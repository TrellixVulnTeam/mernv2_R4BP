import React from 'react';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextFiled from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import './PostForm.scss';

class PostForm extends React.Component {
    state = {
        post: {
            title: '',
            author: '',
            content: ''
        }
    }

    handleChange = (e) => {
        const {post} = this.state;
        this.setState({post: {...post, [e.target.name]: e.target.value}});
    }
    handleEditor = (text) => {
        const {post} = this.state;
        this.setState({post: {...post, content: text}});
    }
    addPost = (e) => {
        const {addPost} = this.props;
        const {post} = this.state;

        e.preventDefault();
        addPost(post);
    }
    render(){
        const {post} = this.state;
        const {request} = this.props;
        const { handleChange, handleEditor, addPost } = this;

        if(request.error) return <Alert variant="error">{request.error}</Alert>
        else if(request.send) return <Alert variant="success">Post has been added!</Alert>
        else if(request.pending) return <Spinner />
        else return (
            <form onSubmit={addPost}>
                <TextFiled
                    label="Title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                />
                <TextFiled
                    label="Author"
                    name="author"
                    value={post.author}
                    onChange={handleChange}
                />
                <SectionTitle>Edit post content</SectionTitle>
                <Editor
                    className="content-editor"
                    text={post.content}
                    option={{placeholder:false, toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']}}}
                    onChange={handleEditor}
                />
                <Button variant="primary">Add post</Button>
            </form >
        )
    }
}

export default PostForm;