import { Sequelize } from 'sequelize'

class Database {
  private _sequelize: Sequelize

  public constructor(uri: string) {
    this._sequelize = new Sequelize(uri)
  }

  get sequelize(): Sequelize {
    return this._sequelize
  }
}

export default Database
