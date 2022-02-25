import React, {useState, useEffect} from 'react';
import "./style.css";
import {fabric} from "fabric";


export default function App() {

    const [canvas, setCanvas] = useState('');


    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 800,
            width: 800,
            backgroundColor: 'pink'
        })
    );

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    const onClick = () => {
        var canvas = new fabric.Canvas('c');

        console.log(1);
// create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });

// "add" rectangle onto canvas
        canvas.add(rect);

    }

    return (
        <div>
            <div onClick={onClick}>Hello !</div>
            <canvas id="c"></canvas>
            <canvas id="canvas"/>

            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}
