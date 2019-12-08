import createRenderer from './render/renderer.js'
import createCamera from './camera/camera.js'
import createScene from './scene/scene.js'
import createCube from './meshes/cube.js'
import createBoxes from './groups/boxes.js'
import renderBoxes from './render/renderBoxes.js'
import { distance, map, lerp } from './helpers'

/**
 * References
 * Daniel Shiffman and @beesandbombs and Mike Wagz
 * https://twitter.com/beesandbombs/status/940639806522085376?lang=en
 * https://www.youtube.com/watch?v=H81Tdrmz2LA
 * https://codepen.io/mikewagz/pen/goWqpo
**/

export default class CubeWave {
  constructor() {
    // system variables
    this.width = window.innerWidth
    this.height = window.innerHeight

    // user variables
    this.groupsize = 180//240 // - cute
    this.cubesize = 18//30
    this.time = 0
    this.maxDistance = distance(0, 0, this.groupsize / 2, this.groupsize / 2)

    // event variables + starting value
    this.mouseX = 800
    this.mouseY = 950

    // renderer, camera and scene
    this.renderer = createRenderer()
    this.camera = createCamera(this.width, this.height)
    this.scene = createScene()

    // events
    // TODO: convert to reusable function
    this.resize = this.resize.bind(this)
    this.renderFrame = this.renderFrame.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
  }

  init() {
    // add event listeners
    window.addEventListener('resize', this.resize)
    window.addEventListener('mousemove', this.mouseMove)

    // generate boxes and add to scene
    this.boxes = createBoxes(this.groupsize, this.cubesize)
    this.scene.add(this.boxes)

    // set initial canvas size
    this.resize()

    // start the animation loop
    requestAnimationFrame(this.renderFrame)
  }

  resize() {
    // update width and height
    this.width = window.innerWidth
    this.height = window.innerHeight

    // update camera and renderer size
    this.camera.aspect = (this.width / this.height);
    this.camera.updateProjectionMatrix()

    // offset camera
    this.camera.setViewOffset( this.width, this.height, -(this.width / 3), -(this.height / 2.75), this.width, this.height );
    this.renderer.setSize(this.width, this.height)
  }

  mouseMove(e) {
    this.mouseX += e.movementX
    this.mouseY += e.movementY
  }

  renderFrame() {
    // render scene, update boxes, group rotation and move time forward
    this.renderer.render(this.scene, this.camera)
    this.boxes = renderBoxes(this.boxes, this.time, this.maxDistance)

    // Set rotations based off mouse position
    this.boxes.rotation.y = lerp(this.boxes.rotation.y, (this.mouseX / 1800), 0.1)
    this.boxes.rotation.x = lerp(this.boxes.rotation.x, (this.mouseY / 1800), 0.1) 
    this.time += 0.040

    // Request next frame
	requestAnimationFrame(this.renderFrame)
  }
}