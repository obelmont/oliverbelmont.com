import { WebGLRenderer } from 'three'

export default () => {
	// TODO: figure out why rendering isnt as sharp as desired
	const canvas = document.querySelector('#cube-canvas')
	const renderer = new WebGLRenderer({ alpha: true, antialias: true, canvas: canvas })
	renderer.setPixelRatio(window.devicePixelRatio)
	return renderer
}