class ApiError extends Error {
  constructor(
    ststusCode,
    message= "Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message)
    this.statusCode = this.statusCode
    this.data = null
    this.message = message
    this.success = false
    this.errors = this.errors

    if(statck) {
      this.statck = statck
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}