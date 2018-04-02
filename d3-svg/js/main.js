console.log('Drawing SVG');

const data = [25, 20, 10, 12, 15];

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 400);

const circle = svg.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 25)
    .attr('fill', 'red');

const rect = svg.append('rect')
    .attr('x', 100)
    .attr('y', 50)
    .attr('width', 25)
    .attr('height', 25)
    .attr('stroke', 'blue')
    .attr('stroke-width', 3)
    .attr('fill', 'green');

