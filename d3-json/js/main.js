console.log('Loading json');

// const files = ["data/ages.json"];
// const promises = files.map((url) => d3.json(url));
//
// Promise.all(promises).then((values) => {
//     console.log(values)
// });

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 400);

d3.json('data/ages.json').then((data) => {
    console.log(data);
    //const x = { ...data, age: 5 }
    data.forEach((d) => {
       d.age = parseInt(d.age);
    });

    const circles = svg.selectAll('circle')
        .data(data);

    circles.enter()
        .append('circle')
            .attr('cx', (d, i) => i * 20)
            .attr('cy', 200)
            .attr('r', (d) => d.age)
            .attr('fill', 'red');

}).catch(() => {
    console.log('errorxxx');
});

