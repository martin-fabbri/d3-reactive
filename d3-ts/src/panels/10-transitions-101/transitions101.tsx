import * as React from 'react';

import {max, min, scaleLinear} from "d3";
import Dot from './dots'

const dataset = [
    { x: 800, y: 350, r: 20 },
    { x: 900, y: 450, r: 10 },
    { x: 850, y: 450, r: 2 },
    { x: 1250, y: 700, r: 21 },
    { x: 1100, y: 650, r: 12 },
    { x: 1350, y: 850, r: 9 },
    { x: 1200, y: 900, r: 22 },
    { x: 1410, y: 1250, r: 20 },
    { x: 1250, y: 1100, r: 14 },
    { x: 1400, y: 1150, r: 19 },
    { x: 1500, y: 1050, r: 7 },
    { x: 1330, y: 1120, r: 5 },
    { x: 1580, y: 1220, r: 21 },
    { x: 1620, y: 1400, r: 20 },
    { x: 1250, y: 1450, r: 28 },
    { x: 1350, y: 1600, r: 19 },
    { x: 1650, y: 1300, r: 18 },
    { x: 1700, y: 1620, r: 3 },
    { x: 1750, y: 1700, r: 14 },
    { x: 1830, y: 1800, r: 23 },
    { x: 1900, y: 2000, r: 12 },
    { x: 2050, y: 2200, r: 9 },
    { x: 2150, y: 1960, r: 27 },
    { x: 2250, y: 1990, r: 25 }
];

const x = dataset.map(d => d.x);
const y = dataset.map(d => d.y);

const margin = { bottom: 30, left: 20, top: 0, right: 0};
const transformMargin = `translate(${margin.left}, ${margin.top})`;
const height = 300 - margin.top - margin.bottom;
const width = 400 - margin.left - margin.right;

const xScale = scaleLinear()
    .domain([min(x)!, max(x)!])
    .range([0, width]);

const yScale = scaleLinear()
    .domain([min(y)!, max(y)!])
    .range([0, height]);

class Transitions101Panel extends React.Component {
    public render() {
        const scatterPlot = dataset.map((d, i) =>
            <Dot
                key={i}
                cx={xScale(d.x)}
                cy={yScale(d.y)}
                r={d.r}
                fill='teal'
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>Scatter Plot</h3>
                <section
                    id='d3-container'
                    // className="bg-grey-light"
                    style={({height, width})}
                >
                    <svg
                        className="bg-grey-light"
                        width={width + margin.left + margin.right}
                        height={height + margin.top + margin.bottom}>
                        <g transform={transformMargin}>
                            {scatterPlot}
                        </g>
                    </svg>
                </section>
            </div>
        )
    }
};

export default Transitions101Panel;