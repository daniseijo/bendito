export function removeLocaleFromPathname(pathname: string, locale: string) {
  const localePattern = new RegExp(`^\\/${locale}(\\\/|$)`) // Matches /locale or /locale/ at the start of the string
  return pathname.replace(localePattern, '/')
}

export function getFirstPathFromPathname(pathname: string) {
  return `/${pathname.split('/')[1]}`
}
