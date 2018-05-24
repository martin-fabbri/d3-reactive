import * as React from 'react';

import { Tab, TabId, Tabs } from "@blueprintjs/core";

import BasicsPanel from "./panels/01-basics/basics";
import SvgPanel from "./panels/02-svg/svg";
import ScalingPanel from "./panels/03-scaling/scaling";
import MaxPanel from "./panels/04-max/max";

import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';
import {RangeBandsPanel} from "./panels/05-range-bands/range-bands";

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
                    <Tab id="rb" title="05-Range Bands" panel={<RangeBandsPanel/>} />
                    <Tab id="mx" title="04-Max" panel={<MaxPanel/>} />
                    <Tab id="sc" title="03-Scaling" panel={<ScalingPanel/>} />
                    <Tab id="sv" title="02-Svg" panel={<SvgPanel />}/>
                    <Tab id="bs" title="01-Basics" panel={<BasicsPanel/>} />
                    <Tabs.Expander />
                </Tabs>
            </section>
        );
    }
}

export default App;
