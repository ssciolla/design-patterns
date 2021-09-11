import Room from './room/Room'

export default class Maze {
  rooms: Room[]

  public constructor () {
    this.rooms = []
  }

  getRoomNumbers (): number[] {
    return this.rooms.map(r => r.getRoomNumber())
  }

  addRoom (room: Room): void {
    if (this.getRoomNumbers().includes(room.getRoomNumber())) {
      throw new Error('Room with that number already exists!')
    }
    this.rooms.push(room)
  }

  getRoom (num: number): Room | undefined {
    return this.rooms.find(r => r.getRoomNumber() === num)
  }
  
  toString (): string {
    return `${this.constructor.name}<rooms=[${this.rooms.map(r => r.toString()).join(', ')}]>`
  }
}
