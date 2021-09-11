export default abstract class Item {
  constructor () {}

  toString () {
    return this.constructor.name
  }
}
