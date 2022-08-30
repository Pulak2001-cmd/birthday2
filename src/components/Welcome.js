import React, { Component } from 'react'
import './welcome.css';

export class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="card">
      <div className="outside">
        <div className="front">
          <p>Happy Birthday Easha</p>
          <div className="cake">
            <div className="top-layer"></div>
            <div className="middle-layer"></div>
            <div className="bottom-layer"></div>
            <div className="candle"></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className="inside">
        <p>Wishing you a very happy birthday filled with love and laughter</p>
        <p>-Your Hamla</p>
        <h1>&#127873;</h1>
      </div>
    </div>
      </div>
    )
  }
}

export default Welcome