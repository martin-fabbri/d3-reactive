console.log('Loading json');

const y = d3.scaleLinear()
    .domain([0, 848])
    .range([0, 400]);

console.log(y(100));
console.log(y(414));
console.log(y(700));

console.log(y.invert(47.16981132075472));
console.log(y.invert(195.2830188679245));
console.log(y.invert(716.9839999999999));

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
            .attr('height', (d) => y(d.height));

}).catch(() => {
    console.log('errorxxx');
});

