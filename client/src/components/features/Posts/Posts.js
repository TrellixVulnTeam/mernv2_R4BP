import React from 'react';
import Spinner from '../../common/Spinner/Spinner';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Pagination from '../../common/Pagination/Pagination';
import PostsCounter from '../../features/PostsCounter/PostsCounter';

class Posts extends React.Component {
  state = {
    initialPage: this.props.initialPage || 1,
    postsPerPage: this.props.postsPerPage || 10,
    pagination: this.props.pagination || true,
  }
    componentDidMount(){
      const {loadPostsByPage} = this.props;
      loadPostsByPage(this.state.initialPage, this.state.postsPerPage);
    }
    loadPostsPage = (page) => {
      const {loadPostsByPage} = this.props;
      const {postsPerPage} = this.state;
      loadPostsByPage(page, postsPerPage);
    }
    render(){
        const { posts, request, pages } = this.props;
        const {pagination} = this.state;
        const {loadPostsPage} = this;
      
        return (
          <div>
            {request.pending && request.success === null && <Spinner />}
            {request.pending && request.success === false && <h1>error</h1>}
            {request.error === null && request.success === true &&
             <div>
              <PostsCounter counter={posts.length} />
              <PostsList posts={posts} />
              {pagination === true && <Pagination pages={pages} onPageChange={loadPostsPage}/>}
            </div>}
          </div>
        )
    }
}
Posts.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
    loadPostsByPage: PropTypes.func.isRequired,
  };
  

export default Posts;