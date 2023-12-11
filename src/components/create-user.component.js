import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {  
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };

    console.log(newUser);
    
    this.setState({
      username: ''
    })
//axios is a HTTP library which let developers send HTTP request from their local machine to the server
    axios.post('http://localhost:5000/users/add', newUser).then(res => console.log(res.data));
  }
  
  render(){
    return(
    <div>
      <h3 className="max-w-sm mx-auto py-5" >Create New User</h3>
      <form className="max-w-sm mx-auto" onSubmit={this.onSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username: </label>
          <input type="text"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              value={this.state.username}
              onChange={this.onChangeUsername} placeholder="name" />
        </div>
        <div className="flex items-start mb-5">
          <button type="submit" value="Create Exercise Log" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}  
