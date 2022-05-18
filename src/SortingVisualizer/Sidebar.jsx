import React, { Component } from 'react';
import './Sidebar.css';
import data from '../data/data.json'

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='sidebar'>

                <div className='wrapper'>
                    <h2 className='h2'>Time Complexity</h2>

                    <table className='table'>
                        <tr className='center'><th className='h4'>Sort Type</th>
                            <th>Best</th>
                            <th>Average</th>
                            <th>Worst</th>
                        </tr>

                        <tr>
                            <th>MergeSort</th>
                            <td>{data.mergeSort.best}</td>
                            <td>{data.mergeSort.average}</td>
                            <td>{data.mergeSort.worst}</td>
                        </tr>

                        <tr>
                            <th>QuickSort</th>
                            <td>{data.quickSort.best}</td>
                            <td>{data.quickSort.average}</td>
                            <td>{data.quickSort.worst}</td>
                        </tr>

                        <tr>
                            <th>HeapSort</th>
                            <td>{data.heapSort.best}</td>
                            <td>{data.heapSort.average}</td>
                            <td>{data.heapSort.worst}</td>
                        </tr>

                        <tr>
                            <th>HeapSort</th>
                            <td>{data.bubbleSort.best}</td>
                            <td>{data.bubbleSort.average}</td>
                            <td>{data.bubbleSort.worst}</td>
                        </tr>
                    </table>
                </div>

                <div className='wrapper'>
                    <h2 className='h2'>Space Complexity</h2>

                    <table className='table'>
                        <tr className='center'>
                            <th className='h4'>Sort Type</th>
                            <th>Space Complexity</th>
                        </tr>

                        <tr>
                            <th>MergeSort</th>
                            <td>{data.mergeSort.spaceComplexity}</td>
                        </tr>

                        <tr>
                            <th>QuickSort</th>
                            <td>{data.quickSort.spaceComplexity}</td>
                        </tr>

                        <tr>
                            <th>HeapSort</th>
                            <td>{data.heapSort.spaceComplexity}</td>
                        </tr>

                        <tr>
                            <th>HeapSort</th>
                            <td>{data.bubbleSort.spaceComplexity}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}