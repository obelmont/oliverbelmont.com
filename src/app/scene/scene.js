import { Scene, Color } from 'three'
import { color1 } from '../helpers.js'

export default () => {
	// create scene
	const scene = new Scene()
	scene.background = new Color(color1)
	return scene
}