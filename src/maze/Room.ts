import { Direction } from './vocab'
import MapSite from './MapSite'
import Wall from './Wall'

type RoomSides = [MapSite, MapSite, MapSite, MapSite]

export default class Room extends MapSite {
  private roomNumber: number
  private sides: RoomSides

  public constructor (
    roomNumber: number,
    sides: RoomSides = [new Wall(), new Wall(), new Wall(), new Wall()]
  ) {
    super()
    this.roomNumber = roomNumber
    this.sides = sides
  }

  enter () {}

  getRoomNumber (): number {
    return this.roomNumber
  }

  getSide (dir: Direction): MapSite {
    return this.sides[dir]
  }

  setSide (dir: Direction, site: MapSite) {
    this.sides[dir] = site
  }

  toString (): string {
    return (
      `Room<` +
      `number=${this.roomNumber}; ` +
      `sides=[` +
      this.sides.map((s, i) => `${Direction[i]}<${s}>`).join(', ') +
      `]>`
    )
  }
}
