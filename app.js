const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'sw.js',
        {
          scope: './',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

window.addEventListener("offline", (event) => {
  document.getElementById('wifi').src = "./gallery/wifi-off.svg"
  console.log("The network connection has been lost.");
});

window.addEventListener("online", (event) => {
  document.getElementById('wifi').src = "./gallery/wifi-on.jpg"
  console.log("The network connection is present");
});

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}

registerSync();
registerServiceWorker();
