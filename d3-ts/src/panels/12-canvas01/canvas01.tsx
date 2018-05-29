import * as React from 'react';

import LineSeries from './series/line-series';
import {Datum} from "./utils/scales";

// import CanvasFrame from './canvas-frame';

// import XAxis from './axis/x-axis';

// import {Orientation} from './utils/axis';

// import scaleLinear from './scales/linear'
// import {range} from 'd3';

// interface IDatum {
//     x: number;
//     y: number;
// }

interface IProps {
    title?: string;
}


// const dataset: IDatum[] = [{x:5, y:5},{x:10, y:15},{x:20, y:7},{x:30, y:18},{x:40, y:10}];

const margin = { bottom: 30, left: 20, top: 0, right: 0};
const height = 300 - margin.top - margin.bottom;
const width = 400 - margin.left - margin.right;

// const x = scaleLinear().range([0, width]);
// const y = scaleLinear().range([height, 0]);

// const randomPoints = (scale: number) => {
//     return range(1000).map(d =>
//         ([Math.random() * scale, Math.random() * scale])
//     );
// }

// const {Bottom} = Orientation;

class Canvas01Panel extends React.Component<IProps> {

    public render() {
        const data: Datum = [{x: 1, y:1}, {x: 2, y:2}];
        return (
            <div className="mt-4 mb-4">
                <h3>Canvas01</h3>
                <section
                    id='d3-container'
                    style={({height, width})}
                >
                    <svg
                        width={width + margin.left + margin.right}
                        height={height + margin.top + margin.bottom}
                    >

                        <g transform={`translate(${margin.left}, ${margin.top})`}>

                            <LineSeries width={100} height={100} data={data}/>

                            {/*<CanvasFrame*/}
                                {/*width={width}*/}
                                {/*height={height}/>*/}
                        </g>
                    </svg>
                </section>
            </div>
        )
    }

};

export default Canvas01Panel;