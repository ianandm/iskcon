self.addEventListener("install", (evt) => {
    console.log("service worker has been installed");
})

//activate event
self.addEventListener('activate', (evt) => {
    console.log("service worker has been activated");
})

//fetch event - get something from the server
self.addEventListener('fetch', (evt) => {
    console.log("Fetch Event");
})