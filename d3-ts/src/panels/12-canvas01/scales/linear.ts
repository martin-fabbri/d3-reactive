import {ScaleLinear, scaleLinear} from 'd3';


// const xScale = scaleLinear()
//     .domain([min(x)!, max(x)!])
//     .range([0, width]);

export class Linear {
    private d3Scale: ScaleLinear<number, number>;

    /**
     * @constructor
     */
    constructor() {
        this.d3Scale = scaleLinear();
    }

    public scale(value: number) {
        return this.d3Scale(value);
    }

    // public scaleTransformation(value: number) {
    //     return this.scale(value);
    // }

    public invertedTransformation(value: number) {
        return this.invert(value);
    }

    public invert(value: number) {
        return this.d3Scale.invert(value);
    }

    public defaultTicks(): number[] {
        return this.d3Scale.ticks();
    }

    public range(values: number[]): Linear {
        this.d3Scale.range(values);
        return this;
    }

    public domain(values: number[]): Linear {
        this.d3Scale.domain(values);
        return this;
    }
}

export default () => new Linear();