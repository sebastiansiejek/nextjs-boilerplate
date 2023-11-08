import { HTTPError } from '@/lib/errors/HTTPError'

export const fetcher = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit,
) => {
  const data = await fetch(input, init)

  if (data.ok) {
    return (await data.json()) as T
  }

  throw new HTTPError(
    'HTTP Error',
    data.status,
    data.statusText,
    input.toString(),
  )
}
