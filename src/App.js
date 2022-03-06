import React, {useState, useEffect} from 'react';
import "./style.css";
import {fabric} from "fabric";

const testURL = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'

const list = [
    {
        city: 'beijing',
        place: '北京数字谷',
        floor: '5',
        name: '独一',
    },
    {
        city: 'beijing',
        place: '北京数字谷',
        floor: '5',
        name: '独2',
    },
    {
        city: 'beijing',
        place: '北京数字谷',
        floor: '5',
        name: '独3',
    },

];

export default function App() {

    const [canvas, setCanvas] = useState('');
    const [imgURL, setImgURL] = useState('');

    const BeijingFloor5 = list;


    const initCanvas = () => (

        // canvas.setHeight(window.innerHeight);
        // canvas.setWidth(window.innerWidth);

        new fabric.Canvas('canvas', {
            height: 800,
            width: 800,
            backgroundColor: '#ddd',
            // lockScalingX: true,
            // lockScalingY: true,
            // hasControls: false,
            // fill: 'transparent',
            // stroke: 'red',
            // strokewidth: 4,
            // borderColor:"blue",
            // borderWidth:4,
            // borderStyle:'solid',
        })
    );

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);


    const setRoom = () => {
        let title = 'room 1'
        let angle = 0
        let shape = new fabric.Rect({
            width: 100,
            height: 100,
            fill:"red",
            originX: 'center',
            originY: 'center'
        });

        let text = new fabric["Text"](title, {
            fontSize: 30,
            fill:"blue",
            originX: 'center',
            originY: 'center'
        });

        let group = new fabric.Group([shape, text], {
            left: 150,
            top: 100,
            angle: angle,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
        });

        canvas.add(group);
        canvas.renderAll();
    }


    const setCircleRoom = (value, angle) => {

        let circle = new fabric.Circle({
            radius: 100,
            fill: '#eef',
            scaleY: 0.5,
            originX: 'center',
            originY: 'center'
        });

        let text = new fabric.Text(value.name, {
            fontSize: 30,
            originX: 'center',
            originY: 'center'
        });

        let group = new fabric.Group([circle, text], {
            left: 150,
            top: 100,
            angle: angle,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
        });

        canvas.add(group);

    }

    const addRect = () => {
        const rect = new fabric.Rect({
            height: 280,
            width: 200,
            lockScalingX: true,
            lockScalingY: true,
            hasControls: false,
            fill: 'transparent',
            stroke: 'red',
            strokewidth: 4,
        });
        canvas.add(rect);


        canvas.renderAll();
    }
    const addImg = (e, url, canvi) => {
        e.preventDefault();
        new fabric.Image.fromURL(testURL, img => {
            img.scale(0.75);
            canvi.add(img);
            canvi.renderAll();
            setImgURL('');
        });
    }

    const floor = () => {
        const rect = new fabric.Rect({
            height: 280,
            width: 200,
            // fill: 'yellow'
            fill: 'transparent',
            stroke: 'red',
            strokewidth: 4
        });
        canvas.add(rect);
    }

    const onClick = () => {
        console.log(canvas)
//         var canvas = new fabric.Canvas('c');
//
//         console.log(1);
// // create a rectangle object
//         var rect = new fabric.Rect({
//             left: 100,
//             top: 100,
//             fill: 'red',
//             width: 20,
//             height: 20
//         });
//
// // "add" rectangle onto canvas
//         canvas.add(rect);

    }

    return (
        <div>
            <div onClick={onClick}>Hello !</div>
            <button onClick={() => addRect(canvas)}>Rectangle</button>
            <button onClick={setRoom}>setRoom</button>
            <form onSubmit={e => addImg(e, imgURL, canvas)}>
                <div>
                    <input
                        type="text"
                        value={imgURL}
                        onChange={e => setImgURL(e.target.value)}
                    />
                    <button type="submit">Add Image</button>
                </div>
            </form>
            <canvas id="canvas"/>

            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}
