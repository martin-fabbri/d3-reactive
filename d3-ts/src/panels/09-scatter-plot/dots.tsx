import * as React from 'react';

export interface IProps {
    cx: number;
    cy: number;
    r?: number;
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
    strokeWidth?: string | number;
}

export interface IState {
    isSelected: boolean;
}

interface IDefaultProps {
    r: number;
    fill: string;
    fillOpacity: number;
    stroke: string;
    strokeWidth: string | number;
}

type PropsWithDefaults = IProps & IDefaultProps;

const defaultState: IState = {
    isSelected: false
};

const seletecProps = {
    fillOpacity: 0.75,
    strokeWidth: '2px'
}

class Dot extends React.Component<IProps, IState> {

    public static defaultProps: IDefaultProps = {
        fill: 'purple',
        fillOpacity: 0.5,
        r: 10,
        stroke: 'black',
        strokeWidth: '1px'
    };

    constructor(props: IProps) {
        super(props);
        this.state = defaultState;
    }

    public render() {
        const {cx, cy, r, fill, fillOpacity, stroke, strokeWidth} = this.props as PropsWithDefaults;
        const {isSelected} = this.state;
        return (
            <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={fill}
                fillOpacity={isSelected ? seletecProps.fillOpacity : fillOpacity}
                stroke={stroke}
                strokeWidth={isSelected ? seletecProps.strokeWidth : strokeWidth}
                onClick={this.handleOnClick}
            />
        )
    }

    private handleOnClick = () => {
        this.setState(prevState => ({isSelected: !prevState.isSelected}))
    }
};

export default Dot;