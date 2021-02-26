import React from 'react';
import EditPost from '../../features/EditPost/EditPostContainer';

class EditPostPage extends React.Component {
    
    render(){
        const id = this.props.match.params.id;
        return (
            <div>
                <EditPost id={id}/>
            </div>
        )
    }
}

export default EditPostPage;