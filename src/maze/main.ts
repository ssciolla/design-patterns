import BombedMazeFactory from './BombedMazeFactory'
import EnchantedMazeFactory from './EnchantedMazeFactory'
import MazeFactory from './MazeFactory'
import { MazeGame } from './MazeGame'

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
