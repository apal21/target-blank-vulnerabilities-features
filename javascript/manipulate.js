const successMessage =
  'Name updated successfully! Go back and check your page!';
const errorMessage = 'Could not update the name! Go back and check your page!';

if (window.opener) {
  window.opener.document.querySelector('.profile__user-name').innerHTML =
    'John Doe';
  document.querySelector('.info').innerHTML = successMessage;
} else {
  document.querySelector('.info').innerHTML = errorMessage;
}
