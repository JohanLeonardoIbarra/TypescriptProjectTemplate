import { Request, Response } from 'express'

class Public {
  public helloWorld(req: Request, res: Response) {
    res.send('Testing!!!')
  }
}

export default Public
