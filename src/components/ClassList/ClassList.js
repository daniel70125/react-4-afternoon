import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => this.setState({students: res.data}))
    .catch(err => console.log(err));
  }

  render() {
    const students = this.state.students.map((elm, i) => (
      <Link to={`/student/${elm.id}`}>
      <h3 key={i}>
        {elm.first_name} {elm.last_name}
      </h3>
      </Link>
    ));
    // console.log(this.state.students.data);
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
      {students}
      </div>
    )
  }
}