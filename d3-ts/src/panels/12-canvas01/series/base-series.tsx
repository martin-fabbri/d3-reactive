import * as React from 'react';
import {IDatum} from '../utils/scales';
// type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

export interface IProps {
    className?: string;
    xDomain: [number, number];
    yDomain: [number, number];
    style?: React.CSSProperties;
    width: number;
    height: number;
    data: IDatum[];
    // onValueMouseOver?: MouseEventHandler;
    // onValueMouseOut?: EventHandler;
    // onValueClick?: EventHandler;
    // onValueRightClick?: EventHandler;
    // onSeriesMouseOver?: EventHandler;
    // onSeriesMouseOut?: EventHandler;
    // onSeriesClick?: EventHandler;
    // onSeriesRightClick?: EventHandler;
    // onNearestX?: EventHandler;
    // onNearestXY?: EventHandler;
    // animation?: any;
    stack?: boolean;
    strokeDasharray?: string;
    strokeStyle?: string;
    strokeWidth?: string;
    xRange: [number, number];
    yRange: [number, number];
    curve?: string; // smooth
    marginLeft?: number;
    marginTop?: number;
    y0?: [number, number];
}

export interface IDefaultProps {
    className: string;
    marginLeft: number;
    marginTop: number;
    stack: boolean;
    style: React.CSSProperties;
    strokeStyle: string;
}

export type PropsWithDefaults = IProps & IDefaultProps

class BaseSeries<P extends IProps> extends React.Component<P> {

    static get requireSVG() {
        return true;
    }

    public static defaultProps: IDefaultProps = {
        className: '',
        marginLeft: 0,
        marginTop: 0,
        stack: false,
        strokeStyle: 'solid',
        style: {},
    };

    // handleOnValueMouseOver = (event: ?) => {
    // }
};

export default BaseSeries;