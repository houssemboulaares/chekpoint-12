import React, { Component } from 'react'
import img from './logo.jpg'

export default class Test extends Component {
    constructor(){
        super();
        this.state = {
       Person :{ fullName:'houssem',
       bio:'student',
       imgSrc:img,
       profession:'student'},
       shows:true
       
      
       
      }}
    componentDidMount()
    {
        console.log('hi')       
    }
    change=()=>{
      this.setState({shows:!this.state.shows})
    }
  render() {
    return (
      <div>
        {this.state.shows?<>
        hello im {this.state.Person.fullName}
        <br></br>{this.state.Person.bio}
        <br></br><img src={this.state.Person.imgSrc} ></img></>:null
      }
      <button onClick={this.change}>show</button>
       </div>
    )
  }
}
