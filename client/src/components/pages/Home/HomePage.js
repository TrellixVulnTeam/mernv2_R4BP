import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';

const Home = () => (
    <div>
        <PageTitle>Blog</PageTitle>
        <Posts initialPage={1} postsPerPage={3}  pagination='false' />
    </div>
)

export default Home;