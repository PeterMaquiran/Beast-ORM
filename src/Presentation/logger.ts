
class Logger {
  log() {}
  error(error: any) {
    try {
      console.error(error)
    } catch (e) {}
  }
}


export const logger = new Logger
