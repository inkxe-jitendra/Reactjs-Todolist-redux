import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../post/post.js';
import Edit from '../edit/edit.js';
import Complete from '../complete/complete.js';
class list extends Component {
  constructor(props) {
    super(props);
    this.todoCount = 0;
    this.completeCount = 0;
  }
 count(){
  this.todoCount = 0;
  this.completeCount = 0;
  this.props.posts.map(post => {
    if (!post.completed) {
      this.todoCount++;
    }else{
      this.completeCount++;
    }
  })
 }
render() {
  this.count();
  return (
    <div>
    <div > Task-to-do ({this.todoCount})</div>
      {this.props.posts.map((post) => (
      <div key={post.id} >
      {!post.completed ? (post.editing ? <Edit post={post} key={post.id} /> : <Post post={post}
      key={post.id} />):''}
      </div>
    ))}
    <div > Completed-task ({this.completeCount})</div>
    {this.props.posts.map((post) => (
      <div key={post.id} >
      {post.completed ? <Complete post={post} key={post.id}/> :''}
      </div>
      
    ))}
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(list);
