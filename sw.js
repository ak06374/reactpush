self.addEventListener('push', function(e) {
	var options = {
		body: 'Notification generated from a push',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
			{
				action: 'explore',
				title: 'Explore this new wrld',
				icon: 'images/checkmark.png'
			},
			{
				action: 'closing',
				title: 'Close',
				icon: 'images/xmark.png'
			}
		]
	};
	
	e.waitUntil(
		self.registration.showNotification('Hello World', options)
	);
});