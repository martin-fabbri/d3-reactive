import * as React from 'react';

// import {select} from "d3";

const dataset = [5, 10, 15, 20, 25];

class BasicsPanel extends React.Component {

    // public componentDidMount(): void {
    //     select('#d3-container')
    //         .selectAll('div')
    //         .data(dataset)
    //         .enter()
    //         .append('div')
    //         .attr('class', 'inline-block mt-4 bg-teal mr-1 w-6')
    //         .style('height', d => `${d * 10}px` );
    // }

    public render() {
        // const barHeightStyle = (d: number)=> {height: `${d * 10}px`};

        const barChart = dataset.map((d, i) =>
            <div
                key={i}
                className="inline-block mt-4 bg-teal mr-1 w-6 h-8"
                style={({height: `${d * 10}px`})}
            />
        );
        return (
            <div className="mt-4 mb-4">
                <h3>Basics</h3>
                <section id="d3-container">
                    {barChart}
                </section>
            </div>
        )
    }
};

export default BasicsPanel;
