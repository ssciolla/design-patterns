import Bomb from './Bomb'
import BombedWall from './BombedWall'
import MazeFactory from './MazeFactory'
import RoomWithABomb from './RoomWithABomb'

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
