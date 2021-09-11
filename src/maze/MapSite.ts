
export default abstract class MapSite {
  abstract enter (): void

  toString (): string {
    return this.constructor.name
  }
}
