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
  