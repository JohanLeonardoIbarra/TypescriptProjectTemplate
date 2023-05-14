import InvalidParamException from 'Config/Exceptions/InvalidParamsException'
import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
})

interface Enviroment {
  DB_URI: string
  PORT: string
  ENV: string
}

const enviroment = () => {
  const dbUri = process.env.DATABASE_URI
  const port = process.env.PORT
  const enviroment = process.env.ENV

  if (dbUri && port && enviroment) {
    const env: Enviroment = {
      DB_URI: dbUri,
      PORT: port,
      ENV: enviroment
    }

    return env
  }

  throw new InvalidParamException("Can't load the enviroment variables.")
}

export default enviroment()
