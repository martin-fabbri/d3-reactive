import * as React from 'react';


export interface IMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

export interface IProps {
    barClassName?: string;
    data: number[];
    margins?: IMargins;
    height?: number;
    padding?: number;
    width?: number;
}

// export interface BarChartDatum {
//     color: string;
//     value: number;
//     id: string;
// }

interface IDefaultProps {
    height: number;
    padding: number;
    width: number;
    margins: IMargins;
}

type PropsWithDefaults = IProps & IDefaultProps;

class Bar extends React.Component<IProps> {
    public static defaultProps: IDefaultProps = {
        height: 10,
        margins: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        },
        padding: 5,
        width: 10,
    }

    public render() {
        const {data, width, height, padding} = this.props as PropsWithDefaults;

        return (
            <g>
                {
                    data.map((bar, i) => {
                        const svgRectProps: React.SVGProps<SVGRectElement> = {
                            fill: 'red',
                            height: height * (i + 1),
                            width,
                            x: (i + 1) * (width + padding),
                        };
                        return (
                            <rect {...svgRectProps} key={i}/>
                        )
                    })
                }
            </g>
        );
    }
}

export default Bar;