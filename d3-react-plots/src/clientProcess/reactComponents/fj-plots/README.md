This is a collection of composable React components for building interactive data graphs.

## Table of Contents

- [Design Principles](#design-principles)
- [Core Components](#core-components)
- [Additional Components](#additional-components)
- [References](#references)

## Design Principles

- Should be library agnostic. The component interface should be able to accomodate any api drawing graphics technology. 
- D3 is used as the visualization kernel for data preparation. React renders the DOM & manages all the state changes.
- Support high level core components that can composed to create complex charts.
- Core components abstract layout, sizing, and positioning.

## Core Components

- Plots (Area Plot, Line Plot, Scatter Plot, Rectangle Plot, Staked Area Plot)
- Axes.
- Legends.
- Labels.
- Gridlines.
- Drag / Selection capabilities (Regular Drag, X Drag, Y Drag).

## Additional Components

- Transitions
- Animations
- Responsive

## References

- [plottable](http://plottablejs.org)
- [victory](https://github.com/FormidableLabs/victory) 
- [semiotic](https://emeeks.github.io/semiotic/#/semiotic/)
- [codesuki/react-d3-components](https://github.com/codesuki/react-d3-components)
- [react-d3](https://github.com/react-d3)








