'use strict'

module.exports = (siteUrl, versionSegment, url) => {
  if (!url) {
    // occurs with stock pages like 404.html
    return url
  } else if (url.startsWith(`/${versionSegment}/`)) {
    return `${siteUrl}${url}`
  } else {
    return `${siteUrl}/${versionSegment}${url}`
  }
}
