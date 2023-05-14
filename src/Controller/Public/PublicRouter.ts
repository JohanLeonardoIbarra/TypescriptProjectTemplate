import Public from './Public'
import { Router } from 'express'

const router: Router = Router()
const publicController: Public = new Public()

router.get('/', publicController.helloWorld)

export default router
