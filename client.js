!(function startBottleService (root) {
  'use strict'

  if (!root.navigator.serviceWorker) {
    throw new Error('Missing ServiceWorker')
  }

  var serviceScriptUrl = 'babel-service.js'
  var scope = '/'

  function registeredWorker (registration) {
    console.log('service worker registration', registration)
    root.location.reload()
  }

  function onError (err) {
    console.error('service worker error', err)
  }

  if (!root.navigator.serviceWorker.controller) {
    root.navigator.serviceWorker.register(serviceScriptUrl, { scope: scope })
      .then(registeredWorker)
      .catch(onError)
  } else {
    console.log('service worker controller is active')
  }
}(window))
