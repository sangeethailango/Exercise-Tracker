import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateExercise extends Component {        

  constructor(props) {
    super(props);
    // bind() is used to pass the data as an argument. "this" keyword is necessary for a method if you want to use "this"(which is an component instance)inside an event handler. So we are binding "this" to the method.
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }
  // Will automatically called right before anything loads on the page.

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({   
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })    
  }
  // event handler functions
  onChangeUsername(e) {
    this.setState({
      // e.target refers to the targeted dom element where is the event is happening.
      username: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    // e.preventDefault will prevent normal HTML form submit behavio from happening.
    e.preventDefault();
    const exercise = {
      username: this.state.username,  
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
  console.log(exercise);

  axios.post('http://localhost:5000/exercises/add', exercise).then(res => console.log(res.data));

  window.location = '/';
  }

  render(){
    return(
      <div>
        <h3 className="max-w-sm mx-auto py-5" >Create New Exercise Log</h3>
        <form className="max-w-sm mx-auto" onSubmit={this.onSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
            <select 
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                })}
            </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description: </label>   
              <input  
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
              value={this.state.description}
              onChange={this.onChangeDescription}
              required/>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration (in minutes): </label>
              <input 
              type="text" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" value="Create Exercise Log" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">submit</button>
            </div>
        </form>
      </div>
    )
  }
}  
