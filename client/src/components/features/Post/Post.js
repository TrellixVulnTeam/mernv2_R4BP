import React from 'react';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';

class Post extends React.Component {
    componentDidMount(){
        const {loadPost, id} = this.props;
        loadPost(id);
    }
    render(){
      const {request, post} = this.props;

      return (
        <div>
          {request.pending && request.success === null && <Spinner />}
          {request.pending && request.success === false && <h1>error</h1>}
          {request.error === null && request.success === true &&
            <div>
              <article className="post-summary">
                <SmallTitle>{post.title}</SmallTitle>
                <HtmlBox>{post.content}</HtmlBox>
               Author: {post.author}
              </article >
              <Button variant="primary" ><Link to={`/posts/editpost/${this.props.id}`}>Edit Post</Link></Button>
            </div>
          }
        </div>
      )
    }
}

Post.propTypes = {
      post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
  };
export default Post;
