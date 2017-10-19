import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, e) => {
            return (
              <li key={e}>{todo.title} {todo.description} {todo.date}
                <button>✔</button>
                <a href={`http://localhost:8080/todo/${todo._id}/delete`}><button>X</button></a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

}

export default List;
