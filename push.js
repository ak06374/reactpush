var push = require('web-push');

//let vapidkeys = push.generateVAPIDKeys();
let vapidKeys = {
  publicKey: 'BBHSUmckwsWjPz44NS90YQCp1Kx2gD9V8KAlxt3Jusf1OcFhpVqr_wRK061f8q2DAHN_mNDNSYXL-s2KKAdIk4E',
  privateKey: 'MTpZfk3hZuEel004xq0RXCfypKO7qtX-WJLCb_f8p3Y'
};

push.setVapidDetails(
	'mailto:test@code.com', 
	vapidKeys.publicKey, 
	vapidKeys.privateKey
);

let sub = {
	endpoint: 'https://fcm.googleapis.com/fcm/send/ctu6XYlJ3Jk:APA91bGL3HPINPRMDQflDXnLl0fuiVaVkxiQC43rxjxAEXkHMGm-UOu7mpxHL8B9rHshnJHdpVYVr1zO-bdmC3kiIKsOzzYlCZu6lJfM4UPQvgHj2nUDnirRhfy2VixzPGThZ7CrAPFG',
	expirationTime: null,
	keys: {
		p256dh: 'BBsHXG6hn_rgPOMxqdXQIBZ90gUD12Wpy4R1hSeDcw-G7y7qLp5CBkzB0QBaGuxm1x9V6N0_sZ37osnUoBLUtKM',
		auth: 'CKU3aGdMxXYvAn3S4NFwWQ'
	}
};

push.sendNotification(sub, 'test message')