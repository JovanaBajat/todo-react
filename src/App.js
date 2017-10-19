import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import request from 'request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : []
    };
  }

  componentDidMount(){
    request("http://localhost:8080/todo", (err, res, body) => {
      if(err){
        console.log(err);
      }
      // console.log(body);
      this.setState({
        todos : JSON.parse(body)
      });
      console.log(this.state.todos);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My super todo list!</h1>
        <Form />
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
