// margins
const margin = {
    left: 100,
    right: 10,
    top: 10,
    bottom: 150
};

const width = 600 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

// root element
const svg = d3.select('#chart-area')
    .append('svg')
        .attr('width', width)
        .attr('height', height);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.right})`);

// x label
g.append('text')
    .attr('class', 'x axis-label')
    .attr('x', width / 2)
    .attr('y', height - 140)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .text('x label');

// y label
g.append('text')
    .attr('class', 'y axis-label')
    .attr('x', -(height / 2))
    .attr('y', - 60)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .text('y label');

d3.json('data/revenues.json').then(

);



