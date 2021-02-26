import React from 'react';
import PostForm from '../PostForm/PostFormContainer';
import Button from '../../common/Button/Button';
class EditPost extends React.Component {
    componentDidMount(){
        const {loadPost, id} = this.props;
        loadPost(id);
    }
    render(){
        const {post} = this.props;
        return (
            <div>
                <PostForm title={post.title} author={post.author} content={post.content} method="editPost" id={post.id} _id={post._id}/>  
            </div>
        )
    }
}

export default EditPost;