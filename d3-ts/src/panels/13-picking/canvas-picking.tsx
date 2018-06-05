import * as React from 'react';

import {randomNormal, range} from 'd3';

import CanvasFrame from './canvas/canvas-frame';

export interface IDatum {
    x: number;
    y: number;
    r: number;
}

class CanvasPickingPanel extends React.Component {

    public render() {
        const data: IDatum[] = [];
        range(20000).forEach(el => data.push({
            r: randomNormal(3, 1)(),
            x: randomNormal(5, 3)(),
            y: randomNormal(5, 3)()
        }));

        // tslint:disable-next-line
        console.log('this.data', data);
        const width = 1400;
        const height = 750;

        return (
            <CanvasFrame
                data={data}
                innerWidth={width}
                innerHeight={height}
            />
        )
    }
};

export default CanvasPickingPanel;
