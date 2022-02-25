import React, {useState, useEffect} from 'react';
import "./style.css";
import {fabric} from "fabric";

const testURL = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'

export default function App() {

    const [canvas, setCanvas] = useState('');
    const [imgURL, setImgURL] = useState('');


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

    const addRect = () => {
        const rect = new fabric.Rect({
            height: 280,
            width: 200,
            fill: 'yellow'
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
            <form onSubmit={e => addImg(e, imgURL, canvas)}>
                <div>
                    <input
                        type="text"
                        value={imgURL}
                        onChange={ e => setImgURL(e.target.value)}
                    />
                    <button type="submit">Add Image</button>
                </div>
            </form>
            <canvas id="canvas"/>

            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}
