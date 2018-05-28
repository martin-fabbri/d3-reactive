import * as React from 'react';


export interface IProps {
    svgClassName?: string;
    desc?: string;
    width?: number;
    height?: number;
    responsive?: number;
    title?: string
    children?: JSX.Element[] | JSX.Element;
    // TODO margins?
}

const Test = () => <div>Testing</div>;

class PlotContainer extends React.Component<IProps> {
    public static defaultProps = {
        responsive: true
    }

    public render() {
        const {svgClassName, width, height, responsive, title} = this.props;
        const svgProps: React.SVGProps<SVGSVGElement> = {
            height,
            role: 'img',
            viewBox: responsive ? `0 0 ${width} ${height}` : undefined,
            width
        };
        const children = this.getChildren(this.props);
        // TODO if margins -> include initial translation
        // const translate = `translate(${margins.left}, ${margins.top})`;

        return (
            <div className={svgClassName}>
                <svg {...svgProps}>
                    {title ? <title>{title}</title> : null}
                    {/*TODO if margins -> <g transform={translate}>*/}
                        {children}
                    {/*TODO if margins -> </g>*/}

                </svg>
                <Test/>
            </div>
        );
    }

    private getChildren(props: IProps) {
        return props.children;
    }
}

export default PlotContainer;