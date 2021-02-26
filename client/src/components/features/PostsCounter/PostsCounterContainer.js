import {connect} from 'react-redux';
import {getPosts, loadPostsRequest} from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: getPosts(state)
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);