import {API_URL} from '../config';
import axios from 'axios';


const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_POST = createActionName('LOAD_POST');
export const ADD_POST = createActionName('ADD_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const SEND_REQUEST = createActionName('SEND_REQUEST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');


export const loadPosts = payload => ({payload, type:LOAD_POSTS});
export const loadPost = (payload) => ({payload, type: LOAD_POST});
export const loadPostsByPage = payload => ({payload, type: LOAD_POSTS_PAGE});

export const getPosts = ({posts}) => posts.data;
export const getRequest = ({posts}) => posts.request;
export const getPost = ({posts}) => posts.singlePost;
export const getPages = ({posts}) => Math.ceil(posts.amount/posts.postsPerPage);

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const sendRequest = () => ({type: SEND_REQUEST});


const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
    send: null
  },
  singlePost: {},
  amount: 0,
  postsPerPage: 10,
  presentPage: 1,

};


export default function reducer(statePart=initialState, action){
  switch(action.type){
    case LOAD_POSTS_PAGE:
        return {...statePart, 
          postsPerPage: action.payload.postsPerPage,
          presentPage: action.payload.presentPage,
          amount: action.payload.amount,
          data: [...action.payload.posts],
        }
    case SEND_REQUEST:
        return {...statePart, request: {pending: false, error: null, send: true}};
    case LOAD_POST:
        return {...statePart, singlePost: action.payload}
    case LOAD_POSTS:
      return {...statePart, data: action.payload};
    case START_REQUEST:
      return {...statePart, request: {pending: true, error:null, success: null}}
    case END_REQUEST:
      return {...statePart, request: {pending: false, error:null, success: true}}
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default: 
      return statePart;
    }
}


export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    
    try {

      let res = await axios.get(`${API_URL}/posts`);
     
      dispatch(loadPosts(res.data));
      dispatch(endRequest())
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadPostRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest());

    try {

      let res = await axios.get(`${API_URL}/posts/${id}`);

      dispatch(loadPost(res.data)); 
      dispatch(endRequest())
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const addPostRequest = (post) => {
  return async dispatch => {
    dispatch(startRequest());
    
    try {

      let res = await axios.post(`${API_URL}/posts`, post);
      
      dispatch(sendRequest());
    } catch(e){
      dispatch(errorRequest(e.message))
    }
  }
}

export const loadPostsByPageRequest = (page, numberOfPosts) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      
      let postsPerPage = numberOfPosts || 10;
      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;
      
      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);
      
      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page
      }

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest())
    } catch(e) {
      dispatch(errorRequest(e.message))
    }
  } 
}