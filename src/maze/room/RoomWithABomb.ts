import Room from './Room'
import Bomb from '../item/Bomb'

export default class RoomWithABomb extends Room {
  bomb: Bomb

  constructor (num: number, bomb: Bomb) {
    super(num)
    this.bomb = bomb
  }
}
