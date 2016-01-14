!(function startBottleService (root) {
  'use strict'

  var serviceScriptUrl = 'babel.js'
  var scope = '/'

  function registeredWorker (registration) {
    console.log('service worker registration', registration)
  }

  function onError (err) {
    console.error('service worker error', err)
  }

  if (!root.navigator.serviceWorker.controller) {
    root.navigator.serviceWorker.register(serviceScriptUrl, { scope: scope })
      .then(registeredWorker)
      .catch(onError)
  }
}(window))
