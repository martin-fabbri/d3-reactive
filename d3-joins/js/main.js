console.log('Loading json');

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 400);

d3.json('data/ages.json', (error, data) => {
    if (error) throw error;
    console.log(data);
});

// const circles = svg.selectAll('circle')
//     .data(data);
//
// circles.enter()
//     .append('circle')
//         .attr('cx', (d, i) => i * 20)
//         .attr('cy', 200)
//         .attr('r', (d) => d)
//         .attr('fill', 'red');

