import * as React from 'react'

import {extent, interpolateSpectral, scaleSequential} from 'd3';

import {IElementValue} from '../canvas-picking';
import {Optional} from '../global-types';
import styled from '../theme';

export interface IProps {
    data: IElementValue[];
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

interface  IRectProps {
    ctx: CanvasRenderingContext2D,
    fillStyle: string | CanvasGradient | CanvasPattern;
    x: number,
    y: number,
    width: number,
    height: number
};

const rect = (props: IRectProps) => {
    const {ctx, x, y, width, height, fillStyle} = props;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
};

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

    private readonly canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();

    public componentDidMount() {
        const ctx = this.canvasRef.current!.getContext('2d');
        if (!ctx) {
            return;
        }

        this.setState({ctx});
        const {pixelRatio} = this.props as PropsWithDefaults;
        ctx.scale(pixelRatio, pixelRatio);
        this.drawChildren(this.props as PropsWithDefaults, undefined, ctx);
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
                    className="rv-xy-canvas-element"
                    height={height * pixelRatio}
                    width={width * pixelRatio}
                    style={{
                        height: `${height}px`,
                        width: `${width}px`
                    }}
                    ref={this.canvasRef}/>
            </div>
        );
    }

    private drawChildren(newProps: PropsWithDefaults,
                         oldProps: Optional<PropsWithDefaults>,
                         ctx: CanvasRenderingContext2D) {
        const {data, innerHeight, innerWidth} = newProps;

        const groupSpacing = 4;
        const cellSpacing = 2;
        // const offsetTop = innerHeight / 5;
        const cellSize = Math.floor((innerWidth - 11 * groupSpacing) / 100) - cellSpacing;

        const extDomain = extent<IElementValue, number>(data,
            d => (d && d.value && typeof d.value === 'number' ? d.value : 0));

        const dom: [number, number] = typeof extDomain[0] === undefined || typeof extDomain[1] === undefined ?
            [100, 100] : [extDomain[0]!, extDomain[1]!];

        const colourScale = scaleSequential(interpolateSpectral)
            .domain(dom);

        // clear the canvas
        ctx.clearRect(0,0, innerWidth, innerHeight);

        // draw children “components”
        data.map((d, i) => {
            const x0 = Math.floor(i / 100) % 10;
            const x1 = Math.floor(i % 10);
            const x = groupSpacing * x0 + (cellSpacing + cellSize) * (x1 + x0 * 10);

            const y0 = Math.floor(i / 1000);
            const y1 = Math.floor(i % 100 / 10);
            const y = groupSpacing * y0 + (cellSpacing + cellSize) * (y1 + y0 * 10);

            const height = 4.5;
            const width = 4.5;

            rect({ctx, x, y, height, width, fillStyle: colourScale(d.value)});
        });
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