import {connect} from 'react-redux';
import {getPost, loadPostRequest, deletePostRequest} from '../../../redux/postsRedux';
import EditPost from './EditPost';

const mapStateToProps = state  => ({
    post: getPost(state)
})

const mapDispatchToProps = dispatch => ({
    loadPost: (id) => dispatch(loadPostRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);