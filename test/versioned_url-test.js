/* eslint-env mocha */
'use strict'

const { expect } = require('./harness')
const versionedUrl = require('../src/helpers/versioned_url.js')

describe('versioned_url', () => {
  const siteUrl = 'https://docs.spring.io/spring-security/reference'
  const versionSegment = '7.0'
  const url = '/index.html'
  it('when url does not contain version segment', () => {
    const result = versionedUrl(siteUrl, versionSegment, url)
    expect(result).is.eql('https://docs.spring.io/spring-security/reference/7.0/index.html')
  })
  it('when url does contain version segment', () => {
    const result = versionedUrl(siteUrl, versionSegment, `/${versionSegment}${url}`)
    expect(result).is.eql('https://docs.spring.io/spring-security/reference/7.0/index.html')
  })
  it('when url undefined', () => {
    // happens on 404.html
    const result = versionedUrl(siteUrl, versionSegment, undefined)
    expect(result).is.eql(undefined)
  })
})
