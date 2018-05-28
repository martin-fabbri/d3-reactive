import * as React from 'react'

import styled from './theme';

interface IProps {
    className?: string;
    style?: React.CSSProperties;
}

interface IDefaultProps {
    style: React.CSSProperties;
}

// type PropsWithDefaults = IProps & IDefaultProps

class XyFrame extends React.Component<IProps> {

    public static defaultProps: IDefaultProps = {
        style: {},
    };

    public render() {
        return (
            <div/>
        );
    }
};

const StyledXyFrame = styled(XyFrame)`
    
`;

export default StyledXyFrame;