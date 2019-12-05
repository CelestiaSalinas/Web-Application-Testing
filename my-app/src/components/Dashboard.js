import React from 'react'

// export const addBall = currentScore => {
//     return currentScore + 1;
//   };

//   export const addStrike = currentScore => {
//     return currentScore + 1;
//   };

const Dashboard = props => {
    return(
<section className="buttons">
        <div className="homeButtons">
          <button
            onClick={props.addBalls}
            className="homeButtons__touchdown"
          >
            Balls
          </button>
          <button
            onClick={props.addStrikes}
            className="homeButtons__fieldGoal"
          >
            Strikes
          </button>
        </div>
        <div>
        <button
            onClick={props.foulBall}
            className="homeButtons__fieldGoal"
          >
            Foul
          </button>
          <button
            onClick={props.hitBall}
            className="homeButtons__fieldGoal"
          >
            Hit
          </button>
        </div>
      </section>
)}

export default Dashboard