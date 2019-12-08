import CubeWave from './CubeWave'
import { setColors, color2 } from './helpers'

// set styles
setColors(color2);

// start wave
const cubewave = new CubeWave()
cubewave.init()