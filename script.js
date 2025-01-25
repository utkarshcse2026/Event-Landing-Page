const form = document.getElementById('event-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  fetch('https://script.google.com/macros/s/AKfycbzty7ryN8e-EKO3tocCdRvH-LQ3SvEwE-vuAPwOmlWDPTlJ1U4briNIZwR9xcEYP1JD/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    alert('Registration successful!');
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  });
});
function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.name, data.email, data.contact, data.college, data.branch, data.year]);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  }
// Countdown Timer
const eventDate = new Date('2024-12-15T18:00:00+05:30');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownElement.textContent = 'The event has started!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
const inlineForm = document.getElementById('inline-registration-form');

inlineForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(inlineForm);
    const data = Object.fromEntries(formData.entries());

    fetch('https://script.google.com/macros/s/AKfycbzty7ryN8e-EKO3tocCdRvH-LQ3SvEwE-vuAPwOmlWDPTlJ1U4briNIZwR9xcEYP1JD/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        alert('Registration successful!');
        inlineForm.reset();
    })
    .catch(() => {
        alert('Something went wrong. Please try again.');
    });
});

