import * as React from 'react'

import {scaleLinear} from 'd3';
import {IDatum} from '../canvas-picking';
import {Optional} from '../global-types';
import styled from '../theme';

export interface IProps {
    data: IDatum[];
    innerHeight: number;
    innerWidth: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    style?: React.CSSProperties;

}

interface IDefaultProps {
    children: any | null;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    style: React.CSSProperties;
    pixelRatio: number;
}

type PropsWithDefaults = IProps & IDefaultProps;


const mapColorToNode = {};

/**
 * Todo ...
 * @param hidden Render a hidden canvas layer
 */
function drawChildren (newProps: PropsWithDefaults,
    oldProps: Optional<PropsWithDefaults>,
    ctx: CanvasRenderingContext2D,
    hidden = false) {
    const {data, innerHeight, innerWidth} = newProps;

    const x = scaleLinear()
        .domain([2, 8])
        .range([0, innerWidth]);

    const y = scaleLinear()
        .domain([2, 8])
        .range([innerHeight, 0]);

    // clear the canvas
    ctx.clearRect(0,0, innerWidth, innerHeight);

    // draw children “components”
    data.map((d, i) => {
        ctx.beginPath();
        ctx.arc(x(d.x), y(d.y), Math.abs(d.r), 0, 2 * Math.PI);
        ctx.fillStyle = hidden ? `${getColor(d).next()}` : `steelblue`;
        ctx.fill();
        ctx.strokeStyle = `teal`;
        ctx.stroke();
    });
}

function* getColor(d: IDatum) {
    let i = 0;
    while(true) {
        mapColorToNode[i + 1] = d;
        yield i++;
    }
}

class CanvasFrame extends React.Component<IProps> {
    public static defaultProps: IDefaultProps = {
        children: undefined,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        pixelRatio: window && window.devicePixelRatio || 1,
        style: {},
    };

    private readonly mainCanvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
    private readonly hiddenCanvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();

    public componentDidMount() {
        const mainCtx = this.mainCanvasRef.current!.getContext('2d');
        const hiddenCanvasCtx = this.hiddenCanvasRef.current!.getContext('2d');
        if (!mainCtx || !hiddenCanvasCtx) {
            return;
        }

        this.setState({ctx: mainCtx});
        const {pixelRatio} = this.props as PropsWithDefaults;
        mainCtx.scale(pixelRatio, pixelRatio);
        drawChildren(this.props as PropsWithDefaults, undefined, mainCtx);
        drawChildren(this.props as PropsWithDefaults, undefined, hiddenCanvasCtx, true);
    }

    public componentDidUpdate() {
        return;
    }

    public render() {
        const {
            innerHeight,
            innerWidth,
            marginBottom,
            marginLeft,
            marginRight,
            marginTop,
            pixelRatio
        } = this.props as PropsWithDefaults;

        const height = innerHeight + marginTop + marginBottom;
        const width = innerWidth + marginLeft + marginRight;

        return (
            <div style={{left: 0, top: 0}}>
                <canvas
                    height={height * pixelRatio}
                    width={width * pixelRatio}
                    style={{
                        height: `${height}px`,
                        width: `${width}px`
                    }}
                    ref={this.mainCanvasRef}
                    onMouseMove={this.log}
                />

                <canvas
                    height={height * pixelRatio}
                    width={width * pixelRatio}
                    style={{
                        display: 'none',
                        height: `${height}px`,
                        width: `${width}px`,
                    }}
                    ref={this.hiddenCanvasRef}/>
            </div>
        );
    }

    private log(ev: React.MouseEvent<HTMLCanvasElement>) {
        // tslint:disable-next-line
        console.log('x ... ', ev.clientX);

        // tslint:disable-next-line
        console.log('sx ... ', ev.clientY);
    }

};

const StyledCanvasFrame = styled(CanvasFrame)`
  canvas {
    pointer-events: none;
  }

  .rv-xy-canvas {
    pointer-events: none;
    position: absolute;
  }
`;

export default StyledCanvasFrame;