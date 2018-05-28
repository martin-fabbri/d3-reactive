import * as React from 'react'

import {Orientation} from '../utils/axis';
import Axis, {IProps} from './axis';


interface IDefaultProps {
    attr: string;
    attrAxis: string;
    orientation: Orientation;
}

const {Bottom} = Orientation;

class XAxis extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        attr: 'x',
        attrAxis: 'y',
        orientation: Bottom,
    };

    public render() {
        return (
            <Axis {...this.props}/>
        );
    }
}

export default XAxis;