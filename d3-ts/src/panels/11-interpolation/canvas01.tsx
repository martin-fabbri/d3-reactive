import * as React from 'react';

import {curveCardinal, line} from 'd3-shape';

interface IDatum {
    x: number;
    y: number;
}

const dataset: IDatum[] = [{x:0, y:0},{x:1, y:1},{x:2, y:2},{x:3, y:3},{x:4, y:4}];

const margin = { bottom: 30, left: 20, top: 0, right: 0};
const height = 300 - margin.top - margin.bottom;
const width = 400 - margin.left - margin.right;

class InterpolationPanel extends React.Component {
    public render() {
        return (
            <div className="mt-4 mb-4">
                <h3>Interpolations</h3>
                <section
                    id='d3-container'
                    // className="bg-grey-light"
                    style={({height, width})}
                >
                    <svg
                        className="bg-grey-light"
                        width={width + margin.left + margin.right}
                        height={height + margin.top + margin.bottom}>
                        <path fill='none' stroke='black' strokeWidth='4px' d={this.plotLine()}/>
                    </svg>
                </section>
            </div>
        )
    }

    private plotLine() {
        const l =  line<IDatum>()
            .x(d => d.x)
            .y(d => d.y)
            .curve(curveCardinal);
        // tslint:disable-next-line
        console.log(l.call(this, dataset));
        return l.call(this, dataset);
    }
};

export default InterpolationPanel;
