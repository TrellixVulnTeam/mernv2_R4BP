const uuid = require('uuid');
const Post = require('../models/post.model');

//get all posts
exports.getPosts = async (req,res) => {
    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err)
    }
}
exports.getPost = async (req,res) => {
    try { 
        const data = await Post.find();
        const id = req.params.id;
        const singlePost = data.find(post => post.id === id);
        res.status(200).json(await singlePost);
    } catch(err){
        res.status(500).json(err);
    }
}

//post new post
exports.addPost = async (req,res) => {
    try {

        //other version let newPost = new Post(req.body); newPost.id = uuid();
        const {title, author, content} = req.body;

        let newPost = new Post();
        newPost.title = title;
        newPost.content = content;
        newPost.author = author;
        newPost.id = uuid();

        postSaved = await newPost.save();
        res.status(200).json(postSaved);
    } catch(err) {
        res.status(500).json(err)
    }
}
exports.deletePost = async (req,res) => {
    try { 
        const id = req.params.id;
        await Post.findByIdAndRemove(id);
        res.status(200).send('Post remove');
    } catch(err){
        res.status(500).json(err);
    }
}
exports.editPost = async (req,res) => {
    try {
        const _id = req.body._id;
        await Post.findByIdAndUpdate(_id, req.body)
        res.status(200).send('Post update')
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.getPostsByRange = async (req,res) => {
    try {
        let {startAt, limit} = req.params;
        startAt = parseInt(startAt);
        limit = parseInt(limit);
        
        const amount = await Post.countDocuments();
        const posts = await Post.find().skip(startAt).limit(limit);
        
        res.status(200).json({posts, amount});
    } catch(err) {
        res.status(500).json(err)
    }
}