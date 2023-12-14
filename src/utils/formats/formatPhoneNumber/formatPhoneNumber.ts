export const formatPhoneNumber = (phoneNumber: string): string => {
  const phoneNumberMask = /(\d{2})(\d{4,5})(\d{4})/

  const formattedPhoneNumber = phoneNumber.replace(
    phoneNumberMask,
    '($1) $2-$3'
  )

  return formattedPhoneNumber
}
