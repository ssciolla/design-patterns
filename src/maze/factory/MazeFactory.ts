import Maze from '../Maze'
import Door from '../door/Door'
import Room from '../room/Room'
import Wall from '../wall/Wall'

export default class MazeFactory {
  
  public constructor () {}

  makeMaze (): Maze {
    return new Maze()
  }

  makeWall (): Wall {
    return new Wall()
  }

  makeRoom (num: number) {
    return new Room(num)
  }

  makeDoor (r1: Room, r2: Room): Door {
    return new Door(r1, r2)
  }
}
