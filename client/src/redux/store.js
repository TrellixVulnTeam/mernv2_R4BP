import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


//import reducers;
import posts from './postsRedux';

//combineReducers
const rootReducer = combineReducers({
    posts,
})


//create store
const store = createStore(
    rootReducer,
    compose(
          applyMiddleware(thunk)
      )
  );
  

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()