import { formatPhoneNumber } from './formatPhoneNumber'

describe('formatPhoneNumber', () => {
  it('should format phone number', () => {
    expect(formatPhoneNumber('1234567890')).toBe('(12) 3456-7890')
  })
})
