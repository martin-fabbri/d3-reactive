import * as React from 'react'

import styled from '../theme';
import BaseSeries, {PropsWithDefaults} from './base-series';

import {getScaleFunc, IDatum} from '../utils/scales';

import {curveCardinal, line} from 'd3-shape';

// const strokeStyles = {
//     dashed: '6, 2',
//     solid: null
// };

class LineSeries extends BaseSeries {

    public render() {
        const {className, data, xDomain, xRange, yDomain, yRange} = this.props as PropsWithDefaults;
        // const {animation} = this.props;

        if (!data) {
            return null;
        }

        // if (animation) {
        //     return (
        //         <Animation {...this.props} animatedProps={ANIMATED_SERIES_PROPS}>
        //             <LineSeries {...this.props} animation={null} />
        //         </Animation>
        //     );
        // }

        const {
            curve,
            marginLeft,
            marginTop,
            // strokeDasharray,
            // strokeStyle,
            // strokeWidth,
            // style
        } = this.props as PropsWithDefaults;

        const x = getScaleFunc({
            data: data.map(elem => elem.x),
            domain: xDomain,
            kind: 'linear',
            range: xRange
        });

        const y = getScaleFunc({
            data: data.map(elem => elem.y),
            domain: yDomain,
            kind: 'linear',
            range: yRange
        });

        // const stroke =
        //     this._getAttributeValue('stroke') || this._getAttributeValue('color');
        // const newOpacity = this._getAttributeValue('opacity');
        // const opacity = Number.isFinite(newOpacity) ? newOpacity : DEFAULT_OPACITY;
        // const getNull = this.props.nullAccessor || this.props.getNull;

        return (
            <path
                d={this.renderLine(data, x, y, curve)}
                className={className}
                transform={`translate(${marginLeft},${marginTop})`}
                // onMouseOver={this.onSeriesMouseOverHandler}
                // onMouseOut={this.onSeriesMouseOutHandler}
                // onClick={this.onSeriesClickHandler}
                // onContextMenu={this.onSeriesRightClickHandler}
                // style={{
                //     opacity,
                //     stroke,
                //     strokeDasharray: strokeStyles[strokeStyle] || strokeDasharray,
                //     strokeWidth,
                //     ...style
                // }}
            />
        );
    }

    private renderLine(data: IDatum[], x: any, y: any, curve?: string): any {
        const l =  line<IDatum>()
            .x(d => x(d.x))
            .y(d => y(d.y))
            .curve(curveCardinal);
        return l.call(this, data);
    }
};

const StyledLineSeries = styled(LineSeries)`
    fill: none;
    stroke: #000;
    stroke-width: 2px;    
    path {
      pointer-events: all;
    }
`;

export default StyledLineSeries;