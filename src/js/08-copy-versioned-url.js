/*
 * Copyright 2021 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;(function () {
  'use strict'

  activateCopyUrl(document.getElementById('copy-url'))

  function activateCopyUrl (copyUrl) {
    if (!copyUrl) return

    copyUrl.addEventListener('click', function (event) {
      const hash = _hash(window)
      const versionedUrl = document.querySelector('meta[name="versioned-url"]')?.content + hash
      window.navigator.clipboard.writeText(versionedUrl)
      this.classList.add('copied')
      setTimeout(() => {
        this.classList.remove('copied')
      }, 1500)
    })
  }

  function _hash (window) {
    const hash = window.location.hash
    return isValidHash(hash) ? hash : ''
  }

  // ensure malicious user cannot inject code via URL hash
  function isValidHash (hash) {
    if (!hash || typeof hash !== 'string') return false
    const isHashRegex = /^#[-.\w]+$/
    return isHashRegex.test(hash)
  }
})()
