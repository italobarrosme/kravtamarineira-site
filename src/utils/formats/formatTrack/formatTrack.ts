export const formatTrack = (track: string) => {
  switch (track) {
    case 'Verde':
      return 'bg-green-500'
    case 'Azul':
      return 'bg-blue-500'
    case 'Vermelho':
      return 'bg-red-500'
    case 'Amarelo':
      return 'bg-yellow-500'
    case 'Laranja':
      return 'bg-orange-500'
    case 'Roxo':
      return 'bg-purple-500'
    case 'Marrom':
      return 'bg-brown-500'
  }
}
