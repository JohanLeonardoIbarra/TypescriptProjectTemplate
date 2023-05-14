import Database from 'Config/Database/Sequelize'
import Server from 'Server/Server'
import enviroment from 'Config/Envitoment/Envitoment'
import { InvalidConnectionError } from 'sequelize'

const database = new Database(enviroment.DB_URI)

console.log(enviroment.ENV)

database.sequelize
  .authenticate()
  .then(() => {
    const server = new Server()
    server.init()
  })
  .catch(() => {
    throw new InvalidConnectionError(new Error("Can't connect to the database"))
  })
