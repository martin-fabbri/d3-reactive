import * as React from 'react';

import { Tab, TabId, Tabs } from "@blueprintjs/core";

import BasicsPanel from "./panels/01-basics/basics"
import SvgPanel from "./panels/02-svg/svg"

import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

export interface IState {
    activePanelOnly: boolean;
    animate: boolean;
    navbarTabId: TabId;
    vertical: boolean;
}

export interface IProps {
    title?: string;
}

class App extends React.Component<IProps, IState> {
    public state: IState = {
        activePanelOnly: false,
        animate: true,
        navbarTabId: "Home",
        vertical: false,
    };

    public render() {
        return (
            <section className="container mx-auto">
                <Tabs
                    animate={this.state.animate}
                    id="TabsExample"
                    key={this.state.vertical ? "vertical" : "horizontal"}
                    renderActiveTabPanelOnly={this.state.activePanelOnly}
                    vertical={this.state.vertical}
                >
                    <Tab id="ng" title="Svg" panel={<SvgPanel />}/>
                    <Tab id="rx" title="Basics" panel={<BasicsPanel/>} />
                    <Tab id="mb" title="Ember" panel={<EmberPanel />} />
                    <Tabs.Expander />
                </Tabs>
            </section>
        );
    }
}



const EmberPanel: React.SFC<{}> = () => (
    <div>
        <h3>Example 3 ...</h3>
    </div>
);

export default App;
