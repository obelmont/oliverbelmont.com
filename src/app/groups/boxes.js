import { Group } from 'three'
import createCube from '../meshes/cube.js'

export default (size, cubesize) => {
  const group = new Group()

  for (let z = -size / 2; z <= size / 2; z += cubesize) {
    for (let x = -size / 2; x <= size / 2; x += cubesize) {
      const cube = createCube(cubesize, x, z)
      group.add(cube)
    }
  }

  return group
}