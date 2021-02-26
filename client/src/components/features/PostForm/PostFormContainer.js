import {connect} from 'react-redux';
import {getRequest, addPostRequest, editPostRequest, deletePostRequest} from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(addPostRequest(post)),
    editPost: (post, id) => dispatch(editPostRequest(post, id)),
    deletePost: (id) => dispatch(deletePostRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);