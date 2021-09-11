import DoorNeedingSpell from './DoorNeedingSpell'
import EnchantedRoom from './EnchantedRoom'
import MazeFactory from './MazeFactory'
import Room from './Room'
import Spell from './Spell'

export default class EnchantedMazeFactory extends MazeFactory {
  protected castSpell () {
    return new Spell()
  }

  makeRoom (num: number) {
    return new EnchantedRoom(num, this.castSpell())
  }

  makeDoor (r1: Room, r2: Room) {
    return new DoorNeedingSpell(r1, r2, false)
  }
}
