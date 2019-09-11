if (window.opener) {
  const name = document.querySelector('#name');
  const role = document.querySelector('#role');
  const email = document.querySelector('#email');
  const contact = document.querySelector('#contact');
  const image = document.querySelector('#image-url');

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
} else {
  alert("Couldn't fetch any data");
}
