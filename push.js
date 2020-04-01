var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys();
let vapidKeys = {
  publicKey: 'BBHSUmckwsWjPz44NS90YQCp1Kx2gD9V8KAlxt3Jusf1OcFhpVqr_wRK061f8q2DAHN_mNDNSYXL-s2KKAdIk4E',
  privateKey: 'MTpZfk3hZuEel004xq0RXCfypKO7qtX-WJLCb_f8p3Y'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')