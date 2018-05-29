import * as React from 'react'

import styled from '../theme';
import BaseSeries, {PropsWithDefaults} from './base-series';

const strokeStyles = {
    dashed: '6, 2',
    solid: null
};

class LineSeries extends BaseSeries {

    public render() {
        const {className, data} = this.props as PropsWithDefaults;
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
            strokeDasharray,
            strokeStyle,
            strokeWidth,
            style
        } = this.props as PropsWithDefaults;

        const x = this._getAttributeFunctor('x');
        const y = this._getAttributeFunctor('y');
        const stroke =
            this._getAttributeValue('stroke') || this._getAttributeValue('color');
        const newOpacity = this._getAttributeValue('opacity');
        const opacity = Number.isFinite(newOpacity) ? newOpacity : DEFAULT_OPACITY;
        const getNull = this.props.nullAccessor || this.props.getNull;
        const d = this._renderLine(data, x, y, curve, getNull);


        return (
            <path
                d={d}
                className={className}
                transform={`translate(${marginLeft},${marginTop})`}
                // onMouseOver={this.onSeriesMouseOverHandler}
                // onMouseOut={this.onSeriesMouseOutHandler}
                // onClick={this.onSeriesClickHandler}
                // onContextMenu={this.onSeriesRightClickHandler}
                style={{
                    opacity,
                    stroke,
                    strokeDasharray: strokeStyles[strokeStyle] || strokeDasharray,
                    strokeWidth,
                    ...style
                }}
            />
        );
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