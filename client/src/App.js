import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import PostsPage from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import AddPost from './components/pages/AddPost/AddPostPage';
import SinglePost from './components/pages/SinglePost/SinglePostPage';
import EditPostPage from './components/pages/EditPost/EditPostPage'

class App extends React.Component {
  state = {
    posts: [],
  }
    
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/posts' exact component={PostsPage} />
          <Route path='/posts/new' exact component={AddPost} />
          <Route path='/posts/editpost/:id' exact component={EditPostPage} />
          <Route path='/posts/:id' exact component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    )
  }
}
export default App;
