import * as React from 'react';

import {scaleLinear} from "d3";

const dataset = [5, 10, 15, 20, 25];
const height = 300;
const width = 400;
const barWidth = 20;
const barPadding = 5;
const barFillColor = 'teal';

const yScale = scaleLinear()
    .domain([0, 25])
    .range([0, height]);

class ScalingPanel extends React.Component {
    public render() {
        const barChart = dataset.map((d, i) =>
            <rect
                key={i}
                x={i * (barWidth + barPadding)}
                y={height - yScale(d)}
                width={barWidth}
                fill={barFillColor}
                height={yScale(d)}
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>Scaling Basics</h3>
                <section
                    id='d3-container'
                    className="bg-grey-light"
                    style={({height, width})}
                >
                    <svg width={width} height={height}>
                        {barChart}
                    </svg>
                </section>
            </div>
        )
    }
};

export default ScalingPanel;
