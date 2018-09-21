import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();

    this.state={
      count:0
    };
  }

  componentDidMount(){
    this.setState({
      count: 1
    });

    this.handleCountClick = this.handleCountClick.bind(this);

  }


  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      })
    }
  }


  render() {
    console.log('Ejectuta render');
    return (
      <div className="Content">
        <h2>Counter. {this.state.count} </h2>
        <p> 
          <button id="add" onClick={this.handleCountClick }>+</button>
          <button id="subtract" onClick={this.handleCountClick }>-</button>
          <button id="reset" onClick={this.handleCountClick }>Reset</button>
        </p>
      </div>
    );
  }
}

export default Content;
