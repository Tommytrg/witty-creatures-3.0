import { DbInteractionVTO } from '../types'

// example
export class Interaction {
  public from: string
  public to: string
  public points: number
  public timestamp: number
  public ends: number

  constructor(vto: DbInteractionVTO) {
    this.from = vto.from
    this.to = vto.to
    this.points = vto.points
    this.timestamp = vto.timestamp
    this.ends = vto.ends || 0
  }

  toVTO(): DbInteractionVTO {
    return {
      from: this.from,
      to: this.to,
      points: this.points,
      timestamp: this.timestamp,
      ends: this.ends,
    }
  }

  isActive(): boolean {
    return this.ends > Date.now()
  }
}
