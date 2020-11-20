import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Button, Modal} from "react-bootstrap";
import Post from "../Post/Post"
import './Posts.css'
import 'bootstrap/dist/css/bootstrap.css';
import PostModal from '../PostModal/PostModal'
class Posts extends Component{
    constructor(props) { 
        super(props);
   
        this.state = {
            data : this.props.location.state,
            show : false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleShow(){
        this.setState({
            show:true
        });
    }  
    handleClose(){
        this.setState({
            show:false
        });
    }  

    showModal(){
        return this.state.show;
    }  
    render(){
        if(this.props.location.state){
            const {data} = this.props.location.state;
        return(
            <div>
                <div>{data.posts && data.posts.map(post => {
                    const date = post.time.toDate().toString();
                    return(
                        <Post username={post.username} text={post.text} time={date}></Post> 
                    )})}
                </div>
                <div><Button className="newpost" onClick={this.handleShow}>Create New Post</Button></div>
                <PostModal show={this.state.show} handleClose={this.handleClose}></PostModal>
            </div>
        );
        }
        else{
            return(
                <Row>Please go back to discussion forum and choose a topic</Row>
            )
        }
    }

}
export default Posts;