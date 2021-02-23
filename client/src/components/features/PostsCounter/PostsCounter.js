import React from 'react';

class PostsCounter extends React.Component {
    state = {
        counter: this.props.counter
    }
    render(){
        const counter = this.state.counter;
        return (
            <div>
               <h3>Posts number: {counter}</h3>
            </div>
        )
    }
}

export default PostsCounter;