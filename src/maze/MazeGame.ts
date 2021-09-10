import Door from './Door'
import Maze from './Maze'
import Room from './Room'
import { Direction } from './vocab'

export class MazeGame {
  public constructor() {}

  createMaze (): Maze {
    const aMaze = new Maze()
    
    // Create two walled rooms
    const r1 = new Room(1)
    const r2 = new Room(2)
    aMaze.addRoom(r1)
    aMaze.addRoom(r2)

    // Connect the two rooms via a door
    const theDoor = new Door(r1, r2)
    r1.setSide(Direction.East, theDoor)
    r2.setSide(Direction.West, theDoor)

    return aMaze
  }
}
