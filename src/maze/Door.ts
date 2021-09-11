import MapSite from './MapSite'
import Room from './Room'

export default class Door extends MapSite {
  private room1: Room
  private room2: Room
  private isOpen: boolean

  public constructor (room1: Room, room2: Room) {
    super()
    this.room1 = room1
    this.room2 = room2
    this.isOpen = Math.random() < 0.5
  }

  getOtherSide (room: Room): Room | undefined {
    const roomNum = room.getRoomNumber()
    if (roomNum === this.room1.getRoomNumber()) return this.room2
    if (roomNum === this.room2.getRoomNumber()) return this.room1
    return undefined
  }

  enter () {}

  toString(): string {
    return `Door<isOpen=${this.isOpen}>`
  }
}
