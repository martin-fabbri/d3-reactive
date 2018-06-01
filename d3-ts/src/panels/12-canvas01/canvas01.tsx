import * as React from 'react';

// import {default as XAxis, XAxis} from './axis/x-axis';
import LineSeries from './series/line-series';
import {IDatum} from "./utils/scales";

// import CanvasFrame from './canvas-frame';
import XAxis from './axis/x-axis';
import YAxis from './axis/y-axis';
import XyFrame from './xy-frame';


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

// const margin = { bottom: 30, left: 20, top: 0, right: 0};
// const height = 300 - margin.top - margin.bottom;
// const width = 400 - margin.left - margin.right;

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
        // const dataset: IDatum[] = [{x:5, y:5},{x:10, y:15},{x:20, y:7},{x:30, y:18},{x:40, y:10}];

        const hist = [ 8, 6, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 11, 23, 42, 68, 91, 103, 104, 98, 90, 82, 78, 76, 75, 73, 70, 67, 65, 63, 61, 60, 61, 61, 59, 57, 55, 56, 58, 60, 63, 66, 68, 70, 71, 71, 73, 76, 81, 85, 90, 94, 99, 103, 106, 107, 108, 110, 114, 119, 124, 126, 130, 136, 142, 144, 144, 147, 152, 154, 154, 152, 153, 157, 165, 171, 172, 169, 165, 165, 166, 165, 161, 156, 153, 152, 153, 155, 156, 154, 151, 152, 160, 170, 181, 190, 195, 200, 209, 222, 238, 254, 266, 278, 302, 333, 352, 360, 383, 422, 459, 486, 497, 506, 520, 518, 516, 527, 530, 529, 518, 499, 485, 477, 463, 448, 435, 416, 397, 387, 376, 355, 335, 320, 306, 296, 285, 273, 265, 259, 249, 235, 224, 219, 213, 205, 197, 188, 180, 172, 169, 167, 162, 156, 149, 143, 137, 133, 129, 125, 121, 119, 117, 113, 106, 100, 94, 90, 87, 86, 86, 88, 89, 88, 83, 76, 71, 70, 72, 74, 75, 74, 73, 74, 74, 70, 65, 61, 59, 60, 60, 61, 61, 61, 60, 58, 56, 54, 52, 49, 45, 41, 38, 36, 34, 32, 31, 31, 31, 31, 31, 29, 28, 27, 25, 25, 24, 23, 23, 22, 22, 22, 21, 20, 19, 18, 17, 17, 15, 14, 13, 13, 12, 12, 13, 13, 13, 12, 12, 12, 11, 11, 10, 10, 9, 9, 12, 57, 267, 465 ];
        const dataset: IDatum[] = hist.map((h, i) => ({x:i, y:h}));
        const xLabel = 'abc';
        const yLabel = 'xyz';

        const xTickFormat = (v: number) => (`${(v / 1000)}K`);
        const yTickFormat = (v: number) => (`${(v / 1000)}.0K`);

        return (
            <div className="mt-4 mb-4">
                <h3>Canvas01</h3>
                <XyFrame height={400} width={400}>
                    <XAxis height={256} width={256} title={xLabel} tickValues={[50000, 100000, 150000, 200000, 250000]}
                        scale={'linear'} domain={[0, 280000]} range={[0, 255]} tickFormat={xTickFormat}/>
                    <YAxis height={256} width={256} title={yLabel} tickValues={[1000, 2000, 3000, 4000, 5000, 6000]}
                        scale={'linear'} domain={[0, 6000]} range={[255, 0]} tickFormat={yTickFormat}/>
                    <LineSeries width={280} height={280} data={dataset}
                                xDomain={[0, 28]} xRange={[0, 255]}
                                yDomain={[0, 6]} yRange={[255, 0]}
                    />
                </XyFrame>
            </div>
        )
    }

};

export default Canvas01Panel;