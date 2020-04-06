import { friendlyName } from '@/globals/filters/friendlyName'

export const registerFilters = (vue) => {
  vue.filter('friendlyName', friendlyName)
}
