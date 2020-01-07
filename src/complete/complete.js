import React, { Component } from 'react';
import { connect } from 'react-redux';

class complete extends Component {
  getTimeZone(currentDate){
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours(); 
    var min = currentDate.getMinutes(); 
    var sec = currentDate.getSeconds(); 
    this.completeDate =  date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
  }
  render () {
    this.getTimeZone(this.props.post.time);
    return (
      <div className="post">
      <div>
        {this.props.post.title}
        <span>{this.completeDate}</span>
        <span><button className="delete"
        onClick={() => this.props.dispatch({ type: 'DELETE_TODO', id: this.props.post.id })}
        >Delete</button></span>
      </div>
    </div>
    )
  }
}

export default connect()(complete);
