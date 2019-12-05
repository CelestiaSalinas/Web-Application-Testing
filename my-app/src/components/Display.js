import React from 'react'

const Display = props => {

    return(
        
      <section data-testid='scoreboard' className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 data-testid="lions-header" className="home__name">
              Balls
            </h2>
            <div className="home__score">{props.balls}</div>
          </div>
        </div>
        <div className="away">
            <h2 className="away__name">Strikes</h2>
            <div className="away__score">{props.strikes}</div>
        </div>
      </section>
      
    
    )

}

export default Display