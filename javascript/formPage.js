const info = document.querySelector('.info');
if (window.opener) {
  document.querySelector('#append').addEventListener('click', () => {
    const form = document.createElement('form');
    const input = document.createElement('input');

    form.id = 'form';
    form.setAttribute(
      'onsubmit',
      'if(event.preventDefault) event.preventDefault(); else event.returnValue = false; alert("Form Submitted Successfully!")'
    );

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Email');
    input.id = 'email';

    form.appendChild(input);
    window.opener.document.body.appendChild(form);
    info.innerHTML = 'form appended successfully!';
  });

  document.querySelector('#fill').addEventListener('click', () => {
    if (window.opener.document.querySelector('#email')) {
      window.opener.document.querySelector('#email').value = 'apal@example.com';
      info.innerHTML = 'successfully added the input value';
    } else {
      info.innerHTML = 'No input field found!';
    }
  });

  document.querySelector('#submit').addEventListener('click', () => {
    if (window.opener.document.querySelector('#form')) {
      // This will ignore the onSubmit function
      // window.opener.document.querySelector('#form').submit();

      // If you want to execute onSubmit, use the method below instead!
      window.opener.document
        .querySelector('#form')
        .dispatchEvent(new Event('submit'));
      info.innerHTML = 'form submitted successfully';
    } else {
      info.innerHTML = 'no form found!';
    }
  });
} else {
  info.innerHTML = `window.opener is ${window.opener}`;
}
