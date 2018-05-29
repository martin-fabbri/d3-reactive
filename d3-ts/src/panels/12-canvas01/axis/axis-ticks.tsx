import * as React from 'react'

import styled, {theme} from '../theme';

import {Orientation} from '../utils/axis';

import {scaleLinear} from 'd3-scale'

interface IProps {
    className?: string;
    height: number;
    scale?: string;
    style?: React.CSSProperties;
    tickSize?: number;
    orientation: Orientation;
    width: number;
}

interface IDefaultProps {
    scale: string;
    style: React.CSSProperties;
    tickSize: number;
}

type PropsWithDefaults = IProps & IDefaultProps

const {Left, Right, Top} = Orientation

class AxisTicks extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        scale: 'linear',
        style: {},
        tickSize: 8,
    };

    public render() {
        const {width, height, orientation, className} = this.props as PropsWithDefaults

        const x = orientation === Left ? width : 0
        const y = orientation === Top ? height : 0

        const values: number[] = [0, 5, 10, 15, 20];

        const pathProps = this.getTickLineProps();
        const translateFn = this.getTickContainerProps();
        const linear = scaleLinear()
            .range([0, width])
            .domain([0, 20]);

        const ticks = values.map((v: number, i: number) => {
            const pos = linear(v);

            return (
                <g key={i} {...translateFn(pos)}>
                    <line {...pathProps}
                          className={className}
                    />
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
            (pos: number) => ({transform: `translate(0, ${pos})`}) :
            (pos: number) => ({transform: `translate(${pos}, 0)`})
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

};

const StyledAxisTicks = styled(AxisTicks)`
    stroke: ${theme.xyPlotAxisLineColor};
`;

export default StyledAxisTicks;