import * as React from 'react'

import AxisLine from './axis-line';
import AxisTicks from './axis-ticks';
import AxisTitle from './axis-title';

import styled from '../theme';

import {Orientation, ticksTotalFromSize, TitlePosition} from '../utils/axis';

export interface IProps {
    className?: string;
    style?: React.CSSProperties;
    title?: string;

    height: number;
    width: number;

    top?: number;
    left?: number;

    hideTicks?: boolean;
    hideLine?: boolean;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeInner?: number;
    tickSizeOuter?: number;
    tickPadding?: number;
    tickValues?: any[];
    // tickFormat: func;
    tickTotal?: number;

    position?: TitlePosition;
    orientation?: Orientation;

    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;

    attr?: string;
    attrAxis?: string;
}

export interface IDefaultProps {
    className: string;
    style: React.CSSProperties;
    hideTicks: boolean;
    hideLine: boolean;

    top: number;
    left: number;

    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    innerWidth: number;
    innerHeight: number;

    orientation: Orientation;
}

export type PropsWithDefaults = IProps & IDefaultProps

const {Left, Top, Bottom} = Orientation;

class Axis extends React.Component<IProps> {
    public static defaultProps: IDefaultProps = {
        className: '',
        hideLine: false,
        hideTicks: false,
        innerHeight: 0,
        innerWidth: 0,
        left:0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        orientation: Bottom,
        style: {},
        top: 0
    };

    public render() {
        const {className, style} = this.props as PropsWithDefaults;
        const {hideLine, hideTicks} = this.props as PropsWithDefaults;
        const {height, width, orientation} = this.props as PropsWithDefaults;
        const {title, position} = this.props as PropsWithDefaults;
        const props = {
            ...this.getDefaultAxisProps(),
            ...this.props as PropsWithDefaults
        };
        const {left, top} = this.props as PropsWithDefaults;

        // tslint:disable-next-line
        console.log('Orientation', orientation);

        return (
            <g
                transform={`translate(${left},${top})`}
                className={className}
                style={style}>
                {!hideLine && (<AxisLine
                    height={height}
                    width={width}
                    orientation={orientation}
                    style={style}
                />)}
                {!hideTicks && (<AxisTicks
                    {...props} style={style}
                />)}
                {title ?
                    <AxisTitle
                        position={position}
                        title={title}
                        height={height}
                        width={width}
                        style={style}
                        orientation={orientation}/> :
                    null}
            </g>
        );
    }

    private getDefaultAxisProps() {
        const {
            innerWidth,
            innerHeight,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            orientation
        } = this.props as PropsWithDefaults;

        if (orientation === Bottom) {
            return {
                height: marginBottom,
                left: marginLeft,
                tickTotal: ticksTotalFromSize(innerWidth),
                top: innerHeight + marginTop,
                width: innerWidth,
            };
        } else if (orientation === Top) {
            return {
                height: marginTop,
                left: marginLeft,
                tickTotal: ticksTotalFromSize(innerWidth),
                top: 0,
                width: innerWidth,
            };
        } else if (orientation === Left) {
            return {
                height: innerHeight,
                left: 0,
                tickTotal: ticksTotalFromSize(innerHeight),
                top: marginTop,
                width: marginLeft,
            };
        }
        return {
            height: innerHeight,
            left: marginLeft + innerWidth,
            tickTotal: ticksTotalFromSize(innerHeight),
            top: marginTop,
            width: marginRight,
        };
    }
}

const StyledAxis = styled(Axis)`
    
`;

export default StyledAxis;