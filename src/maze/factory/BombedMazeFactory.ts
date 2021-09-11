import MazeFactory from '../factory/MazeFactory'
import Bomb from '../item/Bomb'
import RoomWithABomb from '../room/RoomWithABomb'
import BombedWall from '../wall/BombedWall'

export default class BombedMazeFactory extends MazeFactory {
  protected plantBomb () {
    return new Bomb()
  }

  makeRoom (num: number) {
    return new RoomWithABomb(num, this.plantBomb())
  }

  makeWall () {
    return new BombedWall()
  }
}
