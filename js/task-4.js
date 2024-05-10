const loginForm = document.forms[0];

const handlerSubmit = (event = {}) => {
  event.preventDefault();
  const [email, password] = event.target.elements;

  if (!email.value || !password.value) {
    return alert('All form fields must be filled in');
  }

  console.log({
    [email.name]: email.value.trim(),
    [password.name]: password.value.trim(),
  });

  event.target.reset();
};

loginForm.onsubmit = handlerSubmit;
