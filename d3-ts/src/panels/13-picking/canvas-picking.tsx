import * as React from 'react';

import {range} from 'd3';

import CanvasFrame from './canvas/canvas-frame';

export interface IElementValue {
    value: number
}

class CanvasPickingPanel extends React.Component {

    public render() {
        const data: IElementValue[] = [];
        range(5000).forEach(el => data.push({value: el}));

        // tslint:disable-next-line
        console.log('this.data', data);
        const width = 750;
        const height = 400;



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
