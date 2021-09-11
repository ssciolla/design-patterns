import MapSite from './MapSite'
import Room from './Room'

export default class Door extends MapSite {
  protected room1: Room
  protected room2: Room
  protected isOpen: boolean

  constructor (room1: Room, room2: Room, isOpen?: boolean) {
    super()
    this.room1 = room1
    this.room2 = room2
    this.isOpen = isOpen !== undefined ? isOpen : Math.random() < 0.5
  }

  getOtherSide (room: Room): Room | undefined {
    const roomNum = room.getRoomNumber()
    if (roomNum === this.room1.getRoomNumber()) return this.room2
    if (roomNum === this.room2.getRoomNumber()) return this.room1
    return undefined
  }

  enter () {}

  toString(): string {
    return `${this.constructor.name}<isOpen=${this.isOpen}>`
  }
}
