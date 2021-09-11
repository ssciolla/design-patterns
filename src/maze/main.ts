import { MazeGame } from './MazeGame'
import BombedMazeFactory from './factory/BombedMazeFactory'
import EnchantedMazeFactory from './factory/EnchantedMazeFactory'
import MazeFactory from './factory/MazeFactory'

const aMazeGame = new MazeGame()
const aMaze = aMazeGame.createMaze()

console.log(`${aMaze}`)
console.log(`${aMaze.getRoom(1)}`)
console.log(`- - -\n`)

const mazeFactory = new MazeFactory()
const anotherMaze = aMazeGame.createMazeWithFactory(mazeFactory)

console.log(`${anotherMaze}`)
console.log(`${anotherMaze.getRoom(2)}`)
console.log(`- - -\n`)

const enchantedMazeFactory = new EnchantedMazeFactory()
const enchantedMaze = aMazeGame.createMazeWithFactory(enchantedMazeFactory)

console.log(`${enchantedMaze}`)
console.log(`${enchantedMaze.getRoom(2)}`)
console.log(`- - -\n`)

const bombedMazeFactory = new BombedMazeFactory()
const bombedMaze = aMazeGame.createMazeWithFactory(bombedMazeFactory)

console.log(`${bombedMaze}`)
console.log(`${bombedMaze.getRoom(1)}`)
console.log(`- - -\n`)
