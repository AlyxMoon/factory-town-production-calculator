import friendlyNames from '@/assets/data/friendlyNames'

export const friendlyName = (text = '') => {
  if (text in friendlyNames) return friendlyNames[text]
  return text
}
