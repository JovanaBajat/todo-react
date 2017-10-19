import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form method="POST" action="http://localhost:8080/todo/add">
        <div className="myInput">
          <div>
            <input type="text" name="title" placeholder="title" required autoFocus/>
          </div>
          <div>
            <input type="text" name="description" placeholder="description"/>
          </div>
        </div>
        <button type="submit" className="submit">ADD TO THE LIST</button>
      </form>
    );
  }

}

export default Form;
