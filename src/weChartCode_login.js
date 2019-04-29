import React, { Component } from 'react';

// import medatc from './images/MEDATC.svg';

const { createCanvas } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

class weChart extends Component {

  render() {
    return (
      <div className="default_page">
        <img src={canvas.toDataURL()} alt="" />
      </div>
    );
  }
}

export default weChart;
