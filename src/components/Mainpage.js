import React, { Component } from 'react';

export class Mainpage extends Component {
  render() {
    return (
        <video width={window.innerWidth} height={window.innerHeight} controls autoPlay={true}>
        <source src="https://firebasestorage.googleapis.com/v0/b/mychatapp-10935.appspot.com/o/birthday.mp4?alt=media&token=c4ba5b2e-6e9f-4747-bc42-ec07e67c7268" type="video/mp4"/>
        </video>
    )
  }
}

export default Mainpage