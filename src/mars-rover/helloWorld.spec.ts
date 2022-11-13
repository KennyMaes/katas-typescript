import { hello } from './helloWorld'

describe('first test', () => {
  it('hello world', () => {
    expect(hello()).toEqual('Hello 🗺!')
  })
})
