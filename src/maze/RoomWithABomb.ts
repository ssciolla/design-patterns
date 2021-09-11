import Bomb from './Bomb'
import Room from './Room'

export default class RoomWithABomb extends Room {
  bomb: Bomb

  constructor (num: number, bomb: Bomb) {
    super(num)
    this.bomb = bomb
  }
}
