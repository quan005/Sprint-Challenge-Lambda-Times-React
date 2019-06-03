import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      index: 0 
    }
  }
  componentDidMount(){
    this.setState({carouselData: carouselData})
  }

  leftClick = event => {
    event.preventDefault();

    if (this.state.index === 0) {
      this.setState({index: this.state.carouselData.length - 1})
    } else {
      this.setState((prevState) => ({index: prevState.index - 1}));
    }
  }

  rightClick = event => {
    event.preventDefault();

    if (this.state.index === this.state.carouselData.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState((prevState) => ({index: prevState.index + 1}));
    }
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          <img src={this.state.carouselData[this.state.index]} style={{display: 'block'}} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}