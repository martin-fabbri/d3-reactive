import * as React from 'react'

import styled, {theme} from '../theme';

import {Orientation} from '../utils/axis';

interface IProps {
    className?: string
    height: number
    style?: React.CSSProperties
    tickSize?: number
    orientation: Orientation
    width: number
}

interface IDefaultProps {
    style: React.CSSProperties
    tickSize: number
}

type PropsWithDefaults = IProps & IDefaultProps

const {Left, Right, Top} = Orientation

class AxisTicks extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        style: {},
        tickSize: 2
    };

    public render() {

        const {height, style, orientation, width, className} = this.props as PropsWithDefaults;

        // default orientation bottom
        let lineProps = {
            x1: 0,
            x2: width,
            y1: 0,
            y2: 0,
        };

        switch(orientation) {
            case AxisLineOrientation.Left: {
                lineProps = {
                    x1: width,
                    x2: width,
                    y1: 0,
                    y2: height
                };
                break;
            }
            case AxisLineOrientation.Right: {
                lineProps = {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: height
                };
                break;
            }
            case AxisLineOrientation.Top: {
                lineProps = {
                    x1: 0,
                    x2: width,
                    y1: height,
                    y2: height
                };
                break;
            }
        }

        return (
            <line {...lineProps} style={style} className={className}/>
        )
    }



    private isAxisVertical() {
        const {orientation} = this.props as PropsWithDefaults
        return orientation === Left || orientation === Right
    }

    private areTicksWrapped() {
        const {orientation} = this.props as PropsWithDefaults
        return orientation === Left || orientation === Right
    }

    private getTickContainerProps() {
        return this.isAxisVertical() ?
            (pos: number) => ({transform: `translate(0, ${pos})`}) :
            (pos: number) => ({transform: `translate(${pos}, 0)`})
    }

    // private getTickLineProps() {
    //     const {
    //         tickSize,
    //         tickSizeOuter = tickSize,
    //         tickSizeInner = tickSize} = this.props;
    //     const isVertical = this._isAxisVertical();
    //     const tickXAttr = isVertical ? 'y' : 'x';
    //     const tickYAttr = isVertical ? 'x' : 'y';
    //     const wrap = this._areTicksWrapped() ? -1 : 1;
    //     return {
    //         [`${tickXAttr}1`]: 0,
    //         [`${tickXAttr}2`]: 0,
    //         [`${tickYAttr}1`]: -wrap * tickSizeInner,
    //         [`${tickYAttr}2`]: wrap * tickSizeOuter
    //     };
    // }

};

const StyledAxisLine = styled(AxisLine)`
    fill: none;
    stroke-width: 2px;
    stroke: ${theme.xyPlotAxisLineColor};
`;

export default StyledAxisLine;