import * as React from 'react';

export interface IProps {
    greeting: string;
}

class Welcome extends React.Component<IProps> {

    public render() {
        return (
            <div>{this.props.greeting}</div>
        );
    }
}

export default Welcome;