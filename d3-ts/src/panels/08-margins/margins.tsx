import * as React from 'react';

import {max, scaleBand, scaleLinear, scaleQuantize} from "d3";

const dataset = [5, 10, 15, 20, 59, 1, 25, 34, 22, 9, 47, 11, 64, 55];
const keys = Array.from(dataset.keys());

const margin = { bottom: 30, left: 20, top: 0, right: 0};
const transformMargin = `translate(${margin.left}, ${margin.top})`;
const height = 300 - margin.top - margin.bottom;
const width = 400 - margin.left - margin.right;
const chartPaddingTop = 1.1;
const defaultMax = 100;
const maxValueDomain = max(dataset);


const xScale = scaleBand()
    .domain(keys.map(k => k.toString()))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.2);

const yScale = scaleLinear()
    .domain([0, maxValueDomain ? maxValueDomain * chartPaddingTop : defaultMax])
    .range([0, height]);

const colorScale = scaleQuantize()
    .domain([0, dataset.length])
    // @ts-ignore
    .range(['yellow', 'orange', 'purple']);

class MarginsPanel extends React.Component {
    public render() {
        const barChart = dataset.map((d, i) =>
            <rect
                key={i}
                x={xScale(i.toString())}
                y={height - yScale(d)}
                width={xScale.bandwidth()}
                fill={colorScale(i)}
                height={yScale(d)}
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>Margins</h3>
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
                            {barChart}
                        </g>

                    </svg>
                </section>
            </div>
        )
    }
};

export default MarginsPanel;