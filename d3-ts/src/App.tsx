import * as React from 'react';

import { Tab, TabId, Tabs } from "@blueprintjs/core";

import BasicsPanel from "./panels/01-basics/basics";
import SvgPanel from "./panels/02-svg/svg";
import ScalingPanel from "./panels/03-scaling/scaling";
import MaxPanel from "./panels/04-max/max";
import RangeBandsPanel from "./panels/05-range-bands/range-bands";
import ColorScalesPanel from "./panels/06-color-scales/color-scales";
import QuantitiveScalesPanel from "./panels/07-quantitive-scales/quantitive-scales";
import MarginsPanel from "./panels/08-margins/margins";
import ScatterPanel from "./panels/09-scatter-plot/scatter";

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
                    <Tab id="sp" title="09-Scatter" panel={<ScatterPanel/>} />
                    <Tab id="mg" title="08-Margins" panel={<MarginsPanel/>} />
                    <Tab id="qs" title="07-Quantitive Scale" panel={<QuantitiveScalesPanel/>} />
                    <Tab id="cs" title="06-Colors Scale" panel={<ColorScalesPanel/>} />
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
