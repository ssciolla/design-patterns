import { Direction } from './vocab'
import MapSite from './MapSite'
import Wall from './Wall'
import Door from './Door'

type RoomSide = Wall | Door | undefined
type RoomSides = [RoomSide, RoomSide, RoomSide, RoomSide]

export default class Room extends MapSite {
  private roomNumber: number
  private sides: RoomSides

  public constructor (
    roomNumber: number,
    sides: RoomSides = [undefined, undefined, undefined, undefined]
  ) {
    super()
    this.roomNumber = roomNumber
    this.sides = sides
  }

  enter () {}

  getRoomNumber (): number {
    return this.roomNumber
  }

  getSide (dir: Direction): RoomSide {
    return this.sides[dir]
  }

  setSide (dir: Direction, side: RoomSide) {
    this.sides[dir] = side
  }

  toString (): string {
    return (
      `${this.constructor.name}<` +
      `number=${this.roomNumber}; ` +
      `sides=[` +
      this.sides.map((s, i) => `${Direction[i]}<${s}>`).join(', ') +
      `]>`
    )
  }
}
