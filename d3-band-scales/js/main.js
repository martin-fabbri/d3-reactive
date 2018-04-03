console.log('Worlds tallest buildings');

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 400);

d3.json('data/buildings.json').then((data) => {
    console.log(data);
    //const x = { ...data, age: 5 }
    data.forEach((d) => {
        d.age = parseInt(d.age);
    });

    const x = d3.scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, 400])
        .paddingInner(0.2)
        .paddingOuter(0.2);


    const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.height)])
        .range([0, 400]);


    const rects = svg.selectAll('rect')
        .data(data);

    rects.enter()
        .append('rect')
        .attr('x', (d) => x(d.name))
        .attr('y', 0)
        .attr('width', x.bandwidth())
        .attr('height', (d) => y(d.height));
});

