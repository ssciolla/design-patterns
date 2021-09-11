import EnchantedMazeFactory from './EnchantedMazeFactory'
import MazeFactory from './MazeFactory'
import { MazeGame } from './MazeGame'

const aMazeGame = new MazeGame()
const aMaze = aMazeGame.createMaze()

console.log(`${aMaze}`)
console.log(`${aMaze.getRoom(1)}`)
console.log(`- - -\n`)

const mazeFactory = new MazeFactory()
const anotherMazeGame = new MazeGame()
const anotherMaze = anotherMazeGame.createMazeWithFactory(mazeFactory)

console.log(`${anotherMaze}`)
console.log(`${anotherMaze.getRoom(2)}`)
console.log(`- - -\n`)

const enchantedMazeFactory = new EnchantedMazeFactory()
const enchantedMazeGame = new MazeGame()
const enchantedMaze = enchantedMazeGame.createMazeWithFactory(enchantedMazeFactory)

console.log(`${enchantedMaze}`)
console.log(`${enchantedMaze.getRoom(2)}`)
console.log(`- - -\n`)
