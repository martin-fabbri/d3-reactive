import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import Bar from './Bar';

import {shallow} from 'enzyme';

describe('components/Bar', () => {
    describe('rendering data', () => {
        it('renders bars for {x, y} shaped data (default)', () => {
            const data: number[] = Array.apply(null, {length: 10}).map((i: number) => (i));
            const wrapper = shallow(<Bar data={data}/>);
            const bars = wrapper.find(Bar);
            expect(bars.length).toEqual(10);
        });
    });

});
