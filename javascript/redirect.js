const successMessage = `Your Page <span class="url">${
  document.referrer ? document.referrer : '\b'
}</span> is hacked and redirected to some phishing website!`;

const errorMessage = `Your Page <span class="url">${
  document.referrer ? document.referrer : '\b'
}</span> cannot be hacked!!`;

if (window.opener) {
  document.querySelector('.content').innerHTML = successMessage;
  // Add full path below if you want to redirect the page to some other domain
  // e.g. => https://google.com
  window.opener.location = '/pages/hacked.html';
} else {
  document.querySelector('.content').innerHTML = errorMessage;
}
