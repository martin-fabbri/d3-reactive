import * as React from 'react';

import {max, scaleBand, scaleLinear} from "d3";

const dataset = [5, 10, 15, 20, 59, 1, 25, 34, 22, 9, 47, 11, 64, 55];
const height = 300;
const width = 400;
const chartPaddingTop = 1.1;

const defaultMax = 100;
const maxValueDomain = max(dataset);

const xScale = scaleBand()
    .domain(dataset.map(d => d.toString()))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.2);

const yScale = scaleLinear()
    .domain([0, maxValueDomain ? maxValueDomain * chartPaddingTop : defaultMax])
    .range([0, height]);

const colorScale = scaleLinear()
    .domain([0, maxValueDomain ? maxValueDomain * chartPaddingTop : defaultMax])
    // @ts-ignore
    .range(['orange', 'purple']);

class ColorScalesPanel extends React.Component {
    public render() {
        const barChart = dataset.map((d, i) =>
            <rect
                key={i}
                x={xScale(d.toString())}
                y={height - yScale(d)}
                width={xScale.bandwidth()}
                fill={colorScale(d)}
                height={yScale(d)}
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>D3 Color Scales</h3>
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

export default ColorScalesPanel;