import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td scope="col" className="px-6 py-3">{props.exercise.username}</td>
    <td scope="col" className="px-6 py-3">{props.exercise.description}</td>
    <td scope="col" className="px-6 py-3">{props.exercise.duration}</td>
    <td scope="col" className="px-6 py-3">{props.exercise.date.substring(0,10)}</td>
  </tr>
)

export default class ExercisesList extends Component {  
  
  constructor(props) {
    super(props);

    this.state = {exercises: []};
  }  

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
     .then(response => {
       this.setState({ exercises: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }  

  exercisesList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} />;
    })
  }
  
  render(){
    return(
      <div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                   { this.exercisesList()} 
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}  
