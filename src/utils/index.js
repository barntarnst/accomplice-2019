import parser from 'url-parse'

/**
 * url-parse
 * @param {string} url
 */
const urlParser = url => parser(url).pathname

const isLocalhost = () =>
  Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  )

/**
 * filterSlugs pages
 * @param {array} pages
 * @param {string} currentPages
 */
const filterSlugs = (pages, currentPages) =>
  pages.filter(({ slug }) => slug === currentPages)[0]

export { urlParser, filterSlugs, isLocalhost }
