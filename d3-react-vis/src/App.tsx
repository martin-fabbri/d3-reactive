import * as React from 'react';
import './App.css';

import Bar from "./clientProcess/reactComponents/fj-plots/Bar";
import PlotContainer from "./clientProcess/reactComponents/fj-plots/PlotContainer";
import logo from './logo.svg';

class App extends React.Component {
    public render() {
        const data: number[] = Array.apply(null, {length: 10}).map((i: number) => (i));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>

                <PlotContainer>
                    <Bar data={data}/>
                </PlotContainer>

            </div>
        );
    }
}

export default App;
