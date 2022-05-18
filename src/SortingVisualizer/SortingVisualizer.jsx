import React, { Component } from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort.js';
import './SortingVisualizer.css';

// Change this value for the number of bars in the array.
var NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 10;

export default class SortingVisualizer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      array: [],
      enum: {
        mergeSort: 0, 
        quickSort: 1, 
        bubbleSort: 2,
        heapSort: 3,
      },
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 330));
    }
    this.setState({ array });
  }

  visualise(animations, sortType){

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {

          if(i === 0) {
            this.toggleOnOff();
          }

          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if(sortType !== this.state.enum.mergeSort) {
          setTimeout(() => {
            const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;

            if(i === animations.length - 1) {
              this.toggleOnOff();
            }
          }, i * ANIMATION_SPEED_MS);
        }
        else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            
            if(i === animations.length - 1) {
              this.toggleOnOff();
            }
          }, i * ANIMATION_SPEED_MS);

        }
      }
    }
  }

  toggleOnOff() {
    const gernerteBtn = document.getElementById('gernerateBtn');
    const range = document.getElementById('range');

    if (gernerteBtn.disabled) {
      gernerteBtn.disabled = false;
       range.disabled = false;
    } else {
       gernerteBtn.disabled = true;
      range.disabled = true;
     }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    this.visualise(animations, this.state.enum.mergeSort)
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    this.visualise(animations, this.state.enum.quickSort);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    this.visualise(animations, this.state.enum.heapSort);
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    this.visualise(animations, this.state.enum.bubbleSort);
  }

  speedAndSize(value) {
    console.log(value)
    NUMBER_OF_ARRAY_BARS = value;
    ANIMATION_SPEED_MS = 260 - value;

    this.resetArray();
  }

  render() {

    const { array } = this.state;
    var widthOfBar = 50 / NUMBER_OF_ARRAY_BARS * 9;

    return (
      <div className='main'>
        <h3 className='bar-header'>Array Bars</h3>
        <div className="array-container"
        style={{
          minHeight: "380px"
        }}
        >
          <div className='array-bars'>
            {array.map((value, idx) => (
              <div
                className='array-bar'
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                  width: `${widthOfBar}px`
                }}></div>
            ))}<br></br>
          </div>
        </div>
        <div className='controls'>
          <button className='btn btn-primary' id='gernerateBtn' onClick={() => this.resetArray()}>Generate New Array</button>
          <button className='btn btn-info' onClick={() => this.mergeSort()}>Merge Sort</button>
          <button className='btn btn-info' onClick={() => this.quickSort()}>Quick Sort</button>
          <button className='btn btn-info' onClick={() => this.heapSort()}>Heap Sort</button>
          <button className='btn btn-info' onClick={() => this.bubbleSort()}>Bubble Sort</button>

          <div className='range'>
            <label for="range" className='range-label'>Change array size and sorting speed:</label>
            <input type="range" id='range' name='range' min="5" max="250" defaultValue="100" onChange={(event) => this.speedAndSize(event.target.value)}/>
          </div>
        </div>
      </div>

    );
  }3

}


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
