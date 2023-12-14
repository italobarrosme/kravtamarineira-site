export const maskEmail = (email: string): string => {
  const [name, domain] = email.split('@')
  const maskedName = name
    .split('')
    .map((char, index) => (index + 1 < 3 ? char : '*'))
    .join('')
  return `${maskedName}@${domain}`
}

export const maskPhone = (phone: string): string => {
  // (81) ****-4533
  const maskedPhone = phone
    .split('')
    .map((char, index) => {
      if (index >= 5 && index <= 9) {
        return '*'
      }
      return char
    })
    .join('')
  return `${maskedPhone}`
}
