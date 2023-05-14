import express, { Application } from 'express'
import PublicRouter from 'Controller/Public/PublicRouter'

class Server {
  private _port: number
  private _app: Application

  public constructor() {
    this._port = 5000
    this._app = express()
  }

  public init() {
    this.config()
    this.routes()
    this.listen()
  }

  private config() {
    this._app.use(express.json())
  }

  private routes() {
    this._app.use(PublicRouter)
  }

  private listen() {
    this._app.listen(this._port, () => {
      console.log(`Server listening at ${this._port} port!!!`)
    })
  }
}

export default Server
