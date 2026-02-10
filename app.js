// Main App JavaScript

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        updateInstallStatus('Service Worker Active ✓');
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
        updateInstallStatus('Service Worker Failed ✗');
      });
  });
}

// Install prompt handling
let deferredPrompt;
const installPrompt = document.getElementById('install-prompt');
const installButton = document.getElementById('install-button');

// Detect if app can be installed
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show our custom install prompt
  installPrompt.classList.add('show');
});

// Handle install button click
installButton.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  
  // Show the install prompt
  deferredPrompt.prompt();
  
  // Wait for user response
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response: ${outcome}`);
  
  // Clear the prompt
  deferredPrompt = null;
  installPrompt.classList.remove('show');
});

// Detect if app was installed
window.addEventListener('appinstalled', () => {
  console.log('PWA installed successfully!');
  updateInstallStatus('Installed ✓');
  installPrompt.classList.remove('show');
});

// Check if running as standalone app
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Running as installed PWA');
  updateInstallStatus('Running as App ✓');
}

// Update install status display
function updateInstallStatus(status) {
  const statusElement = document.getElementById('install-status');
  if (statusElement) {
    statusElement.textContent = status;
  }
}

// Online/Offline status
function updateOnlineStatus() {
  const statusElement = document.getElementById('online-status');
  if (navigator.onLine) {
    statusElement.textContent = '🟢 Online';
    statusElement.style.color = '#4CAF50';
  } else {
    statusElement.textContent = '🔴 Offline';
    statusElement.style.color = '#f44336';
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// ===== DEMO COUNTER FEATURE =====
let counter = 0;

// Load saved counter from localStorage
if (localStorage.getItem('counter')) {
  counter = parseInt(localStorage.getItem('counter'));
}

const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Update display
function updateCounter() {
  counterDisplay.textContent = counter;
  localStorage.setItem('counter', counter);
}

// Initial display
updateCounter();

// Button event listeners
incrementBtn.addEventListener('click', () => {
  counter++;
  updateCounter();
  // Add a little animation
  counterDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    counterDisplay.style.transform = 'scale(1)';
  }, 200);
});

decrementBtn.addEventListener('click', () => {
  counter--;
  updateCounter();
  counterDisplay.style.transform = 'scale(0.8)';
  setTimeout(() => {
    counterDisplay.style.transform = 'scale(1)';
  }, 200);
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateCounter();
  counterDisplay.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    counterDisplay.style.transform = 'rotate(0deg)';
  }, 500);
});

// Add transition for smooth animations
counterDisplay.style.transition = 'transform 0.3s ease';

console.log('PWA Starter App loaded successfully! 🚀');
