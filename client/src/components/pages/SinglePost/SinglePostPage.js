import React from 'react';
import Post from '../../features/Post/PostContainer';

class SinglePost extends React.Component {
    render(){
        const id = this.props.match.params.id;
        return (
            <div>
                <Post id={id} />
            </div> 
        )
    }
}

export default SinglePost;