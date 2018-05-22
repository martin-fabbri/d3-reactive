import * as React from 'react';

import Welcome from './Welcome'


import './App.css';


// import {select} from d3;
export interface IProps {
    data?: number[];
    width?: number;
    height?: number;
}

export interface IState {
    svgRef?: SVGElement | null;
}

class App extends React.Component<IProps, IState> {

    // private svgRef?: SVGElement | null;

    public componentWillMount() {
        this.drawChart(this.props.data!);
    }

    public componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.data !== this.props.data) {
            this.drawChart(nextProps.data!);

        }
    }

    public render() {
        // const {width, height} = this.props;
        return (
            <Welcome/>
                /*<svg width={width} height={height} ref={ref => (this.svgRef = ref)}></svg>*/



        );
    }

    private drawChart(data: number[]) {
        // const svg = select(this.svgRef!);
    }

}


// private svgRef?: SVGElement | null;
//
// public componentDidMount() {
//     this.drawChart(this.props.data);
// }
//
// public componentWillReceiveProps(nextProps: Props) {
//     if (nextProps.data !== this.props.data) {
//         this.drawChart(nextProps.data);
//     }
// }
//
// private drawChart(data: number[]) {
//     const svg = select(this.svgRef!);
//     /* ...Draw the chart with D3... */
// }
//
// public render() {
//     const { width, height } = this.props;
//
//     return (
//         <svg width={width} height={height} ref={ref => (this.svgRef = ref)} />
//     );
// }

export default App;
