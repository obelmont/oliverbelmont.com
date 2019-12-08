import { PerspectiveCamera } from 'three'

export default (width, height) => {
  const camera = new PerspectiveCamera( 45, width / height, 1, 1000 );
  camera.position.z = 400
  camera.far = 4000
  return camera
}