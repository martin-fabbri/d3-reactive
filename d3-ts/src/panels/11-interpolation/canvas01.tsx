import * as React from 'react';

import {curveCardinal, line} from 'd3-shape';

interface IDatum {
    x: number;
    y: number;
}

const dataset: IDatum[] = [{x:5, y:5},{x:10, y:15},{x:20, y:7},{x:30, y:18},{x:40, y:10}];

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

        return l.call(this, dataset);
    }
};

export default InterpolationPanel;
