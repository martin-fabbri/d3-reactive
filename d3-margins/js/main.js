console.log('Margins');

const margin = {left: 100, right: 10, top:10, bottom: 100};

const width = 600 - margin.left - margin.right;

const height = 400 - margin.top - margin.bottom;

const svg = d3.select('#chart-area').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom );

const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

d3.json('data/buildings.json').then((data) => {
    console.log(data);
    //const x = { ...data, age: 5 }
    data.forEach((d) => {
        d.age = parseInt(d.age);
    });

    const x = d3.scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, width])
        .paddingInner(0.2)
        .paddingOuter(0.2);


    const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.height)])
        .range([0, height]);


    const rects = g.selectAll('rect')
        .data(data);

    rects.enter()
        .append('rect')
        .attr('x', (d) => x(d.name))
        .attr('y', 0)
        .attr('width', x.bandwidth())
        .attr('height', (d) => y(d.height));
});

