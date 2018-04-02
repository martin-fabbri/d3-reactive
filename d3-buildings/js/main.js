console.log('Loading json');

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 500)
    .attr('height', 500);

d3.json('data/buildings.json').then((data) => {
    console.log(data);
    //const x = { ...data, age: 5 }
    data.forEach((d) => {
       d.age = parseInt(d.age);
    });

    const rects = svg.selectAll('rect')
        .data(data);

    rects.enter()
        .append('rect')
            .attr('x', (d, i) => i * 30 + 5)
            .attr('y', 0)
            .attr('width', 20)
            .attr('height', (d) => d.height);

}).catch(() => {
    console.log('errorxxx');
});

