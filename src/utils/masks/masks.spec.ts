import { maskEmail, maskPhone } from './masks'

describe('masks', () => {
  it('should mask email', () => {
    const email = 'teste@email.com'
    const maskedEmail = maskEmail(email)

    expect(maskedEmail).toBe(`te***@email.com`)
  })

  it('should mask phone', () => {
    const phone = '(81) 99228-4533'
    const maskedPhone = maskPhone(phone)

    expect(maskedPhone).toBe(`(81) *****-4533`)
  })
})
