import { BoxGeometry, MeshBasicMaterial, Mesh, EdgesGeometry, LineBasicMaterial, LineSegments, FaceColors } from 'three'
import { distance, color1, color2 } from '../helpers'

export default (size, x, z) => {

	// first create Cube and color it
	// use BoxGeometry because it is easier to manipulate
	// TODO: Convert to BoxBufferGeometry - explore fromBufferGeometry/fromGeometry perhaps
	// will help with frames/performance
	const geo = new BoxGeometry(size, size, size)
	geo.faces.forEach((elem) => elem.color.setStyle( color1 ))
	const mat = new MeshBasicMaterial({ vertexColors: FaceColors });

	// cube mesh and position
	const cube = new Mesh(geo, mat)
	cube.position.x = x
	cube.position.z = z
	cube.userData.distance = distance(x, z, 0, 0)

	// create new edges geometry on top of original box geometry
	// use EdgesGeometry over WireframeGeometry to only get outer edges
	const edgesgeo = new EdgesGeometry( cube.geometry ); // or WireframeGeometry for all vertices
	const edgesmat = new LineBasicMaterial( { color: color2, linewidth: 1 } );
	const wireframe = new LineSegments( edgesgeo, edgesmat );

	// add to cube mesh
	cube.add( wireframe );

	// return cube for rendering
	return cube
}
