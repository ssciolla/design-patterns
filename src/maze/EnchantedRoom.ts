import Room from './Room'
import Spell from './Spell'

export default class EnchantedRoom extends Room {
  protected spell: Spell | null

  constructor (number: number, spell: Spell) {
    super(number)
    this.spell = spell
  }
}
