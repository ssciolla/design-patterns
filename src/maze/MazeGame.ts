import Maze from './Maze'
import { Direction } from './vocab'
import Door from './door/Door'
import MazeFactory from './factory/MazeFactory'
import Room from './room/Room'
import Wall from './wall/Wall'

export class MazeGame {
  public constructor () {}

  createMaze (): Maze {
    const aMaze = new Maze()
    
    // Create two walled rooms
    const r1 = new Room(1)
    const r2 = new Room(2)
    aMaze.addRoom(r1)
    aMaze.addRoom(r2)

    // Connect the two rooms via a door
    const theDoor = new Door(r1, r2)

    r1.setSide(Direction.North, new Wall())
    r1.setSide(Direction.South, new Wall())
    r1.setSide(Direction.East, theDoor)
    r1.setSide(Direction.West, new Wall())

    r2.setSide(Direction.North, new Wall())
    r2.setSide(Direction.South, new Wall())
    r2.setSide(Direction.East, new Wall())
    r2.setSide(Direction.West, theDoor)

    return aMaze
  }

  createMazeWithFactory (factory: MazeFactory) {
    const aMaze = factory.makeMaze()
    const r1 = factory.makeRoom(1)
    const r2 = factory.makeRoom(2)
    aMaze.addRoom(r1)
    aMaze.addRoom(r2)

    const theDoor = factory.makeDoor(r1, r2)

    r1.setSide(Direction.North, factory.makeWall())
    r1.setSide(Direction.South, factory.makeWall())
    r1.setSide(Direction.East, theDoor)
    r1.setSide(Direction.West, factory.makeWall())

    r2.setSide(Direction.North, factory.makeWall())
    r2.setSide(Direction.South, factory.makeWall())
    r2.setSide(Direction.East, factory.makeWall())
    r2.setSide(Direction.West, theDoor)

    return aMaze
  }
}
