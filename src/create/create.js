import React, { Component } from 'react';
import { connect } from 'react-redux';

class create extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
      const title = this.getTitle.value;
      const data = {
        id: new Date(),
        title,
        editing: false,
        completed:false,
        time: this.getTimeZone()
      }
      this.props.dispatch({
        type: 'ADD_TODO',
        data
      })
      this.getTitle.value = '';
    }
    handleClear = (e) => {
      e.preventDefault();
      this.getTitle.value = '';
    }
    getTimeZone(){
      var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours(); 
      var min = currentDate.getMinutes(); 
      var sec = currentDate.getSeconds(); 
      return date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
    }
    render() {
      return (
      <div>
        <form className="form"  >
          <input className="item" type="text" ref={(input) => this.getTitle = input}
          />
          <button className="btn-add-item" onClick={this.handleSubmit}>Add</button>
          <button className="btn-add-item" onClick={this.handleClear}>Clear</button>
        </form>
      </div>
      );
    }
}
  export default connect()(create);
