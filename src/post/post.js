import React, { Component } from 'react';
import { connect } from 'react-redux';
class post extends Component {
  render() {
    return (
    <div className="post">
      <div>
        {this.props.post.title}
        <span>{this.props.post.time}</span>
        <span><button className="completed"
        onClick={() => this.props.dispatch({ type: 'COMPLETE_TODO', id: this.props.post.id })}
        >Completed</button></span>
        <span><button className="edit"
        onClick={() => this.props.dispatch({ type: 'EDIT_TODO', id: this.props.post.id })
        }
        >Edit</button></span>
        <span><button className="delete"
        onClick={() => this.props.dispatch({ type: 'DELETE_TODO', id: this.props.post.id })}
        >Delete</button></span>
      </div>
    </div>
    );
  }
}
export default connect()(post);
