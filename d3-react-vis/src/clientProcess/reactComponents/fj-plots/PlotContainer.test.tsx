import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import PlotContainer from './PlotContainer';

import {shallow} from 'enzyme';

describe('components/PlotContainer', () => {
    it('renders an svg with a role of img', () => {
        const wrapper = shallow(<PlotContainer/>);
        const svgElement = wrapper.find('svg').at(0);
        expect(svgElement.exists()).toBeTruthy();
        expect(svgElement.prop('role')).toContain('img');
    });

    it('renders and svg with a title node', () => {
        const testTitle = 'FlowJo Chart';
        const wrapper = shallow(<PlotContainer title={testTitle}/>);
        const titleNode = wrapper.find('title');
        expect(titleNode.html()).toContain(testTitle);
    });

    it('renders an svg with correct responsive viewbox', () => {
        // container should be responsive by default
        const width = 300;
        const height = 400;
        const viewBox = `0 0 ${width} ${height}`
        const wrapper = shallow(<PlotContainer width={width} height={height}/>);
        const svgElement = wrapper.find('svg').at(0);
        expect(svgElement.prop('viewBox')).toBeDefined();
        expect(svgElement.prop('viewBox')).toEqual(viewBox);
    });
});
