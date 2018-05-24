import * as React from 'react';

import { Tab, TabId, Tabs } from "@blueprintjs/core";

import BasicsPanel from "./panels/01-basics/basics";
import SvgPanel from "./panels/02-svg/svg";
import ScalingPanel from "./panels/03-scaling/scaling";

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
                    <Tab id="mb" title="03-Scaling" panel={<ScalingPanel/>} />
                    <Tab id="ng" title="02-Svg" panel={<SvgPanel />}/>
                    <Tab id="rx" title="01-Basics" panel={<BasicsPanel/>} />
                    <Tabs.Expander />
                </Tabs>
            </section>
        );
    }
}

export default App;
