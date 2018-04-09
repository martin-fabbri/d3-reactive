// margins
const margin = {
    left: 100,
    right: 10,
    top: 10,
    bottom: 150
};

const width = 600 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// root element
const svg = d3.select('#chart-area')
    .append('svg')
        .attr('width', width + margin.left + margin.righ)
        .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.right})`);

// x label
g.append('text')
    .attr('class', 'x axis-label')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom / 2)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .text('Month');

// y label
g.append('text')
    .attr('class', 'y axis-label')
    .attr('x', -(height / 2))
    .attr('y', - margin.left / 2)
    .attr('font-size', '20px')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .text('Revenue');

d3.json('data/revenues.json').then(d => {
    d.forEach(data => {
       data.revenue = parseInt(data.revenue);
       data.profit = parseInt(data.profit);
       console.log(data.revenue);
    });

    // scale bands
    const x = d3.scaleBand()
        .domain(d.map(data => data.month))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    const y = d3.scaleLinear()
        .domain([0, d3.max(d, d => d.revenue)])
        .range([height, 0]);

    const xAxisCall = d3.axisBottom(x);
    g.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxisCall);

    const yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(data => `$${data / 1000}k`);
    g.append('g')
        .attr('class', 'y axis')
        .call(yAxisCall);

    const rects = g.selectAll('rect')
        .data(d)
        .enter()
            .append('rect')
                .attr('x', data => x(data.month))
                .attr('y', data => y(data.revenue))
                .attr('width', x.bandwidth())
                .attr('height', data => height - y(data.revenue))
                .attr('fill', 'black');

});



