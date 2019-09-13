if (window.opener) {
  const name = document.querySelector('#name');
  const role = document.querySelector('#role');
  const email = document.querySelector('#email');
  const contact = document.querySelector('#contact');
  const image = document.querySelector('#image-url');
  const balance = document.querySelector('#balance');
  const aadhaar = document.querySelector('#aadhaar');

  name.innerHTML = window.opener.document.querySelector(
    '.profile__user-name'
  ).innerHTML;

  role.innerHTML = window.opener.document.querySelector(
    '.profile__user-role'
  ).innerHTML;

  email.innerHTML = window.opener.document.querySelector(
    '.profile__user-email'
  ).innerHTML;

  contact.innerHTML = window.opener.document.querySelector(
    '.profile__user-phone'
  ).innerHTML;

  image.innerHTML = window.opener.document.querySelector('.profile__image').src;

  balance.innerHTML = window.opener.document.querySelector('.profile__balance').innerHTML;

  aadhaar.innerHTML = window.opener.document.querySelector('.profile__aadhaar').innerHTML;
} else {
  alert("Couldn't fetch any data");
}
