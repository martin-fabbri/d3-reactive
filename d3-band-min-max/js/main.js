console.log('Worlds tallest buildings');

const data = [
    {grade: 'A', value: 4},
    {grade: 'B', value: 3},
    {grade: 'C', value: 2}
];

const min = d3.min(data, (d) => d.value);
console.log(min);

const max = d3.max(data, (d) => d.value);
console.log(max);

const val_extent = d3.extent(data, (d)=> d.value);
console.log(val_extent);

const grade_map = d3.extent(data, (d)=> d.grade);
console.log(grade_map);

const y = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.value)).range([0, 400])
    .range([0, 400]);
console.log(y);

const x = d3.scaleBand()
    .domain(data.map((d) => d.grade))
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.3);

const svg = d3.select('#chart-area').append('svg')
    .attr('width', 500)
    .attr('height', 500);

const rects = svg.selectAll('rect')
    .data(data);

rects.enter()
    .append('rect')
    .attr('x', (d) => x(d.grade))
    .attr('y', 0)
    .attr('width', x.bandwidth())
    .attr('height', (d) => y(d.value));
