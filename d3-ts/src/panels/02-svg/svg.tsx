import * as React from 'react';

import {select} from "d3";

const dataset = [5, 10, 15, 20, 25];
const height = 300;
const heightToDataFactor = 8;
const width = 400;
const barWidth = 20;
const barPadding = 5;
const barFillColor = 'teal';


class SvgPanel extends React.Component {

    public componentDidMount(): void {

        const svg = select('#d3-container').append('svg');

        svg
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (barWidth + barPadding) )
            .attr('y', d => height - d  * heightToDataFactor)
            .attr('width', barWidth)
            .attr('fill', barFillColor )
            .attr('height', d => d * heightToDataFactor);
    }

    public render() {
        // const barChart = dataset.map((d, i) =>
        //     <div
        //         key={i}
        //         className="inline-block mt-4 bg-teal mr-1 w-6 h-8"
        //         style={({height: `${d * 10}px`})}
        //     />
        // );
        return (
            <div className="mt-4 mb-4">
                <h3>SVG Basics</h3>
                <section
                    id='d3-container'
                    className="bg-grey-light"
                    style={({height, width})}
                >
                    {/*{barChart}*/}
                </section>
            </div>
        )
    }
};

export default SvgPanel;
