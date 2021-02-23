import {connect} from 'react-redux';
import {getRequest, getPost, loadPostRequest, loadPost} from '../../../redux/postsRedux';
import Post from './Post';

const mapStateToProps = state => ({ 
   request: getRequest(state),
   post: getPost(state)
})

const mapDispatchToProps = dispatch => ({
    loadPost: (id) => dispatch(loadPostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);