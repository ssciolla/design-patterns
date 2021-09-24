import Room from './Room'
import Spell from '../item/Spell'

export default class EnchantedRoom extends Room {
  protected spell: Spell

  constructor (number: number, spell: Spell) {
    super(number)
    this.spell = spell
  }

  getSpell (): Spell {
    return this.spell
  }
}
