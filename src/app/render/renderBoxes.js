import { map } from '../helpers.js'

// TODO: Perhaps this should be moved from render folder
export default (boxes, time, maxDistance) => {
	// Wave
  // TODO: experiment and convert to different types of waves
  boxes.children.forEach((box, i) => {
    const distance = box.userData.distance
    const offset = map(distance, 0, maxDistance, -2, 2)
    const angle = time + offset
    const scale = map(Math.sin(angle), -1, 1, 2, 6)
    box.scale.y = scale
  })
  return boxes
}