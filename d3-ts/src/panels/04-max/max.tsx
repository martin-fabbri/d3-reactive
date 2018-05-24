import * as React from 'react';

import {max, scaleLinear} from "d3";

const dataset = [5, 10, 15, 20, 25, 34, 22, 9, 42, 47, 11, 64, 55];
const height = 300;
const width = 400;
const barWidth = 20;
const barPadding = 5;
const chartPaddingTop = 1.1;
const barFillColor = 'teal';

const defaultMax = 100;
const maxValueDomain = max(dataset);

const yScale = scaleLinear()
    .domain([0, maxValueDomain ? maxValueDomain * chartPaddingTop : defaultMax])
    .range([0, height]);

class MaxPanel extends React.Component {
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
                <h3>D3 Max</h3>
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

export default MaxPanel;