import DoorNeedingSpell from '../door/DoorNeedingSpell'
import MazeFactory from '../factory/MazeFactory'
import Spell from '../item/Spell'
import EnchantedRoom from '../room/EnchantedRoom'

export default class EnchantedMazeFactory extends MazeFactory {
  protected castSpell () {
    return new Spell()
  }

  makeRoom (num: number) {
    return new EnchantedRoom(num, this.castSpell())
  }

  makeDoor (r1: EnchantedRoom, r2: EnchantedRoom) {
    return new DoorNeedingSpell(r1, r2, false)
  }
}
