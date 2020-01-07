import React, { Component } from 'react';
import { connect } from 'react-redux';


class edit extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const data = {
      newTitle
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
    <div key={this.props.post.id} className="post">
      <form className="form" onSubmit={this.handleEdit}>
        <input required type="text" ref={(input) => this.getTitle = input}
        defaultValue={this.props.post.title} />
        <button>Update</button>
      </form>
    </div>
    );
  }
}
export default connect()(edit);
