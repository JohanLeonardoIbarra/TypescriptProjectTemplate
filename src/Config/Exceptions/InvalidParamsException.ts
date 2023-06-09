class InvalidParamException implements Error {
  name: string
  message: string
  stack?: string | undefined

  constructor(message: string) {
    this.name = 'InvalidParamException'
    this.message = message
  }
}

export default InvalidParamException
