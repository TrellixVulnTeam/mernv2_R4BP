import React from 'react';
import Posts from '../../features/Posts/PostsContainer';

import PageTitle from '../../common/PageTitle/PageTitle';

const PostsPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <Posts initialPage={1} postsPerPage={10} />
    </div>
)

export default PostsPage;