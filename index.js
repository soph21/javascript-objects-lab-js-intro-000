var recipes = {mexican: 'tacos'}
function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}
var object = {key: 'value'}
var newObject = Object.assign({}, object)
function deleteFromObjectByKey(object, key) {
  delete newObject[key]
  return Object.assign({}, object, {[key]: value})
}
