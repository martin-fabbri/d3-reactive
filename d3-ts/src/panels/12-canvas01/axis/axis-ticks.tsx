import * as React from 'react'

import styled, {theme} from '../theme';

import {Orientation} from '../utils/axis';

import {scaleLinear} from 'd3-scale'

interface IProps {
    className?: string;
    height: number;
    scale?: string;
    style?: React.CSSProperties;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeOuter?: number;
    tickOffset?: number;
    tickPadding?: number;
    orientation: Orientation;
    width: number;
}

interface IDefaultProps {
    scale: string;
    style: React.CSSProperties;
    tickLabelAngle: number;
    tickSize: number;
    tickSizeOuter: number;
    tickOffset: number;
    tickPadding: number;
}

type PropsWithDefaults = IProps & IDefaultProps

const {Left, Right, Bottom, Top} = Orientation

class AxisTicks extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        scale: 'linear',
        style: {},
        tickLabelAngle: 0,
        tickOffset: 7,
        tickPadding: 2,
        tickSize: 8,
        tickSizeOuter: 0,
    };

    public render() {
        const {width, height, orientation, className, tickOffset} = this.props as PropsWithDefaults;

        // orientation === top
        let x = 0;
        let y = 0;

        switch (orientation) {
            case Bottom: {
                y = height;
                break;
            }
            case Left: {
                break;
            }
            case Right: {
                x = width;
                break;
            }
        }
        
        // tslint:disable-next-line
        console.log('Ticks', orientation, x, y);

        const values: number[] = [0, 5, 10, 15, 20];

        const pathProps = this.getTickLineProps();
        const labelProps = this.getTickLabelProps();
        const translateFn = this.getTickContainerProps();
        const linear = scaleLinear()
            .range([0, width])
            .domain([0, 20]);

        const ticks = values.map((value: number, i: number) => {
            const pos = linear(value);

            return (
                <g key={i} {...translateFn(pos, tickOffset)}>
                    <line {...pathProps}
                          className={className}
                    />
                    <text {...labelProps}>{value}</text>
                </g>
            );
        });

        return (
            <g
                transform={`translate(${x}, ${y})`}
                className={className}>
                {ticks}
            </g>
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
            (pos: number, offset: number) => ({transform: `translate(${-offset}, ${pos})`}) :
            (pos: number, offset: number) => ({transform: `translate(${pos}, ${offset})`})
    }

    private getTickLineProps() {
        const {tickSize} = this.props as PropsWithDefaults;
        const isVertical = this.isAxisVertical();
        const tickXAttr = isVertical ? 'y' : 'x';
        const tickYAttr = isVertical ? 'x' : 'y';
        const wrap = this.areTicksWrapped() ? -1 : 1;
        return {
            [`${tickXAttr}1`]: 0,
            [`${tickXAttr}2`]: 0,
            [`${tickYAttr}1`]: -wrap * tickSize,
            [`${tickYAttr}2`]: wrap * tickSize
        };
    }

    private getTickLabelProps() {
        const {orientation, tickLabelAngle, tickSizeOuter, tickPadding} = this.props as PropsWithDefaults;

        let textAnchor = 'middle';
        if (orientation === Left || (orientation === Bottom) && tickLabelAngle) {
            textAnchor = 'end';
        } else if (orientation === Right || (orientation === Top) && tickLabelAngle) {
            textAnchor = 'start';
        }

        const isVertical = this.isAxisVertical();
        const wrap = this.areTicksWrapped() ? -1 : 1;

        const labelOffset = wrap * (tickSizeOuter + tickPadding);

        const translate = (isVertical ? `translate(${labelOffset}, 0)` : `translate(${labelOffset}, 0)`);
        const rotate = (tickLabelAngle ? ` rotate(${tickLabelAngle}, 0)` : '');
        const transform = translate + rotate;

        const dy = (orientation === Top || tickLabelAngle) ? '0' : (orientation === Bottom ? '0.72em' : '0.32em');
        return {
            dy,
            textAnchor,
            transform
        }
    }
};

const StyledAxisTicks = styled(AxisTicks)`
    line {
        stroke: ${theme.xyPlotAxisLineColor};
    }
    text {
        fill: ${theme.xyPlotAxisFontColor};
        font-size: ${theme.xyPlotAxisFontSize};
    }
`;

export default StyledAxisTicks;