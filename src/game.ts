
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const bloomingPinkAcaciaTree = new Entity('bloomingPinkAcaciaTree')
engine.addEntity(bloomingPinkAcaciaTree)
bloomingPinkAcaciaTree.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(7, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingPinkAcaciaTree.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
bloomingPinkAcaciaTree.addComponentOrReplace(gltfShape2)

const redLeafShrub = new Entity('redLeafShrub')
engine.addEntity(redLeafShrub)
redLeafShrub.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(5.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redLeafShrub.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/Vegetation_08/Vegetation_08.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
redLeafShrub.addComponentOrReplace(gltfShape3)

const bookshelfBench = new Entity('bookshelfBench')
engine.addEntity(bookshelfBench)
bookshelfBench.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bookshelfBench.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/Shelf_03/Shelf_03.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bookshelfBench.addComponentOrReplace(gltfShape4)

const smallGreenGrassMound = new Entity('smallGreenGrassMound')
engine.addEntity(smallGreenGrassMound)
smallGreenGrassMound.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallGreenGrassMound.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/GrassPatchSmall_04/GrassPatchSmall_04.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
smallGreenGrassMound.addComponentOrReplace(gltfShape5)
