import { CustomError } from '@/lib/errors/CustomError'

export class HTTPError extends CustomError {
  public status: number
  public statusText: string
  public url: string

  constructor(
    message: string,
    status: number,
    statusText: string,
    url: string,
  ) {
    super(message)
    this.name = 'HTTPError'
    this.status = status
    this.statusText = statusText
    this.url = url
  }
}
