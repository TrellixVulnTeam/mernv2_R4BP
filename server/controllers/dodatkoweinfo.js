/*
Co muszę mieć?
EndPoint /api/:id

//ROUTER
router.route('/posts/:id').get(PostController.getPost);

//CONTROLLER
exports.getPost = async (req,res) => {
    try {
        res.status(200).json(await Post.find());
        
    }   catch(err){
        res.status(500).json(err);
    }
}


//POSTSREDUX

//THUNK DO KONTAKTU Z API CZYLI Z SERWEREM
 export const loadPostRequest = () => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.get(`${API_URL}/posts/:id`);
            await new Promise((resolve,reject) => setTimeout(resolve,2000));
            dispatch(loadPost(res.data));
            dispatch(endRequest())
        } catch(e){
            dispatch(errorRequest(e.message))
        }
    }
 }


JAKAS AKCJE DO DISPACHOWANIA
const loadPost = payload => ({payload, type:LOAD_POST});
const LOAD_POST = createActionName('LOAD_POST');


case LOAD_POST: 
 return {...statePart, singlePost: action.payload};

//dodać do initialState singlePost={}

FUKCJE ZWRACAJACA POST DO MAPOWANIA
const getPost = ({singlePost}) => singlePost;

 */