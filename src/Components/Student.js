import React, { Component } from 'react';
import './student.css'
class Student extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      university: '',
      score: 0,
      success: false
    }
  }
  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }
  addScore() {
    this.setState({
      score: this.state.score + 1
    }, () => { this.state.score > 359 && this.setState({ success: true }) })
  }

  subScore() {
    this.setState({
      score: this.state.score - 1
    }, () => { this.state.score < 360 && this.setState({ success: false }) })
  }
  render() {
    let isSuccess = this.state.success;
    let text;
    if (isSuccess) {
      text = <span>SUCCESS</span>
    }
    else {
      text =''
    }
    return (
      <div className="main-continer">
        <div className="info">
          <div className="nameinfo">
            <h1>{this.props.name} </h1>
              <button className="add" onClick={() => this.addScore()}>+</button>
              <button className="sub" onClick={() => this.subScore()}>-</button>
          </div>
          <p>{this.props.university}
           {text}
          </p>
        </div>
        <div className="score">
          {this.state.score}
        </div>
      </div>
    );
  }
}

export default Student;
