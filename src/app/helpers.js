// helper functions
// originally from https://codepen.io/mikewagz/pen/goWqpo
// TODO: rename map function as its name conflicts with the Array.map method and can be confusing
// On the other hand in p5 the map function is a core feature 🤷‍♀️

// calculate the distance between 2 points
export function distance(x1, y1, x2, y2) {
  const dx = x1 - x2
  const dy = y1 - y2
  return Math.sqrt(dx * dx + dy * dy)
}

// map a value from 1 range to a new range
export function map(value, start1, stop1, start2, stop2) {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2
}

// linear interpolation
export function lerp(start, end, amount){
  return start * (1-amount) + end * amount
}

// TODO: random color schemes
// main color - background
// export const color1 = '#000000' // black
// export const color1 = '#ffffff' // white
export const color1 = '#2D4F41' // green
// export const color1 = '#F84F53' // orange - old #F84F53
// export const color1 = '#F8E0BC' // beige
// export const color1 = '#F8E0BC' // blue

// secondary color - text and wireframe
// export const color2 = '#ffffff' // black
// export const color2 = '#000000' // white
export const color2 = '#74B094' // green
// export const color2 = '#09011A' // orange
// export const color2 = '#09011A' // beige
// export const color2 = '#0C1169' // blue

// set color style
// TODO: Random/time based colors
export function setColors(color){
	const css = `* { color: ${color}; } a:after{ background: ${color}; }`
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')

	head.appendChild(style)
	style.type = 'text/css'
	style.appendChild(document.createTextNode(css))
}
