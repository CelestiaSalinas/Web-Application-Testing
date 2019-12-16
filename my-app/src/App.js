import React from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0

    }
  }

  addBalls = () => {
    this.setState(prevState => {
  if(prevState.balls >= 4) {
    return {balls:0}
  }
  
      return { ...prevState, balls: prevState.balls + 1 }
  })}

addStrikes = () => {
  this.setState(prevState => {
if(prevState.strikes >= 3) {
  return {strikes:0}
}

    return { ...prevState, strikes: prevState.strikes + 1 }
})}

hitBall = () => {
  this.setState({
    strikes:0,
    balls:0
  })
}

foulBall = () => {
  this.setState(prevState => {
    if(prevState.strikes >= 2) {
      return{strikes: prevState.strikes}
    }
    return { ...prevState, strikes:prevState.strikes + 1}
  })
}
  


  render() {
    return (
      
      <div className='container'>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard balls={this.state.balls} strikes={this.state.strikes} addBalls={this.addBalls} addStrikes={this.addStrikes} hitBall={this.hitBall} foulBall={this.foulBall}/>
      </div>
    )
  }
}

export default App;
