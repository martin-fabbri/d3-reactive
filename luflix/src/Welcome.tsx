import * as React from 'react';

export interface IProps {
    greeting: string;
}

class Welcome extends React.Component<IProps> {

    public render() {
        const {greeting} = this.props;

        return (
            <h1>{greeting}</h1>
        );
    }
}

export default Welcome;